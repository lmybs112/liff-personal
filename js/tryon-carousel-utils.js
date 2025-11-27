'use strict'

;(function (global, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    global.TryonCarouselUtils = factory()
  }
})((typeof globalThis !== 'undefined' && globalThis) || (typeof self !== 'undefined' ? self : this), function () {
  const FALLBACK_QR_TARGET = 'https://inffits.com'
  const QR_SERVICE_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data='

  /**
   * 從 API 回傳資料中整理輪播所需的圖片與商品資訊
   * @param {object} payload - Copilot API 回傳原始資料
   * @returns {{images: string[], galleryImages: string[], heroImage: string, productName: string, productSku: string, productLink: string}}
   */
  function transformCopilotPayload(payload) {
    const sourceList = Array.isArray(payload && payload.data) ? payload.data : []
    // 尋找第一個有效資料項：只要有 coverimage_url、Imgsrc、ItemName 或 Link 任一存在即可
    const firstValid = sourceList.find((item) => {
      if (!item || typeof item !== 'object') return false
      const hasCoverImage = Array.isArray(item.coverimage_url) && item.coverimage_url.length > 0
      const hasImgsrc = typeof item.Imgsrc === 'string' && item.Imgsrc.trim().length > 0
      const hasItemName = typeof item.ItemName === 'string' && item.ItemName.trim().length > 0
      const hasLink = typeof item.Link === 'string' && item.Link.trim().length > 0
      return hasCoverImage || hasImgsrc || hasItemName || hasLink
    })

    if (!firstValid) {
      return {
        images: [],
        galleryImages: [],
        heroImage: '',
        productName: '',
        productSku: '',
        productLink: ''
      }
    }

    // 商品細節預覽使用 coverimage_url（正方形）
    const images = dedupeImageList(firstValid.coverimage_url)
    // 穿搭靈感推薦使用 image_url（高長方形）
    const galleryImages = dedupeImageList(firstValid.image_url)
    const heroCandidate = images[0] || firstValid.Imgsrc || galleryImages[0] || ''
    const heroImage = typeof heroCandidate === 'string' ? heroCandidate.trim() : ''
    const productLink = isValidHttpUrl(firstValid.Link) ? firstValid.Link.trim() : ''
    const productName = typeof firstValid.ItemName === 'string' ? firstValid.ItemName : ''
    const productSku = extractSku(productName)

    return {
      images,
      galleryImages,
      heroImage,
      productName,
      productSku,
      productLink
    }
  }

  /**
   * 產生 Copilot API 所需的 request payload
   * @param {string} brand
   * @param {string} Link
   * @returns {{Brand: string, Link: string}}
   */
  function createCopilotPayload(brand, Link) {
    return {
      Brand: (brand || '').trim().toUpperCase(),
      Link: (Link || '').trim()
    }
  }

  /**
   * 根據穿搭圖片數量決定是否啟用 CTA 脈衝效果
   * @param {number} totalImages
   * @returns {boolean}
   */
  function shouldHighlightTryonScrollCta(totalImages) {
    return Number.isFinite(totalImages) && totalImages > 0
  }

  /**
   * 取得穿搭彈窗動畫設定（遵循 Material Design Motion Duration 建議）
   * 參考：https://m3.material.io/styles/motion/easing-and-duration/overview
   * @returns {{enterDuration: number, exitDuration: number}}
   */
  function getTryonModalAnimationSpec() {
    return {
      enterDuration: 320,
      exitDuration: 260
    }
  }

  /**
   * 建立 QR code 服務網址
   * @param {string} targetUrl
   * @returns {string}
   */
  function buildQrImageUrl(targetUrl) {
    const safeTarget = typeof targetUrl === 'string' && targetUrl.trim().length > 0 ? targetUrl.trim() : FALLBACK_QR_TARGET
    return `${QR_SERVICE_URL}${encodeURIComponent(safeTarget)}`
  }

  /**
   * 從商品名稱中擷取 SKU（出現在全形括號內）
   * @param {string} name
   * @returns {string}
   */
  function extractSku(name) {
    if (typeof name !== 'string') return ''
    const match = name.match(/【([^】]+)】/)
    return match ? match[1].trim() : ''
  }

  /**
   * 過濾及去重圖片陣列
   * @param {string[]} list
   * @returns {string[]}
   */
  function dedupeImageList(list) {
    if (!Array.isArray(list)) return []
    const unique = new Set()
    list.forEach((url) => {
      if (typeof url === 'string' && url.trim()) {
        unique.add(url.trim())
      }
    })
    return Array.from(unique)
  }

  /**
   * 確認網址是否為 http(s)
   * @param {string} value
   * @returns {boolean}
   */
  function isValidHttpUrl(value) {
    if (typeof value !== 'string') return false
    try {
      const parsed = new URL(value)
      return ['http:', 'https:'].includes(parsed.protocol)
    } catch {
      return false
    }
  }

  return {
    transformCopilotPayload,
    createCopilotPayload,
    buildQrImageUrl,
    extractSku,
    shouldHighlightTryonScrollCta,
    getTryonModalAnimationSpec
  }
})

