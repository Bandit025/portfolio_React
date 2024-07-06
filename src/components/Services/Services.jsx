import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop,FaDatabase } from 'react-icons/fa6'
function Services() {
    return (
        <div className={styles.services_con}>
            <h3 className={styles.services_title} >My Services</h3>
            <div className={styles.services_list}>
                <div className={styles.services_item}>
                  <FaCode/>
                  <h4>Web Developer</h4>
                  <p>ฉันมีทักษะในการพัฒนาซอฟต์แวร์ที่หลากหลาย เช่น การเขียนโปรแกรมที่มีความแม่นยำและประสิทธิภาพสูง การออกแบบและสร้างเว็บไซต์ที่ใช้งานได้ง่าย และการทำงานร่วมกับทีมเพื่อให้ผลลัพธ์ที่ดีที่สุดในทุกๆ โครงการ</p>
                </div>
                <div className={styles.services_item}>
                  <FaPaintbrush/>
                  <h4>Web Design</h4>
                  <p>ฉันมีทักษะในการออกแบบเว็บไซต์ที่เน้นความสวยงามและประสบการณ์ผู้ใช้ที่ดี ด้วยความชำนาญในการใช้เครื่องมือและเทคโนโลยีที่ทันสมัยเพื่อสร้างเว็บไซต์ที่ทันสมัยและปฏิสัมพันธ์ได้เป็นอย่างดี</p>
                </div>
                <div className={styles.services_item}>
                  <FaDesktop/>
                  <h4>Front-end Constulting</h4>
                  <p>ฉันมีความเชี่ยวชาญในการปรึกษาและพัฒนาฟรอนต์เอ็นด์ของเว็บไซต์ที่ใช้งานได้ง่ายและมีประสิทธิภาพสูง ด้วยความเข้าใจที่ลึกซึ้งใน HTML, CSS, และ JavaScript เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจและตอบสนองต่อความต้องการของธุรกิจ</p>
                </div>
                <div className={styles.services_item}>
                  <FaDatabase/>
                  <h4>Back-end Constulting</h4>
                  <p>ฉันมีความเชี่ยวชาญในการปรึกษาและพัฒนาแอปพลิเคชันและระบบเว็บไซต์ด้านบักแอนด์ ด้วยความรู้และทักษะที่ลึกซึ้งในการเขียนโค้ดและการออกแบบฐานข้อมูล เพื่อให้ระบบทำงานได้มีประสิทธิภาพสูงและปรับตัวได้ตามความต้องการของธุรกิจ</p>
                </div>
            </div>
        </div>
    )
}

export default Services
