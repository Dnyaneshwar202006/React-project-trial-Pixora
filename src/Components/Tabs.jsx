const Tabs = ({ activeState, setActiveState }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeState === "images" ? "active" : ""}`}
        onClick={() => setActiveState("images")}
      >
        Images
      </button>

      <button
        className={`tab ${activeState === "videos" ? "active" : ""}`}
        onClick={() => setActiveState("videos")}
      >
        Videos
      </button>

      <button
        className={`tab ${activeState === "gifs" ? "active" : ""}`}
        onClick={() => setActiveState("gifs")}
      >
        GIFs
      </button>
    </div>
  );
};

export default Tabs;
