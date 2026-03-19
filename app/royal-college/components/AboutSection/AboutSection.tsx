import styles from "./AboutSection.module.css";

const STATS = [
    { value: "7", label: "วิทยาลัยเฉพาะทาง", icon: "/images/home/icon9.png" },
    { value: "1500+", label: "สมาชิกทั่วประเทศ", icon: "/images/home/icon10.png" },
    { value: "200+", label: "หลักสูตรอบรม/ปี", icon: "/images/home/icon9.png" },
    { value: "50+", label: "งานวิจัยตีพิมพ์/ปี", icon: "/images/home/icon11.png" },
];

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>

            {/* LEFT IMAGE */}
            <div className={styles.imageBox}>
                <img src="/images/home/Container.png" alt="group" />
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.content}>
                <p>
                    ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย ก่อตั้งขึ้นตามปณิธาน
                    ที่มุ่งมั่นของสภาเภสัชกรรมเพื่อเป็นองค์กรหลักในการกำกับดูแล
                    มาตรฐานทางวิชาการ และพัฒนาทักษะวิชาชีพเชิงลึก โดยการรวมกลุ่มของวิทยาลัยชำนาญการทั้ง 7 สาขา มุ่งเน้น
                    การสร้างผู้เชี่ยวชาญที่มีความรู้ความสามารถเป็นที่ยอมรับ
                    ในระดับสากลเพื่อสวัสดิการและสุขภาวะที่ดีของประชาชน
                </p>

                {/* STATS */}
                <div className={styles.stats}>
                    {STATS.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statContent}>
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                            <img src={stat.icon} alt="" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
