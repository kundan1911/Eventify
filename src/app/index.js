import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import { Calendar } from "react-calendar";
import "./Calendar.css";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "../Card";
import Header from "../Header";
import Footer from "../Footer";
import { BrowserRouter as Router, Routes, 
  Route, Redirect,} from "react-router-dom";
import ProfilePage from "../ProfilePage";


function App() {
  return (
    <>
    {
      <Router>
        <Routes>
          <Route exact path="./profile" component={ProfilePage}/>
        </Routes>
      </Router>
    }
      <Header />
      {/* <Navbar /> */}
      <div>
        <div className="header-main">
          <strong>Welcome, User.</strong>
        </div>
        <div className="header-main-2">
          <strong>Events from your groups.</strong>
        </div>
      </div>
      <div className="rowC">
        <div>
          <Calendar />
        </div>
        <div className="right">
          <div className="right-1">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Area
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Santacruz East</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mount Mary Road</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Goregoan East</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Kurla Road</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Dropdown> */}
              {/* <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter-2
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
          <div className="right-2-flex">
            <div className="right-2">
              <Card />
            </div>
            <div className="right-2">
              <Card />
            </div>
          </div>
          <div className="right-2-flex">
            <div className="right-2">
              <Card />
            </div>
            <div className="right-2">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "blue",
          backgroundColor: "blue",
          height: 5,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
