import Nav from "./components/nav/Nav";
import Gag from "./components/Gag/Gag";

import "./App.css";
import Follower from "./components/Followers/Follower";
// import Notable from "./components/Notable/Notable";
import Genders from "./components/Genders/Genders";
import Agegroup from "./components/Agegroup/Agegroup";
import { useState } from "react";
import { UserData } from "./Data/AgegroupDats";
import Agesplit from "./components/Agesplit/Agesplit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Credibility from "./components/Credibility/Credibility";
import Post from "./components/Post/Post";
import City from "./components/City/City";
import Country from "./components/Country/Country";
import Popular from "./components/Popular/Popular";
import ContactList from "./components/Notable/Notable";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.age),
    datasets: [
      {
        label: "Audilence Age Groups",
        data: UserData.map((data) => data.percent),
        backgroundColor: ["#FF9C66"],
        borderRadius: "4px",
      },
    ],
  });
  return (
    <div className="App">
      <Nav />
      <Container fluid>
        <Row lg={12} className="m-4">
          <Col md={3} sm={6} >
            <Gag />
            <Credibility />

          </Col>
          <Col md={6} sm={6}  >
            {" "}
            <Follower />
            <Genders/>
            <Row lg={12} >
            <Col md={4} sm={4}><Agesplit chartData={userData} /></Col>
            <Col md={8} sm={8}><Agegroup chartData={userData} /></Col>
            </Row>
            <Row lg={12} >
            <Col md={6} sm={6}><City /></Col>
            <Col md={6} sm={6}><Country /></Col>
            </Row>
            <Popular />
          </Col>

          <Col md={3} sm={6} >
            <ContactList />
            <Post />
          </Col>
        </Row>
      </Container>
      {/* <Nav />
    
    <Gag />
    <Follower />
    <Notable />
    <Genders/>
    <Agegroup chartData={userData} />
    <Agesplit chartData={userData} /> */}
    </div>
  );
}

export default App;
