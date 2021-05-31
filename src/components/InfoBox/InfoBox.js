import "./InfoBox.css";

function InfoBox() {
  return (
    <div>
        <h2>Informasjon</h2>
        <div className="info-ramme">
        <div className="info-kategori">
        <img src="/images/icon-sun.png" alt="wish" className="icons" />
        <h3>Lysbehov</h3>
        <p>Sol-Halvskygge</p>
        </div>

        <div className="info-kategori">
        <img src="/images/icon-grow.png" alt="wish" className="icons" />
        <h3>Fullvoksen</h3>
        <p>30cm</p>
        </div>

        <div className="info-kategori">
        <img src="/images/icon-water.png" alt="wish" className="icons" />
        <h3>Vann</h3>
        <p>Middel</p>
        </div>

        <div className="info-kategori">
        <img src="/images/icon-soil.png" alt="wish" className="icons" />
        <h3>Gjødsel</h3>
        <p>Lite</p>
        </div>
        </div>
    </div>
  );
}

export default InfoBox;
