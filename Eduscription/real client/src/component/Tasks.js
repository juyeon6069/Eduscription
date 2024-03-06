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
import "./task.css";

export default function Tasks() {
  const [login, setLogin] = useState(false);
  const loginAppear = () => {
    setLogin(true);
  };
  const loginDisappear = () => {
    setLogin(false);
  };
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
        {/* Teacher-content(right box)*/}
        <div className="content">
          <div className="task flex-dox">
            {/* Task board Progress*/}
            <div className="task-leftLine">
              <h1 className="tasktitle">Tasks</h1>
              <div className="taskProgress">
                <p>8 task competed out of 10</p>
                <progress id="progress" value="80" min="0" max="100"></progress>
                <p>Saturday, May 13, 2023 </p>
                {/* Date */}
                <div className="task-dates">
                  <p>S</p>
                  <p>M</p>
                  <p>Tu</p>
                  <p>W</p>
                  <p>Th</p>
                  <p>F</p>
                  <p className="task-today">Sat</p>
                </div>
                <div className="task-dates">
                  <p>07</p>
                  <p>08</p>
                  <p>09</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p className="task-today">13</p>
                </div>
                <div className="td"></div>
                {/* TodoList - samples*/}
                <div className="todoList">
                  <p className="todoHead">Counseling for grades by Sunday</p>
                  <p className="todoText">Due date: May 14, 2023</p>
                  <p className="todoText">Student Name: Natalie Portman</p>
                  <div className="todo-button">
                    <button className="buttons"> Complete</button>
                    <button className="rem-button"> Remove</button>
                  </div>
                </div>
                <div className="todoList">
                  <p className="todoHead">Entering Student Grades by Thurday</p>
                  <p className="todoText">Due date: May 18, 2023</p>
                  <p className="todoText">Student Name: Brad Pitt</p>
                  <div className="todo-button">
                    <button className="buttons"> Complete</button>
                    <button className="rem-button"> Remove</button>
                  </div>
                </div>
                <div className="todoList">
                  <p className="todoHead">
                    Homework progress check by Saturday
                  </p>
                  <p className="todoText">Due date: May 20, 2023</p>
                  <p className="todoText">Student Name: Whoopi Goldberg</p>
                  <div className="todo-button">
                    <button className="buttons"> Complete</button>
                    <button className="rem-button"> Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="task-rightLine"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
