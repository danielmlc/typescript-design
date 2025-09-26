import { Employee, EmployeeService } from '../subject/employee-service';
import { RealEmployeeService } from '../real-subject/real-employee-service';

type UserRole = 'ADMIN' | 'USER';

// The Proxy has an interface identical to the RealSubject.
export class ProtectionProxyEmployeeService implements EmployeeService {
    private realService: RealEmployeeService;
    private userRole: UserRole;

    constructor(realService: RealEmployeeService, userRole: UserRole) {
        this.realService = realService;
        this.userRole = userRole;
    }

    // The proxy can perform some checks before delegating to the real subject.
    private hasAccess(): boolean {
        return this.userRole === 'ADMIN';
    }

    public getEmployeeById(id: string): Employee | undefined {
        // Reading data is allowed for all roles, so we delegate directly.
        console.log(`[Proxy] User '${this.userRole}' is requesting employee data.`);
        return this.realService.getEmployeeById(id);
    }

    public deleteEmployee(id: string): void {
        console.log(`[Proxy] User '${this.userRole}' is attempting to delete employee.`);
        // Deleting data is a protected operation.
        if (this.hasAccess()) {
            console.log("[Proxy] Access granted.");
            this.realService.deleteEmployee(id);
        } else {
            console.log("[Proxy] Access denied.");
            throw new Error("Access Denied: You do not have permission to delete employee records.");
        }
    }
}