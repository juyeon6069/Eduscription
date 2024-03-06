import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  MdOutlineDashboard,
  MdPeopleOutline,
  MdChatBubbleOutline,
  MdOutlineDisplaySettings,
  MdOutlineSettings,
  MdCastForEducation,
  MdPersonOutline,
  MdModeEdit,
} from "react-icons/md";
import "../teacher.css";

export default function Students() {
  const [studentList, setStudentList] = useState([]);
  const [stuId, setStuId] = useState("");
  const [subject, setSubject] = useState([]);
  const [exam1, setExam1] = useState("");
  const [exam2, setExam2] = useState("");
  const [exam3, setExam3] = useState("");
  const [gpa, setGpa] = useState("");
  const [att, setAtt] = useState("");
  const [editPage, setEditPage] = useState(true);
  const editPageAppear = () => {
    setEditPage(true);
  };
  const editPageDisappear = () => {
    setEditPage(false);
  };
  {
    /*Login modal*/
  }
  const [login, setLogin] = useState(false);
  const loginAppear = () => {
    setLogin(true);
  };
  const loginDisappear = () => {
    setLogin(false);
  };

  {
    /*Add Grades modal*/
  }
  const [edit, setEdit] = useState(false);
  const editAppear = () => {
    setEdit(true);
  };
  const editDisappear = () => {
    setEdit(false);
  };

  const gradesList = () => {
    return (
      <table>
        <thead>
          <tr>
            <th className="th_sub">Subject</th>
            <th className="th_exam">Exam Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{subject[0]}</td>
            <td>{exam1}</td>
          </tr>

          <tr>
            <td>{subject[1]}</td>
            <td>{exam2}</td>
          </tr>

          <tr>
            <td>{subject[2]}</td>
            <td>{exam3}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStuId(data[0].student_id);
      });
  }, []);

  // console.log(stuId);

  useEffect(() => {
    fetch("http://localhost:3001/api/courses/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setSubject([
          data[0].course_name,
          data[1].course_name,
          data[2].course_name,
        ]);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/student_data/")
      .then((response) => response.json())
      .then((data) => {
        setGpa(data[0].gpa);
        setAtt(data[0].absence_rate);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/exams/1/1")
      .then((response) => response.json())
      .then((data) => {
        setExam1(data[0].exam_score);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/exams/1/2")
      .then((response) => response.json())
      .then((data) => {
        setExam2(data[0].exam_score);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/exams/1/3")
      .then((response) => response.json())
      .then((data) => {
        setExam3(data[0].exam_score);
      });
  }, []);

  return (
    <div>
      {/* banner, teacher profile*/}
      <div
        className="top flex-box"
        style={{ display: "flex", paddingLeft: "15px" }}
      >
        <MdCastForEducation size="30" color="#627ef6" />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "grey",
            paddingRight: "30px",
          }}
        >
          <span aria-hidden="true"></span>Logout
        </Link>
      </div>
      <div className="bottom flex-box">
        <div className="profile">
          <div className="user flex-box">
            <img className="image" src="teacher.jpg" />
            <div className="info">
              <div className="name">Sierra Ferguson</div>
              <div className="email">s.ferguson@gmail.com</div>
            </div>
          </div>
          <div className="menu">
            <p className="icontext">
              <MdOutlineDashboard className="icon" size="27" />
              <Link to="/Teacher" style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
            </p>
            <p className="icontext">
              <MdOutlineDisplaySettings className="icon" size="27" />
              <Link to="/Tasks" style={{ textDecoration: "none" }}>
                Tasks
              </Link>
            </p>
            <p className="icontext">
              <MdPeopleOutline className="icon" size="27" />
              <Link to="/Students" style={{ textDecoration: "none" }}>
                Students
              </Link>
            </p>
            <p className="icontext chat">
              <MdChatBubbleOutline className="icon" size="27" />
              Chat
            </p>
            <p className="icontext">
              <MdOutlineSettings className="icon" size="27" />
              Settings
            </p>
          </div>
        </div>
        <div className="content">
          <div className="listHeader flex-box">
            {editPage ? (
              <h1>STUDENT LIST</h1>
            ) : (
              <div className="studentDtlTitle">
                <h1>STUDENT DETAIL</h1>
                <button className="buttons" onClick={setEditPage}>
                  Exit
                </button>
              </div>
            )}
          </div>
          {/* <div className="classList">{listStudents}</div> */}
          {editPage ? (
            <div className="classList">
              <div className="stdTitle">
                <div className="edit">
                  <MdModeEdit />
                </div>
                <MdPersonOutline size="20" />
                <div className="sName">Student Name</div>
                <div className="sEmail">Student Email</div>
                <div className="sGpa">GPA </div>
                <div className="sAttendance">Attend</div>
              </div>
              {/* {listStudents} */}

              <div className="stdList">
                <MdModeEdit onClick={editPageDisappear} />
                <MdPersonOutline size="20" />
                <div className="sName">Student name</div>
                <div className="sEmail">Student@email</div>
                <div className="sGpa">3.4</div>
                <div className="sAttendance">50%</div>
              </div>
              <div className="stdList">
                <MdModeEdit />
                <MdPersonOutline size="20" />
                <div className="sName">Student name</div>
                <div className="sEmail">Student@email</div>
                <div className="sGpa">3.4</div>
                <div className="sAttendance">50%</div>
              </div>
            </div>
          ) : (
            <div className="flex-box">
              <div className="left-line">
                <div className="studentProf flex-box">
                  <img className="imageStu" src="student-example.jpg" />
                  <div className="studentP">
                    <h2>Tom Hardy</h2>
                    <p>tom.hardy@gmail.com</p>
                  </div>
                </div>
                <div className="subject">
                  <div className="detailGraph">
                    <h3 className="detailTitle">Graph</h3>
                    <img className="graphStu" src="graph_stu.jpg" />
                  </div>
                  <div className="result">
                    <h3 className="resultTitle">OVERALL RESULT</h3>
                    Overall, Tom has low GPA. He must work on business at most
                    and then mathematics. With the data owned, he has a high
                    probability of droping out, His attendance rate is also too
                    low for graduation. Nonetheless, he is exceeding in learning
                    copmuter, so it is highly recommended for him to keep on the
                    good work such as learning more about data structures and
                    even web proramming. If he is considering his career
                    regarding computer or technology which he is good at, here
                    are some job recommendations: web programmer, software
                    engineer, app devleoper, UI/UX designer.
                  </div>
                </div>
              </div>
              <div className="right-line">
                <div className="sub-first flex-box">
                  <h3>GRADES</h3>
                  <button className="buttons" onClick={editAppear}>
                    Add Grades
                  </button>
                </div>
                <div className="subject-title flex-box">{gradesList()}</div>
                <div className="total_box">
                  <div className="total_gpa">AVERAGE GPA {gpa}</div>
                  <div className="total_attendance">ATTENDANCE RATE {att}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Modal Add Class */}
      {/*Login modal*/}
      {login && (
        <div id="modal" className="modal-style">
          <div className="modal-window" style={{ backgroundColor: "white" }}>
            <div className="title">
              <h2
                style={{
                  fontSize: "25px",
                  fontWeight: "bolder",
                  margin: "20px",
                  // padding: "10px",
                  color: "#627ef6",
                  textAlign: "left",
                  justifyContent: "space-between",
                }}
              >
                Add New Student
              </h2>
              <div
                className="close-area"
                style={{ fontSize: "25px", color: "black" }}
                onClick={loginDisappear}
              >
                x
              </div>
            </div>
            <div className="change" style={{ padding: "10px" }}>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Student Name<input style={{ width: "70%" }}></input>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Student Email
                <input style={{ width: "70%" }}></input>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Average GPA
                <input style={{ width: "70%" }}></input>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Attendance
                <input style={{ width: "70%" }}></input>
              </p>
            </div>
            <button
              className="buttons"
              style={{ marginBottom: "15px" }}
              onClick={loginDisappear}
            >
              Add
            </button>
          </div>
          <div className="modal-layer" onClick={loginDisappear}></div>
        </div>
      )}
      ,
      {edit && (
        <div id="modal" className="modal-style">
          <div className="modal-window" style={{ backgroundColor: "white" }}>
            <div className="title">
              <h2
                style={{
                  fontSize: "25px",
                  fontWeight: "bolder",
                  margin: "20px",
                  color: "#627ef6",
                  textAlign: "left",
                }}
              >
                Add Grades
              </h2>
              <div
                className="close-area"
                style={{ fontSize: "25px", color: "black" }}
                onClick={editDisappear}
              >
                x
              </div>
            </div>
            <div className="change" style={{ padding: "10px" }}>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Subject<input style={{ width: "70%" }}></input>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Exam Score
                <input style={{ width: "70%" }}></input>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Average GPA
                <input style={{ width: "70%" }}></input>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Attendance
                <input style={{ width: "70%" }}></input>
              </p>
            </div>

            <button
              className="buttons"
              style={{ marginBottom: "15px" }}
              onClick={loginDisappear}
            >
              Add
            </button>
          </div>
          <div className="modal-layer" onClick={loginDisappear}></div>
        </div>
      )}
      ;
    </div>
  );
}
