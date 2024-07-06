import React from 'react'
import styles from './Navbar.module.css'
function Navbat() {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href='#'>JD PORT</a>
                    </div>
                    <ul>
                        <li><a href='#'>skill</a></li>
                        <li><a href='#'>portfolio</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                    <div className={styles.button}>
                        <a href="#">Hire Me</a>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbat
