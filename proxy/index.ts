/* 在js 中，ES6新增了一个 Proxy构造函数，它用于创建一个代理对象，
该代理对象可以拦截并修改基本操作，比如属性查找、赋值、枚举、函数调用等。
你可以使用Proxy来对对象进行代理操作，从而实现对对象的操作进行拦截和修改。
 */

// 创建一个Proxy对象需要两个参数：
// 目标对象（target）
// 处理对象（handler）

// 下面是一个日志记录的方法。 通过proxy，我们可以记录下来对目标的所有操作。

type TargetObject = {
    a: number;
    b: number;
  };
  
  const targetObject: TargetObject = {
    a: 10,
    b: 20
  };
  
  const handler: ProxyHandler<TargetObject> = {
    // 这里分别介绍一下 set 函数的各个参数：
    // target: 目标对象 
    // property: 目标对象的属性名
    // value: 目标对象的属性值
    // receiver: 最初被调用时的代理对象。通常是代理本身。
    // 这里我们假定set 方法有成功和失败，所以我们给他的返回值定义为 boolean
    set: (target: TargetObject, property: keyof TargetObject, value: any, receiver: any): boolean => {

      // 这里我们打印出属性名和属性值的变化，表示我们监听到了有人对代理对象的操作，例如读取，删除等
      console.log(`Property ${String(property)} changed from ${target[property]} to ${value}`);

      // 在我们的示例中，我们是对代理对象进行赋值操作
      target[property] = value;

      // 返回 true 表示操作成功
      return true; 
    }
  };
  
  const proxy = new Proxy(targetObject, handler);
  
  proxy.a = 30;
  // 控制台输出: Property a changed from 10 to 30