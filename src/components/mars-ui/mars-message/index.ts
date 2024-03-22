import { message } from "ant-design-vue"
import MarsIcon from "../mars-icon/index.vue"
import { App, h } from "vue"
import "./message.less"



message.config({
  top: `100px`
})
export const $message = (msg: string, type: keyof typeof message = "info") => {
  if (message[type] && typeof message[type] === "function") {
    const func = message[type] as (a: any) => Promise<any>
    return func({
      class: "mars-message",
      icon: h(MarsIcon, { icon: "remind", theme: "filled", size: "20", fill: "#008aff" }),
      content: msg
    })
  } else {
    return Promise!.reject()
  }
}
export default function (app: App): void {
  app.config.globalProperties.$message = $message
}
