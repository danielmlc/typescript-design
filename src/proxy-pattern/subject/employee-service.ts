export interface Employee {
    id: string;
    name: string;
    position: string;
}

// The Subject interface declares common operations for both RealSubject and the Proxy.
export interface EmployeeService {
    getEmployeeById(id: string): Employee | undefined;
    deleteEmployee(id: string): void;
}