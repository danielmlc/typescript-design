// Settings 类实现了单例模式，用于管理应用的全局配置。
export class Settings {
  // a. 持有类唯一实例的静态成员变量。
  private static instance: Settings;

  // b. 为了防止外部通过 `new` 操作符创建新实例，我们将构造函数设为私有。
  private constructor() {
    // 假设这里有一些初始化代码，比如加载配置文件。
    console.log("Settings instance created. Initializing settings...");
  }

  // c. 提供一个全局访问点来获取这个唯一的实例。
  public static getInstance(): Settings {
    // 如果实例不存在，就创建一个。
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    // 返回这个唯一的实例。
    return Settings.instance;
  }

  // 示例方法：获取某个配置项
  public get(key: string): string | undefined {
    // 在真实应用中，这里会从加载的配置中读取数据。
    // 我们定义一个索引签名来告诉 TypeScript 这个对象可以用字符串来索引。
    const settings: { [key: string]: string } = {
      'theme': 'dark',
      'language': 'en',
    };
    return settings[key];
  }
}