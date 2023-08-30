import Footer from "@/components/molecules/footer";
import { FCC } from "@/types/react";

import styles from "./layout.module.css";

const Layout: FCC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
