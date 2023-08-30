import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} target="_blank">
        Mikael Alvian Rizky
      </a>
    </footer>
  );
};

export default Footer;
