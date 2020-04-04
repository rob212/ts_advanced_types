abstract class Department {
    static fiscalYear = 2020;

    // protected can by accessed only in this class or any class that extends it 
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string ) {
        // console.log(Department.fiscalYear);  if you want to use a static property you cannot use this keyword
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployees(this: Department, ...employee: string[]) {
        // validation here etc 
        this.employees.push(...employee);
    }

    listEmployees(this: Department) {
        return this.employees;
    }
}


class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    describe(this: ITDepartment) {
        console.log(`IT Department (${this.id}): ${this.name}`);
    }

    getAdmins() {
        return this.admins;
    }
}

// Making AccountDepartment a singleton via private constructor
class AccountingDepartment extends Department {
    private static instance: AccountingDepartment;
    private lastReport: string;

    // Getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        } 
        throw new Error('No report found.');
    }

    // Setter
    set mostRecentReport(report: string) {
        if (report) {
            this.addReport(report);
        } else {
            throw new Error('report is invalid');
        }
    }

    private constructor(id: string, public reports: string[] = []) {
        super(id, 'Accounting');
        this.lastReport = this.reports[0];
    }

    static getInstance() {
        // this in a static method gives us access to other static properties in the class
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new AccountingDepartment('d1');
            return this.instance;
        }
    }


    // Override base describe method 
    describe(this:AccountingDepartment) {
        console.log(`Accounting department ID: ${this.id}`);
    }

    addReport(report:string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    getReports() {
        return this.reports;
    }

    // Overriding a method from base class
    addEmployees(...employees: string[]) {
        if (employees && employees[0] === 'Max') {
            return;
        }
        this.employees.push(...employees);
    }
}



// Instantiating 

const itDept = new ITDepartment('d1', ['Rob', 'Sandy']);
itDept.addEmployees('Rob', 'Susan');
console.log(itDept);
console.log(`Admins: ${itDept.getAdmins()}`);
console.log(`Employees: ${itDept.listEmployees()}`);

const accounting = AccountingDepartment.getInstance();
accounting.addEmployees('Carol', 'Andrew');
console.log(accounting);
console.log(`Employees: ${accounting.listEmployees()}`);
accounting.addReport('Payroll');
accounting.addReport('Expenses');
console.log(accounting.getReports());
accounting.addEmployees('Max', 'Sam');
accounting.addEmployees('Dave', 'Sam');
console.log(accounting.listEmployees());
// When calling getter or setter we DO NOT use the parenthesis
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Billing';
//accounting.mostRecentReport = '';   // this will throw an error as report is falsy 
console.log(accounting.mostRecentReport);
accounting.describe();
itDept.describe();

const emp = Department.createEmployee('Davey');
console.log(emp, Department.fiscalYear);