import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/friend.png";
import projImg2 from "../assets/img/spectrum.png";
import projImg3 from "../assets/img/wellspring.png";
import projImg4 from "../assets/img/movietimes.png";
import projImg5 from "../assets/img/musicon.png";
import projImg6 from "../assets/img/alphazone.png";
import projImg7 from "../assets/img/casinopie.png";
import projImg8 from "../assets/img/evolutionnova.png";
import projImg9 from "../assets/img/youtube.png";

import projImgB1 from "../assets/img/google.png";
import projImgB2 from "../assets/img/devfolio.png";
import projImgB3 from "../assets/img/softpedia.png";
import colorSharp2 from "../assets/img/movietimes.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
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
    },
    {
      title: "CasinoPie",
      description:  "The game features a slot machine with three reels and four fruits, 🍒🍎🍌🍋. Fruit combinations reward the players with 🪙.",
      imgUrl: projImg7,
    },
    {
      title: "EvolutionNova",
      description: "Created EvolutionNova, a user-friendly task management app.Showcased proficiency in full-stack development and user-centric software design.",
      imgUrl: projImg8,
    },
    {
      title: "Youtube",
      description: "WellSpring is your essential text chat app, offering a streamlined platform for clear and efficient communication. With a user-friendly interface and lightning-fast message delivery.",
      imgUrl: projImg9,
    }
  ];

  const projectsTab2 = [
    {
      title: "GoogleSearch Clone",
      description:  "A Fully responsive Google clone single-page application using React.js, Tailwind CSS, and the Google Custom Search API.",
      imgUrl: projImgB1,
    },
    {
      title: "Devfolio",
      description:  "It's My personal portfolio website. While you are visiting on this, it itself the same.",
      imgUrl: projImgB2,
    },
    {
      title: "softpedia",
      description:  "It's My personal portfolio website. While you are visiting on this, it itself the same.",
      imgUrl: projImgB3,
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
                  Till now I have developed more than 15 MERN stack industrial level project. 
                  <br></br>
                  All These projects are available on my github profile you can check on these.

</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mega Projects : Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mega Projects : Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">On Progress Projects :Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
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
                    <Row>
                        {
                          projectsTab2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>I will update it letter. Too much Busy Schedule....</p>
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
