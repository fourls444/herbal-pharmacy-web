import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/images/favicon.png" className={styles.logo} />
        <div>
          <h1>สภาเภสัชกรรม</h1>
          <p>The Pharmacy Council of Thailand</p>
        </div>
      </div>

    </header>
  );
}