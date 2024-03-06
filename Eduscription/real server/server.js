const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());


app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000'
  };
app.use(cors(corsOptions));

// create connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tlsdo88Wkd!!",
  database: "student_management",
});

// connect to database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// define routes

// GET all students
app.get('/api/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/api/student_data', (req, res) => {
  const studentId = req.params.studentId;
  db.query('SELECT * FROM student_data', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// CREATE new student
app.post('/api/students', (req, res) => {
    const student = req.body;
    db.query('INSERT INTO students (student_name) VALUES (?)', [student.student_name], (err, result) => {
      if (err) throw err;
    });
  });
  
// UPDATE student
app.put('/api/students/:id', (req, res) => {
    const studentId = req.params.id;
    const updatedStudent = req.body;
    db.query('UPDATE students SET student_name = ? WHERE student_id = ?', [updatedStudent.student_name, studentId], (err, result) => {
      if (err) throw err;
    });
});
  
// DELETE student
app.delete('/api/students/:id', (req, res) => {
    const studentId = req.params.id;
    db.query('DELETE FROM students WHERE student_id = ?', [studentId], (err, result) => {
      if (err) throw err;
    });
});

// GET all courses for a specific student
app.get('/api/courses/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    db.query('SELECT * FROM courses WHERE student_id = ?', studentId, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

// CREATE a new course for a specific student
app.post('/api/courses', (req, res) => {
    const { student_id, course_name } = req.body;
    const newCourse = { student_id, course_name };
    db.query('INSERT INTO courses SET ?', newCourse, (err, results) => {
      if (err) throw err;
    });
  });

// UPDATE course
app.put('/api/courses/:studentId/:courseId', (req, res) => {
  const studentId = req.params.studentId;
  const courseId = req.params.courseId;
  const updatedCourse = req.body;
  db.query('UPDATE courses SET course_name = ? WHERE student_id = ? AND course_id = ?', [updatedCourse.course_name, studentId, courseId], (err, result) => {
    if (err) throw err;
  });
});

// DELETE course
app.delete('/api/courses/:studentId/:courseId', (req, res) => {
  const studentId = req.params.studentId;
  const courseId = req.params.courseId;
  db.query('DELETE FROM courses WHERE student_id = ? AND course_id = ?', [studentId, courseId], (err, result) => {
    if (err) throw err;
  });
});

// GET all assignment scores for a specific student and course
app.get('/api/exams/:studentId/:courseId', (req, res) => {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;
    db.query('SELECT exam_score FROM course_grades WHERE student_id = ? AND course_id = ?', [studentId, courseId], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

// app.get('/api/assignments/:studentId', (req, res) => {
//   const studentId = req.params.studentId;
//   db.query('SELECT exam_score FROM course_grades WHERE student_id = ?', [studentId], (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// CREATE a new assignment score for a specific student and course
app.post('/api/assignments', (req, res) => {
  const { student_id, course_id, assignment_score } = req.body;
  const newAssignment = { student_id, course_id, assignment_score };
  db.query('INSERT INTO course_assignments SET ?', newAssignment, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// UPDATE assignment score for specific student
app.put('/api/assignments/:studentId/:courseId', (req, res) => {
  const studentId = req.params.studentId;
  const courseId = req.params.courseId;
  const updatedAssignment = req.body;
  db.query('UPDATE course_assignments SET assignment_score = ? WHERE student_id = ? AND course_id = ?', [updatedAssignment.assignment_score, studentId, courseId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// DELETE an assignment score for a specific student and course
app.delete('/api/assignments/:studentId/:courseId', (req, res) => {
  const studentId = req.params.studentId;
  const courseId = req.params.courseId;
  db.query('DELETE FROM course_assignments WHERE student_id = ? AND course_id = ?', [studentId, courseId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
