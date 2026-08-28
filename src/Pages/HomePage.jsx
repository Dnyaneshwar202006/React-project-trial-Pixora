import { useState } from "react";
import SearchBar from "../Components/SearchBar"
import Tabs from "../Components/Tabs";

const HomePage = () => {
    const [query, setQuery] = useState("");
    const [activeState, setActiveState] = useState("images");
  return (
    <main className="home-page">
      <section className="hero-section">
        <p className="hero-eyebrow">DISCOVER • SEARCH • SAVE</p>

        <h1 className="hero-title">
          Find the perfect
          <span> visual.</span>
        </h1>

        <p className="hero-description">
          Search millions of images, videos and GIFs from multiple
          sources in one place.
        </p>

        <SearchBar query={query} setQuery={setQuery}/>
        <Tabs activeState={activeState} setActiveState={setActiveState}/>
      </section>
    </main>
  )
}

export default HomePage
