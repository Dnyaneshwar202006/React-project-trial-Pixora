import ResultCard from "./ResultCard";

const ResultGrid = ({ results }) => {
  return (
    <div className="result-grid">
      {results.map((item) => (
        <ResultCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ResultGrid;