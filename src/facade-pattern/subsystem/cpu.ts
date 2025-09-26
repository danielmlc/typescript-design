// CPU 是一个复杂的子系统组件。
export class CPU {
  public freeze(): void {
    console.log("CPU: Freezing...");
  }

  public jump(position: number): void {
    console.log(`CPU: Jumping to address ${position}...`);
  }

  public execute(): void {
    console.log("CPU: Executing instructions...");
  }
}