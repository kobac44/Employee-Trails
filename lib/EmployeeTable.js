const mysql = require('mysql');
const inquirer = require('inquirer');
const console_table = require('console.table');
// employee, manager, department classes for command-line
class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id;
        this.first_name;
        this.last_name;
        this.role_id;
        this.manager_id;
    }
    getFirst() {

    }
    getLast() {

    }
    getRole() {

    }
    getMngr() {

    }
}
module.exports = Employee;