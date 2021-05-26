import "./ArticleCard.css";

function ArticleCard(props) {
  return (
    <div>
      <div className="articlecard">
        <img
          className="product-picture"
          src="./images/article-img.jpg"
          alt="bilde av artikel"
        />
        <h2>{props.title}</h2>
        <p className="article-name">{props.name}</p>
        <p className="articlecard-subtitle">{props.subtitle1}</p>
        <div className="video-button">Se video</div>
      </div>
    </div>
  );
}

export default ArticleCard;
