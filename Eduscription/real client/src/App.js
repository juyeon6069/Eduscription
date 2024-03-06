import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Students from "./component/Students";
import Profile from "./component/Profile";
import Result from "./component/Result";
import Teacher from "./component/Teacher";
import Tasks from "./component/Tasks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
