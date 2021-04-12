import "./Footer.css";
import linkedIn from "../../assets/linkedIn.png";
import github from "../../assets/github.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <a
          href="https://www.linkedin.com/in/grady-king/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} />
        </a>
        <img src={github} />
      </footer>
    </div>
  );
}

export default Footer;
