const shapeStrategy = {
    circle: (radius: number) => Math.PI * radius ** 2,
    rectangle: (width: number, height: number) => width * height,
    triangle: (base: number, height: number) => 0.5 * base * height
} as const;

class ShapeCalculator<T> {
    private strategy: (...args: T[]) => number;

    constructor(strategy: (...args: T[]) => number) {
        this.strategy = strategy;
    }

    setStrategy(strategy: (...args: T[]) => number) {
        this.strategy = strategy;
    }

    calculate(...args: T[]): number {
        return this.strategy(...args);
    }
}

// 计算圆的面积
const circleCalculator = new ShapeCalculator<number>(shapeStrategy.circle);

// 计算矩形的面积
const rectangleCalculator = new ShapeCalculator<number>(shapeStrategy.rectangle);

// 使用计算器
console.log(circleCalculator.calculate(10)); // 输出圆的面积
console.log(rectangleCalculator.calculate(10, 20)); // 输出矩形的面积