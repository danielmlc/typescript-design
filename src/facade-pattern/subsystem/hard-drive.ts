// HardDrive 是第三个复杂的子系统组件。
export class HardDrive {
  public read(lba: number, size: number): string {
    console.log(`HardDrive: Reading ${size} bytes from LBA ${lba}.`);
    return "Boot sector data";
  }
}