# 代理模式 (Proxy Pattern)

## 意图

**代理模式**是一种结构型设计模式，它为你提供了一个对象的替代品或占位符，以控制对这个对象的访问。

代理控制着对原对象的访问，并允许在将请求传递给原对象之前或之后执行某些操作。

## 场景

代理模式有很多应用场景，比如：
*   **虚拟代理 (Virtual Proxy)**: 当一个对象的创建开销很大时，可以延迟创建它，直到真正需要它的时候。
*   **远程代理 (Remote Proxy)**: 为一个位于不同地址空间或网络中的对象提供一个本地的代表。
*   **保护代理 (Protection Proxy)**: 控制对一个对象的访问，根据调用者的权限来决定是否将请求转发给真实对象。

我们的示例实现了一个**保护代理**。想象一下，我们有一个员工数据服务 (`EmployeeService`)，它提供了读取和删除员工记录的功能。我们希望任何用户都能读取员工数据，但只有“管理员”角色的用户才能删除员工。

代理模式通过创建一个 `ProtectionProxyEmployeeService` 来优雅地解决这个问题。客户端代码不直接与 `RealEmployeeService` 交互，而是通过这个代理。当客户端调用 `deleteEmployee()` 方法时，代理会先检查用户的角色。如果角色是“管理员”，代理就会将请求转发给 `RealEmployeeService`；否则，它会直接拒绝该请求。

## 结构

1.  **主题 (Subject)**: (`EmployeeService` 接口)
    *   定义了“真实主题”和“代理”的通用接口。这使得代理可以被客户端无缝地用来替代真实主题。
    ```typescript
    // src/proxy-pattern/subject/employee-service.ts
    export interface EmployeeService {
        getEmployeeById(id: string): Employee | undefined;
        deleteEmployee(id: string): void;
    }
    ```

2.  **真实主题 (Real Subject)**: (`RealEmployeeService` 类)
    *   定义了代理所代表的真实对象。它包含了核心的业务逻辑。
    ```typescript
    // src/proxy-pattern/real-subject/real-employee-service.ts
    export class RealEmployeeService implements EmployeeService {
        private employees: Map<string, Employee> = new Map();

        constructor() { /* ... pre-populate data ... */ }

        public getEmployeeById(id: string): Employee | undefined {
            console.log(`[RealService] Fetching employee with id ${id}`);
            return this.employees.get(id);
        }

        public deleteEmployee(id: string): void {
            console.log(`[RealService] Deleting employee with id ${id}`);
            this.employees.delete(id);
        }
    }
    ```

3.  **代理 (Proxy)**: (`ProtectionProxyEmployeeService` 类)
    *   实现了与真实主题相同的接口，并持有一个对真实主题对象的引用。
    *   它实现了访问控制逻辑。
    ```typescript
    // src/proxy-pattern/proxy/protection-proxy-employee-service.ts
    export class ProtectionProxyEmployeeService implements EmployeeService {
        private realService: RealEmployeeService;
        private userRole: 'ADMIN' | 'USER';

        constructor(realService: RealEmployeeService, userRole: 'ADMIN' | 'USER') {
            this.realService = realService;
            this.userRole = userRole;
        }

        private hasAccess(): boolean {
            return this.userRole === 'ADMIN';
        }

        public deleteEmployee(id: string): void {
            console.log(`[Proxy] User '${this.userRole}' is attempting to delete employee.`);
            // 在转发请求前进行权限检查
            if (this.hasAccess()) {
                console.log("[Proxy] Access granted.");
                this.realService.deleteEmployee(id);
            } else {
                throw new Error("Access Denied: You do not have permission to delete employee records.");
            }
        }
        // ... getEmployeeById is forwarded directly
    }
    ```

## 优点

*   **控制访问**: 你可以在不修改真实服务代码的情况下，管理对它的访问（例如，进行权限检查、懒加载、日志记录等）。
*   **开闭原则**: 你可以在不修改客户端或真实主题代码的情况下，引入新的代理来增加新的功能。
*   **单一职责原则**: 将访问控制等辅助性功能从核心业务逻辑中分离出来。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/proxy-pattern/index.ts
```