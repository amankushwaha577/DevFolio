import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/friend.png";
import projImg2 from "../assets/img/spectrum.png";
import projImg3 from "../assets/img/wellspring.png";
import projImg4 from "../assets/img/movietimes.png";
import projImg5 from "../assets/img/musicon.png";
import projImg6 from "../assets/img/alphazone.png";
import colorSharp2 from "../assets/img/movietimes.png";
import 'animate.css';
import './Projects.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Friend's Spy",
      description:  "It's a comprehensive social network platform with a wide range of features designed to offer users an engaging and interactive experience.",
      imgUrl: projImg1,
    },
    {
      title: "Spectrum",
      description: ". This MERN Application encompasses a wide range of functionalities, from enabling users to browse and search for products to managing orders and processing payments securely.",
      imgUrl: projImg2,
    },
    {
      title: "WellSpring",
      description: "WellSpring is your essential text chat app, offering a streamlined platform for clear and efficient communication. With a user-friendly interface and lightning-fast message delivery.",
      imgUrl: projImg3,
    },
    {
      title: "MovieTimes",
      description: "Explore an extensive library of movies and TV shows spanning various genres,     from action-packed blockbusters to heartwarming dramas, and binge-worthy series.",
      imgUrl: projImg4,
    },
    {
      title: "MusicOn",
      description: "I've created a fantastic music experience for everyone. Think of it like a magical music world on your computer or phone. You can easily explore different parts of this world, like your favorite playlists, artists, and albums, thanks to the smooth navigation I've set up.",
      imgUrl: projImg5,
    },
    {
      title: "AlphaZone",
      description: "Dive into a vast library of academic riches. From textbooks and study notes to comprehensive PDF resources, we offer an extensive collection to cater to your educational needs.",
      imgUrl: projImg6,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have a strong skills set on both front-end and back-end technologies 
                  <br></br>
                  Till now I have developed more than 25 MERN stack industrial level project. 
                  <br></br>
                  All These projects are available on my github profile you can check on these.

</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mega Projects : Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="a"></img>
    </section>
  )
}
