import React from "react";
import styles from './Home.module.css';
import GlitchClip from "react-glitch-effect/core/Clip";
import oA from  '../../oA.svg'
import oabig from  '../../oabig.svg'
import Lnkdn from  '../../in.svg'
import ins from  '../../ins.svg'
import tw from  '../../tw.svg'
import gth from  '../../gth.svg'
import ozan from  '../../ozan.png'
import marketing from  '../../marketing.png'
import {animated} from "react-spring";
import Typical from "react-typical";
import Particles from "react-particles-js";
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Home = () => {

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <img src={oA} />
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <ul className={styles.icons}>
                        <li><a  href="#"><img className={styles.in} src={Lnkdn} /></a></li>
                        <li><a href="#"><img src={ins} /></a></li>
                        <li><a href="#"><img src={tw} /></a></li>
                        <li><a href="#"><img src={gth} /></a></li>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi. Nulla ullamcorper,
                            ligula ac volutpat porta, ligula neque sollicitudin ante, consectetur scelerisque velit orci non quam. Donec eget semper lorem, in auctor ligula.
                            </div>
                            <hr style={{background:"#454545"}}/>
                            <ul style={{paddingTop: 0, paddingBottom:10}}>
                                <li style={{paddingLeft: 0, fontSize: 14}}><a href="">Education</a></li>
                                <li style={{fontSize: 14}}><a href="">Experience</a></li>
                            </ul>
                            <p className={styles.aboutDetailInfoHeadText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi. Nulla ullamcorper,
                                ligula ac volutpat porta, ligula neque sollicitudin ante, consectetur scelerisque velit orci non quam. Donec eget semper lorem, in auctor ligula.
                            </p>
                            <p className={styles.aboutDetailInfoHeadText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi. Nulla ullamcorper,
                                ligula ac volutpat porta, ligula neque sollicitudin ante, consectetur scelerisque velit orci non quam. Donec eget semper lorem, in auctor ligula.
                            </p>
                            <p className={styles.aboutDetailInfoHeadText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi. Nulla ullamcorper,
                                ligula ac volutpat porta, ligula neque sollicitudin ante, consectetur scelerisque velit orci non quam. Donec eget semper lorem, in auctor ligula.
                            </p>
                            <p className={styles.aboutDetailInfoHeadText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi. Nulla ullamcorper,
                                ligula ac volutpat porta, ligula neque sollicitudin ante, consectetur scelerisque velit orci non quam. Donec eget semper lorem, in auctor ligula.
                            </p>
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

                        <div className={styles.cardMain}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={marketing} title="Login" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Lorem ipsum </p>
                                <p className={styles.cardProductAreaProductDetails}> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi.
                                </p>

                            </div>
                            <div className={styles.cardGoToProduct}>See on Github</div>
                        </div>

                        <div className={styles.cardMain}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={marketing} title="Login" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Lorem ipsum </p>
                                <p className={styles.cardProductAreaProductDetails}> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct}>See on Github</div>
                        </div>

                        <div className={styles.cardMain}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={marketing} title="Login" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Lorem ipsum </p>
                                <p className={styles.cardProductAreaProductDetails}> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct}>See on Github</div>
                        </div>


                        <div className={styles.cardMain}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={marketing} title="Login" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Lorem ipsum </p>
                                <p className={styles.cardProductAreaProductDetails}> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct}>See on Github</div>
                        </div>


                        <div className={styles.cardMain}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={marketing} title="Login" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Lorem ipsum </p>
                                <p className={styles.cardProductAreaProductDetails}> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct}>See on Github</div>
                        </div>

                        <div className={styles.cardMain}>
                            <div className={styles.cardImageArea}>
                                <img className={styles.cardImage} src={marketing} title="Login" alt="login"/>

                            </div>
                            <div className={styles.cardProductArea}>
                                <p className={styles.cardProductAreaProductBrand}> Lorem ipsum </p>
                                <p className={styles.cardProductAreaProductDetails}> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Donec nulla ex, tincidunt eu magna nec, malesuada lobortis mi.
                                </p>
                            </div>
                            <div className={styles.cardGoToProduct}>See on Github</div>
                        </div>
                    </div>
                </div>
            </div>
     {/*       <div id={"resume"} className={styles.resume}>
                <div className={styles.resumeWrapper}>
                    <div className={styles.aboutTitle}>
                        Resume
                    </div>
                    <div className={styles.resumePdf}>
                        <iframe src={resume}
                                frameBorder="0"
                                scrolling="auto"
                                height="600"
                                width="850"
                        />
                    </div>
                </div>
            </div>*/}
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
                                <li><a  href="#"><img className={styles.in} src={Lnkdn} /></a></li>
                                <li><a href="#"><img src={ins} /></a></li>
                                <li><a href="#"><img src={tw} /></a></li>
                                <li><a href="#"><img src={gth} /></a></li>
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