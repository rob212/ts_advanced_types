"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployees = function () {
        var _a;
        var employee = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            employee[_i] = arguments[_i];
        }
        (_a = this.employees).push.apply(_a, employee);
    };
    Department.prototype.listEmployees = function () {
        return this.employees;
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department (" + this.id + "): " + this.name);
    };
    ITDepartment.prototype.getAdmins = function () {
        return this.admins;
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        if (reports === void 0) { reports = []; }
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = _this.reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (report) {
            if (report) {
                this.addReport(report);
            }
            else {
                throw new Error('report is invalid');
            }
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepartment('d1');
            return this.instance;
        }
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting department ID: " + this.id);
    };
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.getReports = function () {
        return this.reports;
    };
    AccountingDepartment.prototype.addEmployees = function () {
        var _a;
        var employees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            employees[_i] = arguments[_i];
        }
        if (employees && employees[0] === 'Max') {
            return;
        }
        (_a = this.employees).push.apply(_a, employees);
    };
    return AccountingDepartment;
}(Department));
var itDept = new ITDepartment('d1', ['Rob', 'Sandy']);
itDept.addEmployees('Rob', 'Susan');
console.log(itDept);
console.log("Admins: " + itDept.getAdmins());
console.log("Employees: " + itDept.listEmployees());
var accounting = AccountingDepartment.getInstance();
accounting.addEmployees('Carol', 'Andrew');
console.log(accounting);
console.log("Employees: " + accounting.listEmployees());
accounting.addReport('Payroll');
accounting.addReport('Expenses');
console.log(accounting.getReports());
accounting.addEmployees('Max', 'Sam');
accounting.addEmployees('Dave', 'Sam');
console.log(accounting.listEmployees());
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Billing';
console.log(accounting.mostRecentReport);
accounting.describe();
itDept.describe();
var emp = Department.createEmployee('Davey');
console.log(emp, Department.fiscalYear);
//# sourceMappingURL=classes.js.map