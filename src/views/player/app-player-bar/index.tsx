import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Slider, message } from 'antd'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatTime, getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'
import { shallowEqual, useDispatch } from 'react-redux'
import {
  changeLyricsIndexAction,
  changeMusicAction,
  changePlayModeAction
} from '../store/player'

interface Iprops {
  children?: ReactNode
}

const AppPlayerBar: FC<Iprops> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong, lyrics, lyricsIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricsIndex: state.player.lyricsIndex,
      playMode: state.player.playMode
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()

  function handlePlayBtnClick() {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error('播放失败:', err)
          setIsPlaying(false)
        })
    }
  }
  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  useEffect(() => {
    if (!audioRef.current) return

    const audioSrc = getSongPlayUrl(currentSong.id)
    audioRef.current.src = audioSrc
    audioRef.current.load()
    setDuration(currentSong.dt / 1000)

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn('自动播放被阻止:', err)
        setIsPlaying(false)
      })
    }
  }, [currentSong])

  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime

    if (!isSliding) {
      setCurrentTime(currentTime)
      setProgress((currentTime / duration) * 100)
    }

    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime * 1000) {
        index = i - 1
        break
      }
    }

    if (lyricsIndex === index || index === -1) return
    dispatch(changeLyricsIndexAction(index))
    message.open({
      content: lyrics[index]?.text,
      key: 'lyric',
      duration: 0
    })
  }

  function handleSliderChanged(value: number) {
    audioRef.current!.currentTime = currentTime
    setIsSliding(false)
  }
  function handleSliderChanging(value: number) {
    setIsSliding(true)
    setProgress(value)
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }
  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic()}
            // 为true可以省略不传
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img src={getImageSize(currentSong?.al?.picUrl, 50)} />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              {/* Slider */}
              <Slider
                value={progress}
                step={0.2}
                tooltip={{ open: false }}
                onChange={handleSliderChanging}
                onChangeComplete={handleSliderChanged}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  )
}
//没做flex布局所以用span,默认不会换行。div+flext也不会换行

export default memo(AppPlayerBar)
