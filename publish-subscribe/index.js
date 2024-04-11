
class Platform {
    constructor() {
      this.eventPool = new Map();
    }
    // 订阅事件
    on(eventName, callback) {
      if (typeof callback !== 'function') {
        throw new Error('回调必须是一个函数');
      }
      const callbacks = this.eventPool.get(eventName) || [];
      callbacks.push(callback);
      this.eventPool.set(eventName, callbacks);
    }
    // 发布事件
    emit(eventName, data) {
      const callbacks = this.eventPool.get(eventName);
      if (callbacks) {
        callbacks.forEach(callback => {
          callback(data);
        });
      }
    }
    // 移除事件
    off(eventName, callback) {
      if (this.eventPool.has(eventName)) {
        if (callback) {
          const callbacks = this.eventPool
            .get(eventName)
            .filter(cb => cb !== callback);
          this.eventPool.set(eventName, callbacks);
        } else {
          this.eventPool.delete(eventName);
        }
      }
    }
  }
  // 创建平台实例
  const platform = new Platform();
  // 创建订阅者
  platform.on('event1', data1 => {
    console.log('订阅者 1:', data1);
  });
  platform.on('event1', data2 => {
    console.log('订阅者 2:', data2 + 2);
  });
  platform.on('event2', data3 => {
    console.log('订阅者 3:', data3 + '0v0');
  });
  // 发布事件
  platform.emit('event1', 'chuyuxuan');
  platform.off('event1');
  platform.emit('event1', 'chuyuxuan'); // 这不应该触发任何回调，因为 'event1' 已取消订阅
  platform.emit('event2', 'chuyuxuan');
  