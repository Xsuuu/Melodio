import hyRequest from '@/service'

export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 8) {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return hyRequest.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return hyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArtistlist(limit = 5) {
  return hyRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
