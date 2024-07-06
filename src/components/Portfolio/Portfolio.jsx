import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Portfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_item}>
                    <img src="https://via.placeholder.com/150" alt="portfolio" />
                    <h4>Project 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio ac dolor, eu sodales.</p>
                </div>
                <div className={styles.port_item}>
                    <img src="https://via.placeholder.com/150" alt="portfolio" />
                    <h4>Project 2</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio ac dolor, eu sodales.</p>
                </div>
                <div className={styles.port_item}>
                    <img src="https://via.placeholder.com/150" alt="portfolio" />
                    <h4>Project 3</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio ac dolor, eu sodales.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
