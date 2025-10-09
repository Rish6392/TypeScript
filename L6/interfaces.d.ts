interface addFun {
    (a: number, b: number): number;
}
declare let add: addFun;
interface Named {
    readonly name: string;
    outputName?: string;
}
declare class Person implements Named {
    name: string;
    constructor(n: string);
}
//# sourceMappingURL=interfaces.d.ts.map