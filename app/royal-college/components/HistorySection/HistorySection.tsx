"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import EmblemSection from "../EmblemSection/EmblemSection";
import LocationSection from "../LocationSection/LocationSection";
import styles from "./HistorySection.module.css";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "คณะกรรมการบริหาร",
    "ตราสัญลักษณ์",
    "สถานที่ตั้งราชวิทยาลัย",
];

const TIMELINE_DATA = [
    {
        year: "พ.ศ. 2478 - 2480",
        title: "จุดเริ่มต้นแนวคิด",
        description:
            "ประกาศใช้พระราชบัญญัติควบคุมการประกอบโรคศิลปะ เพื่อกำหนดมาตรฐานวิชาชีพเภสัชกรรมในประเทศไทย",
    },
    {
        year: "พ.ศ. 2565 - 2567",
        title: "การวางรากฐานและพัฒนา",
        description:
            "มีการจัดตั้งคณะทำงานเพื่อพัฒนาหลักสูตรและมาตรฐาน รวมถึงการเตรียมความพร้อมในการจัดตั้งราชวิทยาลัย",
    },
    {
        year: "15 พฤศจิกายน 2567",
        title: "การประกาศจัดตั้ง",
        description:
            "จัดตั้งราชวิทยาลัยเภสัชกรรมแห่งประเทศไทยอย่างเป็นทางการ",
    },
    {
        year: "ปัจจุบัน (พ.ศ. 2568 เป็นต้นไป)",
        title: "การขับเคลื่อนสู่อนาคต",
        description:
            "มุ่งเน้นการพัฒนาองค์ความรู้และยกระดับวิชาชีพเภสัชกรรม สู่มาตรฐานสากล",
    },
];

export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>เกี่ยวกับราชวิทยาลัยเภสัชกรรม<br />แห่งประเทศไทย</h3>

                <ul>
                    {MENU_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.historyContent}>

                {activeTab === 0 && (
                    <>
                        <h2>
                            &quot;จากปณิธานในการยกระดับมาตรฐานการประกอบวิชาชีพ
                            เภสัชกรรมสู่การจัดตั้งสถาบันทางวิชาการชั้นสูงของเภสัชกรไทย&quot;
                        </h2>

                        <p className={styles.subText}>
                            ความเป็นมาของราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย มีจุดเริ่มต้นจากแนวคิด
                            การพัฒนาวิชาชีพอย่างต่อเนื่องเพื่อรองรับความก้าวหน้าของวิชาการ
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        {item.year}
                                        <br />
                                        {item.title}
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === 1 && <CommitteeSection />}

                {activeTab === 2 && <EmblemSection />}

                {activeTab === 3 && <LocationSection />}

            </div>

        </section>
    );
}
