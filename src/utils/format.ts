export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return `${imageUrl}?param=${width}y${height}`
}

export function formatTime(time: number) {
  const second = Math.floor(time % 60)
  const minute = Math.floor(time / 60)

  function formatLittleTime(time: number) {
    return String(time).padStart(2, '0')
  }
  return `${formatLittleTime(minute)}:${formatLittleTime(second)}`
}
