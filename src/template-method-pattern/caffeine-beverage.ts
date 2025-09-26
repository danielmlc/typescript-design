// AbstractClass (CaffeineBeverage) 定义了算法的骨架。
export abstract class CaffeineBeverage {

    /**
     * 这是模板方法。它将算法定义为一个整体，并调用一系列步骤。
     * 它被声明为 final（在概念上），以防止子类覆盖它。
     */
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    /**
     * 这些是算法中的具体步骤。它们对所有子类都是通用的。
     */
    private boilWater(): void {
        console.log("Boiling water");
    }

    private pourInCup(): void {
        console.log("Pouring into cup");
    }

    /**
     * 这两个是“原语”操作，必须由子类实现。
     * 它们是算法中可以变化的部分。
     */
    protected abstract brew(): void;
    protected abstract addCondiments(): void;
}