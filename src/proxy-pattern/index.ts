import { RealEmployeeService } from './real-subject/real-employee-service';
import { ProtectionProxyEmployeeService } from './proxy/protection-proxy-employee-service';
import { EmployeeService } from './subject/employee-service';

/**
 * The client code.
 * The client works with services via the base interface, so it doesn't know
 * whether it works with a real service or a proxy.
 */
function runEmployeeServiceDemo(service: EmployeeService, employeeId: string) {
    // --- Attempt to read data ---
    try {
        const employee = service.getEmployeeById(employeeId);
        console.log(`Successfully fetched employee: ${employee?.name}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred");
        }
    }

    console.log('');

    // --- Attempt to delete data ---
    try {
        service.deleteEmployee(employeeId);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred");
        }
    }
}

function main() {
    const realService = new RealEmployeeService();

    console.log("--- Running demo with USER role ---");
    const userProxy = new ProtectionProxyEmployeeService(realService, 'USER');
    runEmployeeServiceDemo(userProxy, "1");

    console.log("\n" + "=".repeat(40) + "\n");

    // Re-fetch to show the data is still there
    console.log("--- Verifying data after USER attempt ---");
    const adminProxyForVerification = new ProtectionProxyEmployeeService(realService, 'ADMIN');
    console.log("Employee '1' still exists:", adminProxyForVerification.getEmployeeById("1"));


    console.log("\n" + "=".repeat(40) + "\n");

    console.log("--- Running demo with ADMIN role ---");
    const adminProxy = new ProtectionProxyEmployeeService(realService, 'ADMIN');
    runEmployeeServiceDemo(adminProxy, "2");

    console.log("\n" + "=".repeat(40) + "\n");

    // Re-fetch to show the data is now deleted
    console.log("--- Verifying data after ADMIN attempt ---");
    console.log("Employee '2' still exists:", adminProxyForVerification.getEmployeeById("2"));
}

main();