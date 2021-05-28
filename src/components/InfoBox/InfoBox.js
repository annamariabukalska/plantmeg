import "./InfoBox.css";

function InfoBox() {
  return (
    <div>
        <h2>Informasjon</h2>
        <div  className="info-ramme">
        <div className="info-kategori">
        <img src="images/heart.png" alt="wish" className="icons" />
        <p>Lysbehov</p>
        <p>Sol-Halvskygge</p>
        </div>

        <div className="info-kategori">
        <img src="images/heart.png" alt="wish" className="icons" />
        <p>Fullvoksen</p>
        <p>Sol-Halvskygge</p>
        </div>

        <div className="info-kategori">
        <img src="images/heart.png" alt="wish" className="icons" />
        <p>Vann</p>
        <p>Sol-Halvskygge</p>
        </div>

        <div className="info-kategori">
        <img src="images/heart.png" alt="wish" className="icons" />
        <p>Gjødsel</p>
        <p>Sol-Halvskygge</p>
        </div>
        </div>
    </div>
  );
}

export default InfoBox;
