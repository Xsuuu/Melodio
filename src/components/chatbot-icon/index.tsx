import React, { memo, useRef, useState, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { IconWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const API_BASE = process.env.REACT_APP_API_URL || ''
const API_KEY = process.env.REACT_APP_API_KEY || ''
const TYPE_SPEED = 25

const ChatIcon: FC<Iprops> = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const chatBodyRef = useRef<HTMLDivElement>(null)
  const [chatHistory, setChatHistory] = useState<
    { type: string; content: string }[]
  >([])
  const [showChatbot, setShowChatbot] = useState(false)

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
      }
    })
  }, [])
  const [interactionId, setInteractionId] = useState<string | null>(null)
  const twRef = useRef({
    fullText: '',
    displayedIndex: 0,
    timer: null as ReturnType<typeof setInterval> | null,
    retryCount: 0
  })

  const startTypewriter = useCallback(() => {
    const tw = twRef.current
    if (tw.timer) return
    tw.timer = setInterval(() => {
      if (tw.displayedIndex < tw.fullText.length) {
        tw.displayedIndex++
        setChatHistory((prev) => {
          if (prev.length === 0) return prev
          const updated = [...prev]
          const last = updated[updated.length - 1]
          if (last.type === 'model_output') {
            updated[updated.length - 1] = {
              ...last,
              content: tw.fullText.slice(0, tw.displayedIndex)
            }
          }
          return updated
        })
        scrollToBottom()
      } else {
        clearInterval(tw.timer!)
        tw.timer = null
      }
    }, TYPE_SPEED)
  }, [scrollToBottom])

  const generateBotresponse = async (userMessage: string) => {
    const tw = twRef.current

    if (tw.timer) {
      clearInterval(tw.timer)
      tw.timer = null
    }
    tw.fullText = ''
    tw.displayedIndex = 0
    tw.retryCount = 0

    try {
      const body: Record<string, unknown> = {
        model: 'gemini-3.5-flash',
        system_instruction:
          '你是一只猫，你的名字是小太阳，你特别热爱歌曲，非常热衷于向人推荐各种类型的歌曲',
        input: userMessage
      }

      const isFirst = !interactionId

      if (isFirst) {
        const response = await fetch(API_BASE, {
          method: 'POST',
          headers: {
            'x-goog-api-key': API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        const data = await response.json()
        if (!response.ok)
          throw new Error(data.error?.message || 'Something went wrong!')
        console.log('first response full:', data)
        setInteractionId(data.id)
        tw.fullText = data.steps?.[1]?.content?.[0]?.text || ''
        startTypewriter()
      } else {
        body.previous_interaction_id = interactionId
        body.stream = true

        const response = await fetch(API_BASE + '?alt=sse', {
          method: 'POST',
          headers: {
            'x-goog-api-key': API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        if (!response.ok) {
          const errData = await response.json()
          throw new Error(errData.error?.message || 'Something went wrong!')
        }

        const reader = response.body?.getReader()
        if (!reader) throw new Error('No reader available')
        const decoder = new TextDecoder()
        let buffer = ''

        let readerDone = false
        while (!readerDone) {
          const { done, value } = await reader.read()
          readerDone = done
          if (done) break
          buffer += decoder.decode(value, { stream: true })

          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6).trim()
              if (!data || data === '[DONE]') continue
              try {
                const parsed = JSON.parse(data)
                if (parsed.event_type === 'interaction.created') {
                  setInteractionId(parsed.interaction.id)
                }
                if (parsed.event_type === 'step.delta' && parsed.index === 1) {
                  tw.fullText += parsed.delta.text
                  startTypewriter()
                }
              } catch {
                // skip incomplete JSON chunks
              }
            }
          }
        }
      }
    } catch (error) {
      const err = error as { message?: string }
      if (err?.message?.match(/quota|rate limit|429/i) && tw.retryCount < 2) {
        tw.retryCount++
        const waitMs = 45000
        setChatHistory((prev) => {
          const updated = [...prev]
          const last = updated[updated.length - 1]
          if (last?.type === 'model_output' && last.content === 'Thinking...') {
            updated[updated.length - 1] = {
              ...last,
              content: `⏳ API 限频，${waitMs / 1000}秒后自动重试 (${tw.retryCount}/2)...`
            }
          }
          return updated
        })
        await new Promise((r) => setTimeout(r, waitMs))
        return generateBotresponse(userMessage)
      }
      console.log(error)
      setChatHistory((prev) => {
        const updated = [...prev]
        const last = updated[updated.length - 1]
        if (last?.type === 'model_output') {
          updated[updated.length - 1] = {
            ...last,
            content: '❌ 请求失败，请稍后重试'
          }
        }
        return updated
      })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const userMessage = inputRef.current?.value.trim()
    if (!userMessage) return
    if (inputRef.current) inputRef.current.value = ''

    setChatHistory((history) => [
      ...history,
      { type: 'user_input', content: userMessage }
    ])

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { type: 'model_output', content: 'Thinking...' }
      ])
      scrollToBottom()
      generateBotresponse(userMessage)
    }, 600)
  }

  const Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 1024 1024"
    >
      <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
    </svg>
  )

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      <IconWrapper>
        <div className={`container ${showChatbot ? 'show-chatbot' : ''}`}>
          <button
            id="chatbot-toggler"
            onClick={() => setShowChatbot((prev) => !prev)}
          >
            <span className="material-symbols-rounded">mode_comment</span>
            <span className="material-symbols-rounded">close</span>
          </button>

          <div className="chatbot-popup">
            <div className="chat-header">
              <div className="header-info">
                <Icon />
                <h2 className="logo-text">Chatbot</h2>
              </div>
              <button
                className="material-symbols-outlined"
                onClick={() => setShowChatbot((prev) => !prev)}
              >
                keyboard_arrow_down
              </button>
            </div>

            <div className="chat-body" ref={chatBodyRef}>
              <div className="message bot-message">
                <Icon />
                <p className="message-text">
                  你好呀 我是小猫小太阳 👋 <br /> 今天想听什么类型的歌曲呢？
                </p>
              </div>
              {chatHistory.map((chat, index) => (
                <div
                  className={`message ${chat.type === 'model_output' ? 'bot' : 'user'}-message`}
                  key={index}
                >
                  {chat.type === 'model_output' && <Icon />}
                  <p className="message-text">{chat.content}</p>
                </div>
              ))}
            </div>

            <div className="chat-footer">
              <form
                action="#"
                className="chat-form"
                onSubmit={handleFormSubmit}
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Message..."
                  className="message-input"
                  required
                />
                <button className="material-symbols-outlined">
                  arrow_upward
                </button>
              </form>
            </div>
          </div>
        </div>
      </IconWrapper>
    </div>
  )
}

export default memo(ChatIcon)
