import nprogress from "nprogress"
import "nprogress/nprogress.css"
import { App } from "vue"


let loadingNum = 0
export const $showLoading = () => {
  loadingNum++
  nprogress.start()
  const interval = setInterval(() => {
    if (nprogress.isStarted() && nprogress.status < 0.8) {
      nprogress.set(nprogress.status + 0.1)
    } else {
      clearInterval(interval)
    }
  }, 500)
}
export const $hideLoading = () => {
  loadingNum = Math.max(0, --loadingNum)
  if (loadingNum === 0) {
    nprogress.done()
  }
}
export default function (app: App): void {
  app.config.globalProperties.$showLoading = $showLoading
  app.config.globalProperties.$hideLoading = $hideLoading
}
