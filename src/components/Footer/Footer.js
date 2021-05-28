import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="adresse">
          <h2>Plantmeg</h2>
          <p>Planteveien 35, 1155 Plantejord</p>
          <p>Sentralbord: 95 99 44 83</p> 
          <p>post@plantmeg.no</p> 
          <p>Org.nr.: NO 544 286 455</p>
          <div className="footer-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img
                src={"/images/icon-instagram.png"}
                alt="instagram"
                className="icon"
              />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={"/images/icon-facebook.png"} alt="facebook" className="icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img src={"/images/icon-youtube.png"} alt="youtube" className="icon" />
            </a>
          </div>
        </div>
        <div>
          <h3>Åpningstider</h3>
          <p>Mandag - Fredag kl. 08:00 - 20:00</p>
          <p>Lørdag kl. 08:00 - 18:00</p>
        </div>
        <div>
          <h3>Levering</h3>
          <img src={"/images/icon-helthjem.png"} alt="helthjem" className="icon2" />
          <img src={"/images/icon-bring.png"} alt="bring" className="icon2" />
        </div>
        <div>
          <h3>Betaling</h3>
          <img src={"/images/icon-visa.png"} alt="visa" className="icon2" />
          <img src={"/images/icon-mastercard.png"} alt="mastercard" className="icon2" />
          <img src={"/images/icon-vipps.png"} alt="vipps" className="icon2" />
          <img src={"/images/icon-klarna.png"} alt="klarna" className="icon2" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
