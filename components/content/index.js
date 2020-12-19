import Logo from "../logo";

export default function Content(props) {
    const {styles} = props;
  return (
    <>
      <div className={styles.divContent}>
        <div className={styles.logoContainer}>
          <Logo />
          <p>The React Framework</p>
          <p>for Production</p>
        </div>
      </div>

      <style jsx>{`
        section {
          min-height: 100vh;
        }
        p {
          color: white;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
