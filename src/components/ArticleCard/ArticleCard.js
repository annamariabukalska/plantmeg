import "./ArticleCard.css";

function ArticleCard(props) {
  return (
    <div className="articlecard">
      <img
        className="article-picture"
        src="./images/article-img.jpg"
        alt={props.title}
      />
      <h2>{props.title}</h2>
      <p className="article-name">{props.name}</p>
      <p className="articlecard-subtitle">{props.subtitle}</p>
      <a href={props.link} target="_blank">
        <div className="video-button">Se video</div>
      </a>
    </div>
  );
}

export default ArticleCard;
