import { Tea } from './tea';
import { Coffee } from './coffee';

/**
 * 客户端代码
 */
function runBeveragePreparation() {
    console.log("--- Making tea ---");
    const tea = new Tea();
    tea.prepareRecipe();

    console.log("\n--- Making coffee ---");
    const coffee = new Coffee();
    coffee.prepareRecipe();
}

runBeveragePreparation();