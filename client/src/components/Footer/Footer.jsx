import "./Footer.css";
import linkedIn from "../../assets/linkedIn.png";
import github from "../../assets/github.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <img src={linkedIn} />
        <img src={github} />
      </footer>
    </div>
  );
}

export default Footer;
