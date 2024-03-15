import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WWise
      </p>
    </div>
  );
}

export default Footer;
