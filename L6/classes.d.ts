declare class Department {
    name: string;
    protected employees: string[];
    private readonly id;
    constructor(id: string, n: string);
    describe(this: Department): void;
    addEmployee(emp: string): void;
    printEmployeeInformation(): void;
}
declare class AccountingDepartment extends Department {
    private reports;
    constructor(id: string, reports: string[]);
    addReports(text: string): void;
    printReports(): void;
    addEmployee(emp: string): void;
    get getReports(): string[];
    set setReports(value: string);
}
declare const accDep: AccountingDepartment;
declare class Department2 {
    name: string;
    protected employees: string[];
    private readonly id;
    constructor(id: string, n: string);
    describe(this: Department2): void;
    addEmployee(emp: string): void;
    printEmployeeInformation(): void;
    static getSalary(): {
        salary: number;
    };
}
declare const salary: {
    salary: number;
};
declare abstract class Department3 {
    name: string;
    protected employees: string[];
    protected readonly id: string;
    constructor(id: string, n: string);
    abstract describe(this: Department3): void;
    abstract displayName(): void;
}
declare class Subclass extends Department3 {
    private reports;
    constructor(id: string, reports: string[]);
    describe(): void;
    displayName(): void;
}
declare const subClass: Subclass;
//# sourceMappingURL=classes.d.ts.map