USE employees;

INSERT INTO department (name) 
VALUES 
('Sales'),
('Finance'),
('Human Resources'),
('Operations');

INSERT INTO role (title, salary, department_id) 
VALUES
('Sales Manager', 87000, 1),
('Sales Associate', 61000, 1),
('Account Manager', 139000, 2),
('Accountant', 110000, 2),
('HR Director', 101500, 3),
('HR Associate', 89500, 3),
('Operations Manager', 135500, 4),
('Operations Specialist', 103000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Eileen', 'Pepple', 1, NULL),
('Marasha', 'Woodard', 2, 1),
('Grace', 'Pepple', 3, NULL),
('Ava', 'Pepple', 4, 3),
('JBone', 'Silvers', 5, NULL),
('Kelly', 'Judish', 6, 5),
('Timothy', 'Mull', 7, NULL),
('Charlotte', 'Lanfear', 8, 7);