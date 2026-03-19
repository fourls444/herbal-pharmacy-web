import styles from "./CollegesSection.module.css";

const COLLEGES = [
    { image: "/images/services/Services1.png" },
    { image: "/images/services/Services2.png" },
    { image: "/images/services/Services3.png" },
    { image: "/images/services/Services4.png" },
    { image: "/images/services/Services5.png" },
    { image: "/images/services/Services6.png" },
    { image: "/images/services/Services7.png" },
];

export default function CollegesSection() {
    return (
        <section className={styles.collegesSection}>
            <div className={styles.collegesHeader}>
                <h2>ราชวิทยาลัยเภสัชกรรมทั้ง 7 วิทยาลัย</h2>
                <p>
                    เป็นองค์กรภายใต้สภาเภสัชกรรม ที่มุ่งเน้นการส่งเสริมและพัฒนาศักยภาพทางวิชาชีพเภสัชกรรมอย่างต่อเนื่อง<br />
                    และสร้างมาตรฐานการศึกษาภายหลังปริญญา ทั้งในระดับประกาศนียบัตรวิชาชีพเภสัชกรรม หนังสืออนุมัติและวุฒิบัตรฯ<br />
                    สาขาความเชี่ยวชาญเฉพาะทางต่างๆ เพื่อยกระดับองค์ความรู้วิชาชีพให้เป็นมาตรฐานสากล
                </p>
            </div>

            <div className={styles.collegesGrid}>
                {COLLEGES.map((college, index) => (
                    <div
                        key={index}
                        className={styles.collegeCard}
                        style={{ backgroundImage: `url('${college.image}')` }}
                    />
                ))}
            </div>
        </section>
    );
}
