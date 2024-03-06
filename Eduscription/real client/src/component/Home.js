import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../App.css";
import { MdCastForEducation } from "react-icons/md";

export default function Home() {
  const [student, setStudent] = useState(false); // click student option
  const [login, setLogin] = useState(false); // login modal
  const [classCode, setclassCode] = useState(false); // class code modal

  const loginAppear = () => {
    setLogin(true);
  };
  const loginDisappear = () => {
    setLogin(false);
  };
  const codeAppear = () => {
    setclassCode(true);
  };
  const codeDisappear = () => {
    setclassCode(false);
  };
  return (
    <div>
      {/* Banner */}
      <div
        className="top"
        style={{ display: "flex", position: "fixed", paddingLeft: "15px" }}
      >
        <MdCastForEducation size="30" color="#627ef6" />
      </div>
      {/* Home  */}
      <h1 className="home">
        <div className="left">
          <div className="title1">FIND</div>
          <div className="title1">THE RIGHT,</div>
          <div className="title2">Eduscription</div>
          <div className="options">
            <button
              className="opt-but student"
              onClick={() => {
                setStudent(true);
                loginAppear();
              }}
            >
              Student
            </button>
            <button
              className="opt-but enter"
              onClick={() => {
                setStudent(false);
                loginAppear();
              }}
            >
              Teacher
            </button>
          </div>
        </div>
        <div className="right">
          <img className="homeImg" alt="homeImg" src="img/run.jpg" />
        </div>
      </h1>

      {/* login modal */}
      {login && (
        <div id="modal" className="modal-style">
          <div className="modal-window">
            <div className="title">
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "bolder",
                  margin: "5px",
                }}
              >
                Start Eduscription
              </h2>

              <div
                className="close-area"
                style={{ color: "black" }}
                onClick={loginDisappear}
              >
                x
              </div>
            </div>
            <div
              className="change"
              style={{ padding: "10px", textAlign: "left" }}
            >
              <p style={{ fontWeight: "bold", color: "#627EF6" }}>Email:</p>
              <input name="name" style={{ width: "100%" }}></input>
              <p style={{ fontWeight: "bold", color: "#627EF6" }}>Password:</p>
              <input name="email" style={{ width: "100%" }}></input>
            </div>
            {/* Enter button for each Student / Teacher  */}
            {student ? (
              <div>
                <button
                  className="enter"
                  onClick={() => {
                    loginDisappear();
                    codeAppear();
                  }}
                >
                  Enter
                </button>
              </div>
            ) : (
              <div>
                <Link to="/Teacher">
                  <button
                    className="enter"
                    onClick={() => {
                      loginDisappear();
                    }}
                  >
                    Enter
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="modal-layer" onClick={loginDisappear}></div>
        </div>
      )}
      {/* click student => classCode modal*/}
      {student && classCode && (
        <div className="modal-style">
          <div className="modal-window-code">
            <div className="title">
              <h2
                style={{
                  fontSize: "medium",
                  fontWeight: "bolder",
                  margin: "5px",
                }}
              >
                Please put your class code:
              </h2>
              <div
                className="close-area"
                style={{ color: "black", cursor: "pointer" }}
                onClick={codeDisappear}
              >
                x
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <input name="name" style={{ width: "70%" }}></input>
              <Link
                to="/Profile"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#627ef6",
                  color: "white",
                  borderColor: "#627ef6",
                  border: "2px solid transparent",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                <span aria-hidden="true"></span>Enter
              </Link>
            </div>
          </div>
          <div className="modal-layer" onClick={codeDisappear}></div>
        </div>
      )}
    </div>
  );
}
