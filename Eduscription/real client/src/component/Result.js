import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Result.css";
import "../App.css";
import { MdCastForEducation } from "react-icons/md";

export default function Result() {
  return (
    <>
      {/*Banner*/}
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
      <div
        className="flex-box"
        style={{ position: "fixed", paddingRight: "20px" }}
      >
        {/* Graph of Student performence */}
        <div className="left-line">
          <div className="detailGraph" style={{ paddingBottom: "60px" }}>
            <h3 className="detailTitle">RESULT GRAPH</h3>
            <img className="graphStu" src="img/graph_stu.jpg" />
          </div>
        </div>
        {/* Summary for each subjects */}
        <div className="right-line" style={{ paddingTop: "25px" }}>
          <div className="message">
            <h3 className="resultTitle">Detailed Result</h3>
            <div className="resultContentBox">
              <div className="resultContentTitle">Mathematics</div>
              <div className="resultContent">
                Students are constantly failing in math. A deep understanding of
                the concept of mathematics is needed, and efforts are needed to
                apply it to problem-solving situations.
              </div>
            </div>
            <div style={{ color: "white" }}>..</div>
            <div className="resultContentBox">
              <div className="resultContentTitle">Computer</div>
              <div className="resultContent">
                Students show proficiency in coding and software development in
                computer subjects. The current student's grades are good and
                keep doing this
              </div>
            </div>
            <div style={{ color: "white" }}>..</div>
            <div className="resultContentBox">
              <div className="resultContentTitle">Business</div>
              <div className="resultContent">
                Students clearly understand financial analysis and marketing
                principles in business, but have difficulty communicating and
                effectively presenting their ideas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
