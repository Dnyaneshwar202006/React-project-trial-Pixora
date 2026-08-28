const ResultCard = ({
  item,
  onRemove,
}) => {
  const isCollectionItem = Boolean(onRemove);

  const handleSave = () => {
    const storedItems =
      JSON.parse(
        localStorage.getItem("pixora-collection")
      ) || [];

    const alreadySaved = storedItems.some(
      (savedItem) => savedItem.id === item.id
    );

    if (alreadySaved) {
      const updatedItems = storedItems.filter(
        (savedItem) => savedItem.id !== item.id
      );

      localStorage.setItem(
        "pixora-collection",
        JSON.stringify(updatedItems)
      );

      return;
    }

    const updatedItems = [
      ...storedItems,
      item,
    ];

    localStorage.setItem(
      "pixora-collection",
      JSON.stringify(updatedItems)
    );
  };

  const handleClick = () => {
    if (isCollectionItem) {
      onRemove(item.id);
    } else {
      handleSave();
    }
  };

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

        <button
          className={`save-button ${
            isCollectionItem ? "saved" : ""
          }`}
          onClick={handleClick}
          aria-label={
            isCollectionItem
              ? "Remove from collection"
              : "Save to collection"
          }
        >
          {isCollectionItem ? "♥" : "♡"}
        </button>
      </div>

      <div className="result-info">
        <h3>{item.title}</h3>

        <span>{item.type}</span>
      </div>
    </article>
  );
};

export default ResultCard;