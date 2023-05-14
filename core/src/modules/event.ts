/**
 * 事件发射器
 * @param events
 */
export function EventEmitter<
  Events extends Map<EventType, Handler[]>,
  Handler extends (...any: any[]) => void,
  EventType
>(events: Events) {
  const all = events || new Map();
  return {
    all,
    /** 订阅事件 */
    on(type: EventType, handler: Handler) {
      const handlers = all.get(type);
      if (handlers) {
        handlers.push(handler);
      } else {
        all.set(type, [handler]);
      }
    },
    // 只触发一次
    once(type: EventType, handler: Handler) {
      const listenerCb: any = (...args: any[]) => {
        handler(...args);
        this.off(type, handler);
      };
      this.on(type, listenerCb);
    },
    /** 取消订阅 */
    off(type: EventType, handler: Handler) {
      const handlers = all.get(type);
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler), 1);
        } else {
          all.set(type, []);
        }
      }
    },

    /** 分发事件 */
    emit(type: EventType, ...args: any) {
      const handlers = all.get(type);
      if (handlers) {
        handlers.slice().map(handler => handler(...args));
      }
    },
  };
}
