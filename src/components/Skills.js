import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have a strong skills set on both front-end and back-end technologies. 
                        <br></br>Frontend Technologies: React.js, JavaScript, TypeScript, Next.js, 
                                Pixi.js, Vue.js, Bootstrap, Tailwind, Three.js, JQuery, Material-UI, 
                                HTML5, CSS, JSON, XML, Figma, Interfaces, NPM and Yarn.
                        <br></br>Backend Technologies: Node.js, Express.js and MongoDB.
                        <br></br>API: Context API, Rapid API and Rest API.
                        <br></br>State Management: Redux.js
                        <br></br>Communication Library: Socket.io
                        <br></br>Version Control System: GIT, SVN.
                          </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MERN Stack : MongoDB, Express.js, React.js, Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Tailwind, Material.UI, Javascript, Typescript, HTML, CSS and Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JS Libraries: PIXI.js, Vue.js, Next.js and Three.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
