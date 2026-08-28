const ResultCard = ({ item }) => {
  return (
    <article className="result-card">
      <div className="result-media">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.thumbnail}
            controls
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
          />
        )}

        <button className="save-button">
          ♡
        </button>
      </div>

      <div className="result-info">
        <h3>{item.title}</h3>

        <span>
          {item.type}
        </span>
      </div>
    </article>
  );
};

export default ResultCard;