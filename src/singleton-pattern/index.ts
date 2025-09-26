import { Settings } from './settings';

function clientCode() {
  // 客户端代码通过调用静态方法 `getInstance` 来获取 Settings 的单例。
  console.log("Attempting to get settings instance 1...");
  const settings1 = Settings.getInstance();

  console.log("Attempting to get settings instance 2...");
  const settings2 = Settings.getInstance();

  // 验证两个变量是否指向同一个实例。
  if (settings1 === settings2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }

  // 使用这个实例来获取配置
  const theme = settings1.get('theme');
  console.log(`Current theme is: ${theme}`);
}

clientCode();