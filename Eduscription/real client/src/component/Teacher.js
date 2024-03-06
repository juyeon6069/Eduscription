import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  MdOutlineDashboard,
  MdPeopleOutline,
  MdChatBubbleOutline,
  MdOutlineDisplaySettings,
  MdOutlineSettings,
  MdCastForEducation,
} from "react-icons/md";
import "../teacher.css";

export default function Teacher() {
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
        <div className="content">
          <div className="listHeader flex-box">
            <h1>CLASS LIST</h1>
            <button className="buttons" onClick={loginAppear}>
              Add class
            </button>
          </div>
          <div className="classList">
            <div className="classTitle">Class name</div>
            <p>Instruction Name: Seolhee Yun</p>
            <p>Student : 15</p>
          </div>
        </div>
      </div>
      {/* Modal Add Class */}
      {login && (
        <div id="modal" className="modal-style">
          <div className="modal-window" style={{ backgroundColor: "white" }}>
            <div className="title listHeader">
              <h2
                style={{
                  fontSize: "25px",
                  fontWeight: "bolder",
                  margin: "20px",
                  color: "#627ef6",
                  textAlign: "left",
                }}
              >
                Create New Class
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
                Class Name<input style={{ width: "80%" }}></input>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Introduction
                <input style={{ width: "80%", height: "50px" }}></input>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bolder",
                  color: "#627ef6",
                }}
              >
                Code
                <input style={{ width: "80%" }}></input>
              </p>
            </div>
            <button
              className="buttons"
              style={{ marginBottom: "15px" }}
              onClick={loginDisappear}
            >
              create
            </button>
          </div>
          <div className="modal-layer" onClick={loginDisappear}></div>
        </div>
      )}
    </div>
  );
}
