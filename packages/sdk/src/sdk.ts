declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export class TelegrowSDK {
  static GTAG_ID = 'G-2K4LMF1BW1'

  constructor(
    readonly projectId: string,
    readonly debug = false,
  ) {}

  static importScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = url
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    })
  }

  async init() {
    if (typeof window === 'undefined') {
      return
    }

    if (!window.dataLayer) {
      window.dataLayer = []
      await TelegrowSDK.importScript(`https://www.googletagmanager.com/gtag/js?id=${TelegrowSDK.GTAG_ID}`)
      window.gtag('js', new Date())
    }

    window.gtag('config', TelegrowSDK.GTAG_ID, {
      projectId: this.projectId,
      ...(this.debug ? { debug_mode: true } : {}),
    })
  }
}
