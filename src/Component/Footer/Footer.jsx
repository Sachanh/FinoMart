import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-menu">
          <ul>
            <a className="link" href="https://github.com/Sachanh">
              <i className="fab fa-github"></i>
            </a>
            <a
              className="link"
              href="https://www.instagram.com/himanshumaheshrajsachan/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/himanshu-mahesh-raj-sachan-010776109/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </ul>
        </div>
        <div className="other">
          <p className="para">
            {" "}
            Made with <i className="fas fa-heart heart"></i> by{" "}
            <a className="link" href="https://devjoker.netlify.app/">
              {" "}
              Himanshu Sachan
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
