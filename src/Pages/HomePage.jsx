import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import Tabs from "../Components/Tabs";
import { fetchGIF, fetchVideos, fetchPhotos } from "../api/mediaApi";
import ResultGrid from "../Components/ResultGrid";
import EmptyState from "../Components/EmptyState";

const HomePage = ({ savedItems, setSavedItems }) => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
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
      setResults([]);
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
  }, [searchQuery, activeState]);
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

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={setSearchQuery}
        />
        <Tabs activeState={activeState} setActiveState={setActiveState} />
      </section>
      {!searchQuery && !loading && (
        <EmptyState message="Search for your next visual" />
      )}
      {searchQuery && !loading && !error && results.length === 0 && (
        <EmptyState message={`No results found for "${searchQuery}"`} />
      )}
      {loading && <p className="status-message">Searching...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && results.length > 0 && (
        <>
          <div className="results-header">
            <h2>Results for "{searchQuery}"</h2>

            <span>{results.length} results</span>
          </div>
          <ResultGrid results={results} setSavedItems={setSavedItems} savedItems={savedItems}/>
        </>
      )}
    </main>
  );
};

export default HomePage;
