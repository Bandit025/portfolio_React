import React from 'react'
import styles from './Skills.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaBootstrap,FaNodeJs,FaPhp } from "react-icons/fa6";
function skills() {
  return (
    <div>
      <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3> 
        <ul className={styles.skills_list}>
          <li>
            <FaHtml5/>
          </li>
          <li>
            <FaCss3Alt/>
          </li>
          <li>
            <FaJs/>
          </li>
          <li>
            <FaReact/>
          </li>
          <li>
            <FaBootstrap/>
          </li>
          <li>
            <FaNodeJs/>
          </li>
          <li>
            <FaPhp/>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default skills
