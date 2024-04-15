
// 1. -------------------采用闭包实现-----------------------------
type myInstance = {
    name: string;
    showMessage: () => void;
};

const Singleton = (function () {
    let _instance: myInstance;

    function createInstance(): myInstance {
        // 创建实例的代码
        return {
            // 定义了一个实例的属性和方法
            name: "chuyuxuan0v0",
            showMessage: () => {
                console.log("Hello , This is a Singleton of chuyuxuan0v0!");
            }
        };
    }

    return {
        getInstance: function () {
            // 如果实例不存在，则创建一个新实例；否则直接返回现有实例
            if (!_instance) {
                _instance = createInstance();
            }
            return _instance;
        }
    };
})();

// 使用示例
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // 输出 true，说明两个变量引用的是同一个实例
instance1.showMessage(); // 输出 "Hello from Singleton!"



// 2. -------------------采用类实现-----------------------------

class SingletonClass { // 定义一个类
    private static instance: SingletonClass; // 定义一个静态属性，用于存储单例实例
    public name: string | null; // 定义一个公共属性
    public showMessage: () => void;
    // 私有化构造函数，防止外部通过 new 关键字创建实例，以确保只有一个实例存在，并且控制实例化的方式
    private constructor(name: string | null, fuc: () => void) {
        // 定义共属性的
        this.name = name;
        this.showMessage = fuc;
    }

    // 提供了一个静态方法，用于获取单例实例
    public static getInstance(): SingletonClass {
        // 如果实例不存在，则创建一个新实例；否则直接返回现有实例
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass('chuyuxuan0v0', () => {
                console.log("Hello , This is a SingletonClass of chuyuxuan0v0!");
            });
        }
        return SingletonClass.instance;
    }


}

// Usage:
const singleton1 = SingletonClass.getInstance();
const singleton2 = SingletonClass.getInstance();

console.log(singleton1 === singleton2); // 输出: true
console.log(singleton2.name); // 输出: "chuyuxuan0v0"
singleton1.showMessage(); // 输出: "Hello , This is a SingletonClass of chuyuxuan0v0!"
