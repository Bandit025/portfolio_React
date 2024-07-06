import React from 'react'
import styles from './hero.module.css'
import { FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa6";
function Hero() {
    return (
        <div className={styles.hero_warpper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Hi,it's me</p>
                        <h3 className={styles.text_2}>BANDIT NANTHAYOTHAWUT</h3>
                        <p className={styles.text_3}>I'm a Full stack Developer</p>
                        <p className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuma fugiat comemodiguas cupiditate minus dolore nulla eos accusntium labore explicabo.</p>
                        <ul className={styles.hero_social}>
                            <li><a href="https://github.com/Bandit025"><FaGithub /></a></li>
                            <li><a href="https://www.instagram.com/b.n.j_25/"><FaInstagram /></a></li>
                            <li><a href="https://www.facebook.com/Gee.Joe034/"><FaFacebookF /></a></li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.hero_img}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
