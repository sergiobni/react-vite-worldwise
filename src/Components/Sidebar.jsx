import AppNav from './AppNav';
import CopyrightFooter from './CopyrightFooter';
import Logo from './Logo';
import styles from './Sidebar.module.css';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <CopyrightFooter />
    </div>
  );
}

export default Sidebar;
