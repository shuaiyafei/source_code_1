// WebP 支持检测
let webpSupported = null

export function checkWebPSupport() {
  if (webpSupported !== null) {
    return webpSupported
  }

  try {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 1
    webpSupported = canvas.toDataURL('image/webp').indexOf('image/webp') === 5
  } catch (e) {
    webpSupported = false
  }

  return webpSupported
}

export function getImageSrc(pngPath) {
  if (!checkWebPSupport()) {
    return pngPath
  }
  return pngPath.replace(/\.png$/, '.webp')
}
