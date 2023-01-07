const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    };

    findAllDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name AS department FROM department;");
    };

    findAllRoles() {
        return this.connection.promise().query("SELECT role.id, role.title AS job_title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
    };

    findAllEmployees() {
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
    };

    findAllManagers(employeeId) {
        return this.connection.promise().query("SELECT id, first_name, last_name FROM employee WHERE id != ?", employeeId);
    };

    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    };

    deleteDepartment(departmentId) {
        return this.connection.promise().query("DELETE FROM department WHERE id = ?", departmentId);
    };

    addRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    };

    deleteRole(roleId) {
        return this.connection.promise().query("DELETE FROM role WHERE id = ?", roleId);
    };

    addEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    };

    deleteEmployee(employeeId) {
        return this.connection.promise().query("DELETE FROM employee WHERE id = ?", employeeId);
    };

    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
    };

    updateEmployeeManager(employeeId, managerId) {
        return this.connection.promise().query("UPDATE employee SET manager_id = ? WHERE id = ?", [managerId, employeeId]);
    };
};

module.exports = new DB(connection);