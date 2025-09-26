import { CPU } from '../subsystem/cpu';
import { Memory } from '../subsystem/memory';
import { HardDrive } from '../subsystem/hard-drive';

const BOOT_ADDRESS = 0x000A;
const BOOT_SECTOR = 0;
const SECTOR_SIZE = 512;

// Facade 类为复杂的子系统（CPU、内存、硬盘）提供了一个简单的接口。
export class ComputerFacade {
  // 外观类持有对子系统组件的引用。
  protected cpu: CPU;
  protected memory: Memory;
  protected hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  /**
   * start 方法是外观模式的核心。
   * 它为客户端提供了一个单一、简单的方法来执行一个复杂的操作。
   * 在这个方法内部，外观类负责协调各个子系统来完成任务。
   */
  public start(): void {
    console.log("Computer starting...");
    this.cpu.freeze();
    const bootData = this.hardDrive.read(BOOT_SECTOR, SECTOR_SIZE);
    this.memory.load(BOOT_ADDRESS, bootData);
    this.cpu.jump(BOOT_ADDRESS);
    this.cpu.execute();
    console.log("Computer started successfully!");
  }
}