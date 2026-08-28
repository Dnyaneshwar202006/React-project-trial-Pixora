import ResultCard from "./ResultCard";

const ResultGrid = ({ results, onRemove }) => {
  return (
    <div className="result-grid">
      {results.map((item) => (
        <ResultCard
          key={item.id}
          item={item}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ResultGrid;