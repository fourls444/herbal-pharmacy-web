import styles from "./CommitteeSection.module.css";

export default function CommitteeSection() {
    return (
        <section className={styles.section}>

            {/* HEADER */}
            <div className={styles.header}>
                <h2>
                    "ผู้นำทางวิชาชีพผู้เปี่ยมด้วยวิสัยทัศน์ ร่วมขับเคลื่อนเกียรติภูมิเภสัชกรไทย"
                </h2>
                <p>
                    คณะกรรมการบริหารราชวิทยาลัยเภสัชกรรมแห่งประเทศไทยประกอบด้วยผู้ทรงคุณวุฒิและผู้เชี่ยวชาญ<br />
                    จากหลากหลายสาขาทางเภสัชศาสตร์ ซึ่งได้รับความไว้วางใจให้ทำหน้าที่กำหนดนโยบาย วางรากฐาน และกำกับดูแลมาตรฐานทางวิชาการ<br />
                    และการฝึกอบรมเฉพาะทาง ภายใต้ปณิธานที่มุ่งเน้นความถูกต้องตามหลักวิชาการและความล้ำสมัย เพื่อให้ราชวิทยาลัยฯ<br />
                    เป็นเสาหลักในการพัฒนาศักยภาพเภสัชกรให้เป็นที่ยอมรับในระดับสากลและตอบสนองต่อระบบสาธารณสุขของชาติอย่างยั่งยืน
                </p>
            </div>

            {/* PRESIDENT */}
            <div className={styles.presidentWrapper}>
                <div className={styles.presidentCard}>
                    <img src="/images/committee/president.png" alt="นายกสภาเภสัชกรรม" />
                </div>
            </div>

            {/* GRID */}
            <div className={styles.grid}>
                {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className={styles.card}>
                        <img src={`/images/committee/member${i + 1}.png`} alt={`Committee Member ${i + 1}`} />
                    </div>
                ))}
            </div>

        </section>
    );
}