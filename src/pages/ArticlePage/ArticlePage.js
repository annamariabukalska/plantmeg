import ArticleCard from "../../components/ArticleCard/ArticleCard";

function ArticlePage() {
    return (
      <div className="content-inset">
        <h1>Tips og råd</h1>
        <div className="articlecard-grid">
            <ArticleCard
              name="Hvilke potter er best?"
              subtitle="Det finnes mange forskjellige potter. Plantemagasinet viser deg hva du burde velge."
              imageUrl="potter.jpg"
              link="https://www.plantemagasinet.no/post/hvilken-potte-skal-du-bruke"
              buttonTitle="Les mer ↗"
            />
            <ArticleCard
              name="Hvordan vanne blomster?"
              subtitle="Er du nysjerig på hvordan skal man vanne blomster? Se Pick Up Limes:"
              imageUrl="vanneblomster.jpg"
              link="https://www.pickuplimes.com/video/houseplant-care-tips-for-beginners-78"
              buttonTitle="Se video ↗"
            />
            <ArticleCard
              name="Den beste jord!"
              subtitle="Lær hvordan man får næringsrik jord som plantene trives i."
              imageUrl="jord.jpg"
              link="https://www.plantemagasinet.no/post/hvorfor-bor-planter-pottes-om"
              buttonTitle="Les mer ↗"
            />
          </div>
      </div>
    );
  }
  export default ArticlePage;
  