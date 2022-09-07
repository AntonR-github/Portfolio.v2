import ME from "../../../Assets/Images/programing-languages.png"
import {FaNodeJs} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {SiTypescript} from "react-icons/si"
import {DiJavascript1} from "react-icons/di"
import {DiJqueryUiLogo} from "react-icons/di"
import {SiAngular} from "react-icons/si"
import {SiPhp} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3Full} from "react-icons/di"
import {SiMysql} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {BsFillBootstrapFill}  from "react-icons/bs"
import {SiVisualstudiocode} from "react-icons/si"
import {FaDocker} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {SiSocketdotio} from "react-icons/si"
import {SiRedux} from "react-icons/si"
import "./About.css";

function About(): JSX.Element {
    return (
        <section className="About" id="about">
          
			       <h5>Get To Know</h5>
             <h2>About Me</h2>
            
            <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="" />
                   
           <div className="contact__options">
              <article className="contact__option">
                <AiOutlineMail className="contact__option-icon"/>
                <h4>Email</h4>
                <h5></h5>
                <a href="mailto:">Send A Message</a>
              </article>
              <article className="contact__option">
                <AiOutlineWhatsApp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <h5></h5>
              </article>
           </div>

                </div> 
                   
            </div>
            
            
            <div className="about__content">
              
            <p>
                    Recently graduated full stack developer with a passion for learning and creating.
                    I am a fast learner and always looking for new challenges to improve my skills and knowledge.
                    Looking to join forces with a company to continue and grow my skill set while contributing
                    to a positive outcome and the success of the company. 
       
                </p>
                <div className="about__cards">
                  <article className="about__card">
                    <SiVisualstudiocode/><h3>Frontend Development</h3>
                    <SiTypescript/><small>TypeScript</small><br />
                    <DiJavascript1/><small>JavaScript</small><br />
                    <DiJqueryUiLogo/><small>JQuery + AJAX</small><br />
                    <FaReact/><small>React</small><br />
                    <SiAngular/><small>Angular</small><br />
                    <AiFillHtml5/><small>HTML</small><br />
                    <DiCss3Full/><small>CSS/SCSS</small><br />
                    <SiRedux/><small>Redux</small><br />
                    <BsFillBootstrapFill/><small>Bootstrap</small><br />
                  </article>
                  <article className="about__card">
                    <SiVisualstudiocode/><h3>Backend Development</h3>
                    <FaNodeJs/><small>Node.JS + Express</small><br />
                    <SiPhp/><small>PHP</small><br />
                    <SiMysql/><small>MySQL</small><br />
                    <SiMongodb/><small>MongoDB</small><br />
                    <FaDocker/><small>Docker</small><br />
                    <SiSocketdotio/><small>Socket.IO</small><br />
                  </article>
                  
                </div>

              
            </div>

            </div>
        </section>
    );
}

export default About;
