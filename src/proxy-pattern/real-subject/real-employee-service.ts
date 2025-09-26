import { Employee, EmployeeService } from '../subject/employee-service';

// The RealSubject contains some core business logic.
export class RealEmployeeService implements EmployeeService {
    private employees: Map<string, Employee> = new Map();

    constructor() {
        // Pre-populate with some data
        this.employees.set("1", { id: "1", name: "Alice", position: "Developer" });
        this.employees.set("2", { id: "2", name: "Bob", position: "Designer" });
    }

    public getEmployeeById(id: string): Employee | undefined {
        console.log(`[RealService] Fetching employee with id ${id}`);
        return this.employees.get(id);
    }

    public deleteEmployee(id: string): void {
        console.log(`[RealService] Deleting employee with id ${id}`);
        this.employees.delete(id);
        console.log(`[RealService] Employee ${id} deleted.`);
    }
}