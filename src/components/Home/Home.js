import React, {useEffect, useState} from "react";
import styles from './Home.module.css';
import GlitchClip from "react-glitch-effect/core/Clip";
import oA from  '../../oA.svg'
import oa from  '../../oa.png'
import oabig from  '../../oabig.svg'
import Lnkdn from  '../../in.svg'
import ins from  '../../ins.svg'
import tw from  '../../tw.svg'
import gth from  '../../gth.svg'
import ozan from  '../../ozan.png'
import portfolioImg from  '../../portfolio.png'
import omdb from  '../../omdb.png'
import cocktail from  '../../cocktail.png'
import resumeImg from  '../../resumeImg.png'
import marketing from  '../../marketing.png'
import todoMedium from  '../../todoMedium.png'
import native from  '../../native.png'
import Typical from "react-typical";
import Particles from "react-particles-js";
import { Tabs } from 'antd';
import { Icon } from 'antd';
import savePdf from '../../savePdf.png'
import Pdf from "../resume.pdf";

const { TabPane } = Tabs;


const Home = () => {

    const [tabActive, setTabActive] = useState(1)


    function handleTab(val){
        setTabActive(val)
    }

/*    const [menuActive, setMenuActive] = useState(1)
    function handleMenu(val){
        setMenuActive(val)
    }
    onClick={()=>handleMenu(1)} style={{color : menuActive === 1 ? "#F9004D"  : "#FFFFFF"}}
    onClick={()=>handleMenu(2)} style={{color : menuActive === 2 ? "#F9004D"  : "#FFFFFF"}}
    onClick={()=>handleMenu(3)} style={{color : menuActive === 3 ? "#F9004D"  : "#FFFFFF"}}
    onClick={()=>handleMenu(4)} style={{color : menuActive === 4 ? "#F9004D"  : "#FFFFFF"}}*/

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <img style={{height: 32, marginTop: 10}} src={oa} />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <ul className={styles.icons}>
                        <li><a target="_blank" href='http://www.linkedin.com/in/ozanaydin9'><img className={styles.in} src={Lnkdn} /></a></li>
                        <li><a target="_blank" href='http://www.instagram.com/ozanaydin9'><img src={ins} /></a></li>
                        <li><a target="_blank" href='http://www.twitter.com/ozanjs'><img src={tw} /></a></li>
                        <li><a target="_blank" href='http://www.github.com/ozanaydin9'><img src={gth} /></a></li>
                    </ul>
                </div>
            </div>
            <div id={"home"} className={styles.home}>
                <div className={styles.homeWrapper}>
                    <Particles className={styles.particles}
                               params={{
                                   "particles": {
                                       "number": {
                                           "value": 40,
                                           "density": {
                                               "enable": true,
                                               "value_area": 500
                                           }
                                       },
                                       "line_linked": {
                                           "enable": true,
                                           "opacity": 0.12
                                       },
                                       "size": {
                                           "value": 2,
                                           "anim": {
                                               "enable": true,
                                               "speed": 15,
                                               "size_min": 10,
                                               "sync": false
                                           }
                                       },
                                       "opacity": {
                                           "anim": {
                                               "enable": true,
                                               "speed": 1,
                                               "opacity_min": 0.05
                                           }
                                       }
                                   },
                                   "interactivity": {
                                       "events": {
                                           "onclick": {
                                               "enable": true,
                                               "mode": "push"
                                           }
                                       },
                                       "modes": {
                                           "push": {
                                               "particles_nb": 1
                                           }
                                       }
                                   },
                                   "retina_detect": true
                               }} />
                    <div className={styles.homeContent}>
                        <GlitchClip style={{width:400}} duration="3s">
                            <p className={styles.name}>Ozan Aydın</p>
                        </GlitchClip>
                        <p className={styles.nameDetail}>
                        <Typical
                            steps={['Software Development Engineer', 500,
                                'currently working for AloTech', 500,
                                'ozanaydin9@gmail.com', 500,]}
                            loop={1}
                            wrapper="p"
                        />
                        </p>
                        <p className={styles.homeDetail}>based in Turkey</p>

                    </div>
                    <div className={styles.homeoA}>
                        <GlitchClip style={{width:150}} duration="3s">
                        <img src={oabig} />
                        </GlitchClip>
                    </div>
                </div>
            </div>
            <div id={"about"} className={styles.about}>
                <div className={styles.aboutWrapper}>
                    <div className={styles.aboutTitle}>
                        About Me
                    </div>
                    <div className={styles.aboutDetail}>
                        <div className={styles.aboutDetailImg}>
                            <img src={ozan} />
                        </div>
                        <div className={styles.aboutDetailInfo}>
                            <div className={styles.aboutDetailInfoHeadText}>
                                I am in a structure that attaches importance to bilateral human relations, has a high social aspect and is aware of its responsibilities.
                                I am fully focused on my career-oriented development.
                            </div>
                            <hr style={{background:"#454545"}}/>
                            <ul style={{paddingTop: 0, paddingBottom:10}}>
                                <li style={{paddingLeft: 0, fontSize: 14 }}><a style={{color : tabActive === 1 ? "#F9004D"  : "#FFFFFF"}} href="javascript:void(0)" onClick={()=>handleTab(1)} >Education</a></li>
                                <li style={{fontSize: 14}}><a style={{color : tabActive === 2 ? "#F9004D"  : "#FFFFFF"}} href="javascript:void(0)" onClick={()=>handleTab(2)} >Experience</a></li>
                            </ul>
                            <div className={tabActive === 1 ? styles.tabActive : styles.tab}>
                                <p>Computer Engineering ~ <span style={{color :"#acacac"}}>Pamukkale University</span> Denizli-Turkey / / From 2014 to 2019</p>
                                <p>Informatics Engineering ~ <span style={{color :"#acacac"}}>ISEC-Institute of Engineering</span> Coimbra-Portugal / / From 2017 to 2018</p>
                                <p>School of Foreign Languages ~ <span style={{color :"#acacac"}}>Pamukkale University</span> Denizli-Turkey / / From 2013 to 2014</p>
                                <p>High School ~ <span style={{color :"#acacac"}}>Milli Piyango Anatolian High School</span> Isparta-Turkey / / From 2008 to 2012</p>
                            </div>
                            <div className={tabActive === 2 ? styles.tabActive : styles.tab}>
                                <p>Software Development Engineer ~ <span style={{color :"#acacac"}}>AloTech</span> / / Since November 2019</p>
                                <p>Intern Engineer ~ <span style={{color :"#acacac"}}>Onpeta</span> / / From July 2017 to September 2017</p>
                                <p>Intern Engineer ~ <span style={{color :"#acacac"}}>Onpeta</span> / / From July 2016 to September 2016</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id={"portfolio"} className={styles.portfolio}>
                <div className={styles.portfolioWrapper}>
                    <div className={styles.aboutTitle}>
                        Portfolio
                    </div>

                    <div className={styles.portfolioCardWrapper}>

                        <div className={styles.cardMain} onClick={()=> window.open("https://github.com/ozanaydin9/portfolio", "_blank")}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={portfolioImg} title="Portfolio" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea} onClick={()=> window.open("https://github.com/ozanaydin9/portfolio", "_blank")}>
                                <p className={styles.cardProductAreaProductBrand}> Portfolio </p>
                                <p className={styles.cardProductAreaProductDetails}> Something for me. Personal portfolio page, designed by me and created with ReactJs.
                                </p>

                            </div>
                            <div className={styles.cardGoToProduct} onClick={()=> window.open("https://github.com/ozanaydin9/portfolio", "_blank")}>See on Github</div>
                        </div>

                        <div className={styles.cardMain} onClick={()=> window.open("https://github.com/ozanaydin9/Cocktail", "_blank")}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={cocktail} title="Cocktail" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Cocktail </p>
                                <p className={styles.cardProductAreaProductDetails}> What do you need for a home bar? A ReactJS+Redux application which gives you some cocktail recipes.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct} onClick={()=> window.open("https://github.com/ozanaydin9/Cocktail", "_blank")}>See on Github</div>
                        </div>

                        <div className={styles.cardMain} onClick={()=> window.open("https://github.com/ozanaydin9/react-redux-todo", "_blank")}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={todoMedium} title="Todo App" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Todo App </p>
                                <p className={styles.cardProductAreaProductDetails}> Design + Code. Simple Todo App.
                                    To read full story, visit <a style={{color:"white", textDecoration:"underline", zIndex:999}} target="_blank" href='https://medium.com/@ozanaydin9/todo-app-designing-with-figma-b1fbf135c410'>my medium story</a>
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct} onClick={()=> window.open("https://github.com/ozanaydin9/react-redux-todo", "_blank")}>See on Github</div>
                        </div>


                        <div className={styles.cardMain} onClick={()=> window.open("https://github.com/ozanaydin9/OMDB-MovieApplication", "_blank")}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={omdb} title="OMDB Movies" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> OMDB Movies </p>
                                <p className={styles.cardProductAreaProductDetails}> Are you looking for movies? Do you need some information about movies? A ReactJS+Redux application which is about movies.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct} onClick={()=> window.open("https://github.com/ozanaydin9/OMDB-MovieApplication", "_blank")}>See on Github</div>
                        </div>


                        <div className={styles.cardMain} onClick={()=> window.open("https://github.com/ozanaydin9/react-marketing", "_blank")}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={marketing} title="Marketing App" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Marketing </p>
                                <p className={styles.cardProductAreaProductDetails}> A ReactJs application for marketing, designed by me. Includes Login, Signup and Product Details Page.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct} onClick={()=> window.open("https://github.com/ozanaydin9/react-marketing", "_blank")}>See on Github</div>
                        </div>

                        <div className={styles.cardMain}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={native} title="Find the word" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Find the word </p>
                                <p className={styles.cardProductAreaProductDetails}> A React Native application about words. Choose the correct choice and gain point, like a game.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct} >Private on Github</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"resume"} className={styles.resume}>
                <div className={styles.resumeWrapper}>
                    <div className={styles.aboutTitle}>
                        Resume
                    </div>
                    <div className={styles.resumeContainer}>
                        <img className={styles.pdfImg} src={resumeImg}/>
                        <div className={styles.resumeOverlay}>
                            <a onClick={() => window.open(Pdf)} className={styles.icon} title="See Resume">
                                <img className={styles.savePdf} src={savePdf}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"contact"} className={styles.contact}>
                <div className={styles.contactWrapper}>
                    <div className={styles.aboutTitle}>
                        Contact
                    </div>

                    <div className={styles.contactText} style={{paddingTop: 80}}>
                        <p className={styles.contactText}>
                            You can contact me directly via email or social media accounts.
                        </p>
                        <p className={styles.contactTextMail}>
                            ozanaydin9@gmail.com
                        </p>

                        <div className={styles.contactTextIcon}>
                            <ul>
                                <li><a target="_blank" href='http://www.linkedin.com/in/ozanaydin9'><img className={styles.in} src={Lnkdn} /></a></li>
                                <li><a target="_blank" href='http://www.instagram.com/ozanaydin9'><img src={ins} /></a></li>
                                <li><a target="_blank" href='http://www.twitter.com/ozanjs'><img src={tw} /></a></li>
                                <li><a target="_blank" href='http://www.github.com/ozanaydin9'><img src={gth} /></a></li>
                            </ul>
                        </div>
                        <img src={oabig} />
                    </div>

                </div>

                <div className={styles.footer}>
                    <div className={styles.footerWrapper}>
                        <div className={styles.footerTitle}>
                            Ozan Aydın © 2020
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Home;