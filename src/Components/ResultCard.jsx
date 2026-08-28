const ResultCard = ({ item }) => {
  return (
    <article className="result-card">
      {item.type === "video" ? (
        <video src={item.src} poster={item.thumbnail} controls />
      ) : (
        <img src={item.src} alt={item.title} />
      )}
    </article>
  );
};

export default ResultCard;
