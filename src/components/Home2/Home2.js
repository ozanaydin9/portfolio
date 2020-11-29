import React from "react";
import styles from './Home2.module.css';
import Typical from 'react-typical'
import GlitchClip from 'react-glitch-effect/core/Clip';
import Particles from 'react-particles-js';
import {useSpring, animated} from 'react-spring'


const Home2 = () => {
    function route() {
        window.location.href="/home"
    };

    const welcome = useSpring({
        from: {
            margin: '300px'
        },
        to: {
            margin: '300px'
        }
    })

    return(
        <div className={styles.main}>
            <Particles width="100vw" height="100vh"
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
            {/*<div className={styles.g} onClick={route}>*/}
            <animated.div style={welcome}>
                <GlitchClip duration="2s">
                    {/*//Değişik font dene*/}
                    <p className={styles.g2}>Ozan Aydın</p>
                </GlitchClip>

                <p className={styles.g3}>
                    <Typical
                        steps={['Software Development Engineer', 500,
                            'ozanaydin9@gmail.com', 500,
                            'click here to continue', 500,]}
                        loop={1}
                        wrapper="p"
                    />
                </p>
                <GlitchClip duration="1s">
                    <p className={styles.goIn}>>>>></p>
                </GlitchClip>

            </animated.div>

            {/*<div className={styles.main2}>

                <Typical
                    steps={['Ozan Aydın', 1000, 'Software Development Engineer', 500]}
                    loop={1}
                    wrapper="p"
                />
            </div>*/}
        </div>
    )
};

export default Home2;