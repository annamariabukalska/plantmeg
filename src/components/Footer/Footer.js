import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="adresse">
        <p>Plantmeg</p>
        <p>Planteveien 35, 1155 Plantejord</p>
        <p>
          Sentralbord: 95 99 44 83 E-post: post@plantmeg.no Org nr: NO 544 286
          455
        </p>
      </div>
      <div>
        <img
          src={"images/icon-Instagram.png"}
          alt="instagram"
          className="icon"
        />
        <img src={"images/icon-facebook.png"} alt="facebook" className="icon" />
        <img src={"images/icon-youtube.png"} alt="youtube" className="icon" />
      </div>
      <div>
        <p>Åpningstider</p>
        <p>Mandag - Fredag kl. 08:00 - 20:00</p>
        <p>Lørdag kl. 08:00 - 18:00</p>
      </div>
      <div>
        <p>Levering</p>
        <img src={"images/helthjem.png"} alt="helthjem" className="icon2" />
        <img src={"images/bring.png"} alt="bring" className="icon2" />
      </div>
      <div>
        <p>Betaling</p>
        <img src={"images/visa.png"} alt="visa" className="icon2" />
        <img src={"images/mastercard.png"} alt="mastercard" className="icon2" />
        <img src={"images/vips.png"} alt="vips" className="icon2" />
        <img src={"images/klarna.png"} alt="klarna" className="icon2" />
      </div>
    </footer>
  );
}
export default Footer;
