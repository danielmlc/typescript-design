// Memory 是另一个复杂的子系统组件。
export class Memory {
  public load(position: number, data: string): void {
    console.log(`Memory: Loading data "${data}" to address ${position}.`);
  }
}