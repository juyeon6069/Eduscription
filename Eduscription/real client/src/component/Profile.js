import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "../App.css";
import { MdCastForEducation } from "react-icons/md";

export default function Profile() {
  return (
    <>
      {/* Banner */}
      <div className="top" style={{ display: "flex", paddingLeft: "15px" }}>
        <MdCastForEducation size="30" color="#627ef6" />
        <div
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "space-around",
            color: "grey",
          }}
        >
          <Link to="/Profile" style={{ textDecoration: "none", color: "grey" }}>
            <span aria-hidden="true"></span>Profile
          </Link>
          <Link to="/Result" style={{ textDecoration: "none", color: "grey" }}>
            <span aria-hidden="true"></span>Result
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
            <span aria-hidden="true"></span>Logout
          </Link>
        </div>
      </div>
      {/* Student Information */}
      <div className="flex-box">
        <div className="left-line">
          {/* profile image, name, email */}
          <div className="studentProf flex-box">
            <img className="imageStu" src="student-example.jpg" />
            <div>
              <h2>Tom Hardy</h2>
              <p>tom.hardy@gmail.com</p>
            </div>
          </div>
          <div className="subject">
            <div className="sub-first flex-box">
              <h3 style={{ margin: "0px" }}>GRADES</h3>
            </div>
            <div className="subject-title flex-box">
              {/* Example Subject-score table */}
              <table>
                <tr>
                  <th className="th_sub">Subject</th>
                  <th className="th_exam">Midterm Score</th>
                  <th className="th_exam">Final Score</th>
                  <th className="th_avg">Average GPA</th>
                  <th className="th_att">Attendance</th>
                </tr>
                <tr>
                  <td>Business</td>
                  <td>60</td>
                  <td>80</td>
                  <td>70</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>Math</td>
                  <td>90</td>
                  <td>80</td>
                  <td>85</td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td>Computer</td>
                  <td>60</td>
                  <td>80</td>
                  <td>70</td>
                  <td>97%</td>
                </tr>
              </table>
            </div>
          </div>{" "}
          {/* Overall result for GPA*/}
          <div className="result-p">
            <h3
              className="resultTitle"
              style={{ paddingTop: "40px", paddingLeft: "30px", margin: "0px" }}
            >
              OVERALL RESULT
            </h3>
            <div style={{ padding: "5%" }}>
              Overall, Tom has low GPA. He must work on business at most and
              then mathematics. With the data owned, he has a high probability
              of droping out, His attendance rate is also too low for
              graduation. Nonetheless, he is exceeding in learning copmuter, so
              it is highly recommended for him to keep on the good work such as
              learning more about data structures and even web proramming. If he
              is considering his career regarding computer or technology which
              he is good at, here are some job recommendations: web programmer,
              software engineer, app devleoper, UI/UX designer.
            </div>
          </div>
        </div>
        {/* Instructor <-> Student Messenger / their communications */}
        <div className="right-line">
          <div className="message">
            <h3 className="resultTitle">Instructor's Message</h3>
            <div
              className="resultContentBox"
              style={{
                border: "solid, 3px",
                borderColor: "#627ef6",
                textAlign: "left",
              }}
            >
              <div
                className="resultContent"
                style={{ alignItems: "center", textAlign: "left" }}
              >
                What subject do I lack most?
              </div>
            </div>
            <div style={{ color: "white" }}>..</div>
            <div className="resultContentBox" style={{ marginLeft: "0px" }}>
              <div className="resultContent" style={{ textAlign: "right" }}>
                Mathematics seems to need the most improvement. You can check
                the overall result in the Result page.
              </div>
            </div>
            <div style={{ color: "white" }}>..</div>
            <div
              className="resultContentBox"
              style={{
                border: "solid, 3px",
                borderColor: "#627ef6",
                textAlign: "left",
              }}
            >
              <div
                className="resultContent"
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Okay, I think that I will do my best! Then, what are my
                strengths?
              </div>
            </div>
            <div style={{ color: "white" }}>..</div>
            <div className="resultContentBox">
              <div className="resultContent" style={{ textAlign: "right" }}>
                In terms of attendance, sincerity is your biggest strength.
              </div>
            </div>
            <div
              style={{
                paddingTop: "5%",
                paddingBottom: "5%",
                borderBottom: "solid 1px gray",
              }}
            ></div>
            <div style={{ color: "white" }}>..</div>
            <input
              style={{
                width: "100%",
                height: "30px",
                color: "gray",
              }}
              value={"Send Message"}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
