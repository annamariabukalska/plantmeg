import "./ArticleCard.css";

function ArticleCard(props) {
  return (
    <div className="articlecard">
      <img
        className="article-picture"
        src={`./images/${props.imageUrl}`}
        alt={props.title}
      />
      <h3 className="article-title">{props.name}</h3>
      <p className="articlecard-subtitle">{props.subtitle}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="cta-button">{props.buttonTitle}</div>
      </a>
    </div>
  );
}

export default ArticleCard;
