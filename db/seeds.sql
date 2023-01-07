USE employees;

INSERT INTO department (name) 
VALUES 
('Sales'),
('Accounts'),
('Human Resources'),
('Operations');

INSERT INTO role (title, salary, department_id) 
VALUES
('Sales Manager', 87000, 1),
('Sales Associate', 61000, 1),
('Account Manager', 139000, 2),
('Accountant', 110000, 2),
('HR Director', 101500, 3),
('Operations Manager', 135500, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Eileen', 'Pepple', 1, NULL),
('Marasha', 'Woodard', 2, 1),
('Grace', 'Pepple', 3, NULL),
('Ava', 'Pepple', 4, 3),
('JBone', 'Silvers', 4, NULL),
('Kelly', 'Judish', 4, 4),
('Timothy', 'Mull', 4, NULL),
('Charlotte', 'Lanfear', 4, 4);