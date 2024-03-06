CREATE DATABASE student_management;


USE student_management;

-- Create the students table
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL
);

-- Create the courses table and connect it with the student
CREATE TABLE courses (
    student_id INT,
    course_id INT,
    course_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- Create the course_grades table that has the exam score data for the course
CREATE TABLE course_grades (
    student_id INT,
    course_id INT,
    exam_score FLOAT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id, course_id) REFERENCES courses(student_id, course_id)
);

-- Create assignments table for the score of assignments for each of the course
CREATE TABLE course_assignments (
    assignment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    assignment_score FLOAT,
    --
    FOREIGN KEY (student_id, course_id) REFERENCES courses(student_id, course_id)
);

-- Create the overall data of each student table
CREATE TABLE student_data (
    student_id INT,
    absence_rate FLOAT,
    gpa FLOAT,
    PRIMARY KEY (student_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- Create table to store the overall output of whether or not if students would dropout
CREATE TABLE output (
    output_id INT AUTO_INCREMENT PRIMARY KEY,
    dropout INT
);

-- Initial students for first load
INSERT INTO students (student_name) VALUES ('SooAn Park');
INSERT INTO students (student_name) VALUES ('Sinae Hong');
INSERT INTO students (student_name) VALUES ('Seolhee Yun');
INSERT INTO students (student_name) VALUES ('Juyee Nam');

-- Initial informations for each students
INSERT INTO courses (student_id, course_id, course_name) VALUES (1, 1, 'Computer');
INSERT INTO courses (student_id, course_id, course_name) VALUES (1, 2, 'Business');
INSERT INTO courses (student_id, course_id, course_name) VALUES (1, 3, 'Mathematics');

INSERT INTO courses (student_id, course_id, course_name) VALUES (2, 1, 'Computer');
INSERT INTO courses (student_id, course_id, course_name) VALUES (2, 2, 'Science');

INSERT INTO courses (student_id, course_id, course_name) VALUES (3, 1, 'Computer');
INSERT INTO courses (student_id, course_id, course_name) VALUES (3, 2, 'Mathematic');

INSERT INTO courses (student_id, course_id, course_name) VALUES (4, 1, 'Sociology');
INSERT INTO courses (student_id, course_id, course_name) VALUES (4, 2, 'Mathematics');

INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (1, 1, 89.5);
INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (1, 2, 36.0);
INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (1, 3, 54.0);

INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (2, 1, 87.5);
INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (2, 2, 42.0);

INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (3, 1, 78.5);
INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (3, 2, 98.0);

INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (4, 1, 89.5);
INSERT INTO course_grades (student_id, course_id, exam_score) VALUES (4, 2, 76.0);

INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (1, 1, 32.0);
INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (1, 2, 44.5);
INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (1, 3, 92.0);

INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (2, 1, 74.0);
INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (2, 2, 83.5);

INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (3, 1, 62.0);
INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (3, 2, 33.5);

INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (4, 1, 77.0);
INSERT INTO course_assignments (student_id, course_id, assignment_score) VALUES (4, 2, 53.5);


INSERT INTO student_data (student_id, absence_rate, gpa) VALUES (1, 0.32, 2.18);
INSERT INTO student_data (student_id, absence_rate, gpa) VALUES (2, 0.10, 3.6);
INSERT INTO student_data (student_id, absence_rate, gpa) VALUES (3, 0.12, 3.18);
INSERT INTO student_data (student_id, absence_rate, gpa) VALUES (4, 0.05, 3.8);