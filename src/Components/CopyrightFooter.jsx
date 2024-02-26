import styles from './CopyrightFooter.module.css';
function CopyrightFooter() {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default CopyrightFooter;
