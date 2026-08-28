import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import Tabs from "../Components/Tabs";
import { fetchGIF, fetchVideos, fetchPhotos } from "../api/mediaApi";
import ResultGrid from "../Components/ResultGrid";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [activeState, setActiveState] = useState("images");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      return;
    }
    const searchMedia = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (activeState === "images") {
          data = await fetchPhotos(query);
        }
        if (activeState === "videos") {
          data = await fetchVideos(query);
        }
        if (activeState === "gifs") {
          data = await fetchGIF(query);
        }
        setResults(data);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching data...");
      } finally {
        setLoading(false);
      }
    };

    searchMedia();
  }, [query, activeState]);
  return (
    <main className="home-page">
      <section className="hero-section">
        <p className="hero-eyebrow">DISCOVER • SEARCH • SAVE</p>

        <h1 className="hero-title">
          Find the perfect
          <span> visual.</span>
        </h1>

        <p className="hero-description">
          Search millions of images, videos and GIFs from multiple sources in
          one place.
        </p>

        <SearchBar query={query} setQuery={setQuery} />
        <Tabs activeState={activeState} setActiveState={setActiveState} />
      </section>
      {results.length > 0 && <ResultGrid results={results} />}
    </main>
  );
};

export default HomePage;
