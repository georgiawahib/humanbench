import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.flexbox} ${styles.outerContainer}`}>
      <div className={`${styles.flexbox}`}>
        <a className={`${styles.text}`} href="/">
          HUMAN BENCHMARK
        </a>
        <a className={`${styles.text}`} href="/dashboard">
          DASHBOARD
        </a>
      </div>
      <div className={`${styles.flexbox}`}>
        <a className={`${styles.text}`}>SIGN UP</a>
        <a className={`${styles.text}`}>LOGIN</a>
      </div>
    </div>
  );
}
