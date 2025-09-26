// Transport 接口定义了所有运输工具共有的方法
export interface Transport {
  deliver(): void;
}