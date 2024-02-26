import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import CopyrightFooter from './CopyrightFooter';
import Logo from './Logo';
import styles from './Sidebar.module.css';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <CopyrightFooter />
    </div>
  );
}

export default Sidebar;
