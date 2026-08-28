import { useEffect, useState } from "react";
import ResultGrid from "../Components/ResultGrid";

const CollectionPage = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("pixora-collection")) || [];

    setSavedItems(storedItems);
  }, []);

  const handleRemove = (id) => {
    const updatedItems = savedItems.filter((item) => item.id !== id);

    setSavedItems(updatedItems);

    localStorage.setItem("pixora-collection", JSON.stringify(updatedItems));
  };

  return (
    <main className="collection-page">
      <section className="collection-header">
        <p className="hero-eyebrow">YOUR COLLECTION</p>

        <h1 className="collection-title">Saved visuals</h1>

        <p className="collection-description">
          Your favorite images, videos and GIFs in one place.
        </p>
      </section>

      {savedItems.length === 0 ? (
        <div className="collection-empty">
          <h2>Your collection is empty</h2>

          <p>Save something from your search results and it'll appear here.</p>
        </div>
      ) : (
        <ResultGrid results={savedItems} onRemove={handleRemove}/>
      )}
    </main>
  );
};

export default CollectionPage;
