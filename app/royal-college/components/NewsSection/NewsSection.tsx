import styles from "./NewsSection.module.css";

const NEWS_ITEMS = [
    {
        image: "/images/section4/Container1.png",
        title: "สภาเภสัชกรรมเปิดตัวหลักสูตรเภสัชศาสตรมหาบัณฑิต สาขาเภสัชกรรมคลินิก",
        description:
            "สภาเภสัชกรรมเปิดตัวหลักสูตรใหม่ล่าสุด! หลักสูตรเภสัชศาสตรมหาบัณฑิต สาขาเภสัชกรรมคลินิก มุ่งเน้นการพัฒนาเภสัชกรให้มีความเชี่ยวชาญ...",
    },
    {
        image: "/images/section4/Container 2.png",
        title: "สภาเภสัชกรรมอนุมัติหลักสูตรใหม่: เภสัชกรผู้เชี่ยวชาญด้านการบริบาลผู้สูงอายุ",
        description:
            "สภาเภสัชกรรมอนุมัติหลักสูตรใหม่: เภสัชกรผู้เชี่ยวชาญด้านการบริบาลผู้ป่วยสูงอายุ หลักสูตรระยะสั้นที่ออกแบบมาเพื่อเพิ่มพูนความรู้และทักษะในการดูแลผู้สูงอายุ...",
    },
    {
        image: "/images/section4/Container 3.png",
        title: "ประกาศรับสมัคร: หลักสูตรเภสัชศาสตรบัณฑิต สาขาการจัดการเภสัชสนเทศ",
        description:
            "เปิดรับสมัคร: หลักสูตรวิชาศาสตรมหาบัณฑิต สาขาเภสัชกรรมดิจิทัล มุ่งเน้นการใช้เทคโนโลยีสารสนเทศในการจัดการยาและเวชภัณฑ์ เหมาะสำหรับเภสัชกรที่ต้องการพัฒนาทักษะด้านดิจิทัล...",
    },
];

export default function NewsSection() {
    return (
        <section className={styles.newsSection}>
            <div className={styles.newsContainer}>
                {/* HIGHLIGHTS */}
                <div className={styles.newsHeader}>
                    <h2>เรื่องเด่น</h2>
                    <div className={styles.newsNav}>
                        <button className={styles.navBtn}>&lt;</button>
                        <button className={styles.navBtn}>&gt;</button>
                    </div>
                </div>

                <div className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                        <img src="/images/section4/img.png" alt="featured" />
                    </div>
                    <div className={styles.featuredContent}>
                        <div className={styles.tagOlive}>ข่าวประชาสัมพันธ์</div>
                        <h3>หลักสูตรวิชาชีพเภสัชกรรมที่สภาเภสัชกรรมให้การรับรอง</h3>
                        <p>
                            หลักสูตรการฝึกอบรมระยะสั้น ที่มีระยะเวลา การฝึกอบรม ไม่น้อยกว่า 16 สัปดาห์<br />
                            เป็นหลักสูตรที่จัดทำขึ้นยาใครรอยจากหลักสูตรการฝึกอบรมระยะสั้นสาขา...
                        </p>
                        <button className={styles.readMoreBtn}>อ่านเพิ่มเติม</button>
                    </div>
                </div>

                <div className={styles.paginationDots}>
                    <div className={styles.dotActive}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>

                {/* NEWS */}
                <div className={styles.newsRowHeader}>
                    <h2>ข่าวสาร</h2>
                    <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
                </div>

                <div className={styles.newsGrid}>
                    {NEWS_ITEMS.map((item, index) => (
                        <div key={index} className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
