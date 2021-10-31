import { Event } from "../../Event/Event";
import { Router } from "../../Router/Router";

export interface ShiyiComponentBase extends WechatMiniprogram.Component.InstanceMethods<WechatMiniprogram.Component.DataOption> {

}

type TIsPage = false

export class ShiyiComponentBase implements WechatMiniprogram.Component.Options<
  WechatMiniprogram.Component.DataOption,
  WechatMiniprogram.Component.PropertyOption,
  WechatMiniprogram.Component.MethodOption,
  WechatMiniprogram.IAnyObject,
  TIsPage>
{
  public RegisteredEventHandlers: Record<string, (e: Event) => void> = {};
  public AddHandler(Trigger: string, Handler: (e: Event) => void): void {
    this.RegisteredEventHandlers[Trigger] = Handler;
  }
  public Removehandler(Trigger: string, Handler: (e: Event) => void): void {
    if (this.RegisteredEventHandlers[Trigger] === Handler) {
      delete this.RegisteredEventHandlers[Trigger];
    }
  }

  public EventHandler(e: Event): void {
    e.Catch();
    let Handler = this.RegisteredEventHandlers[e.EventName];
    console.log(Handler);
    if (Handler) {
      Handler(e);
    } else {
      e.Pass();
    }
  }

  public onLoad() {
    Router.CurrentPage.ComponentStack.push(this);
  }
};