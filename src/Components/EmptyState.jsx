const EmptyState = ({ message }) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">⌕</div>

      <h2>{message}</h2>

      <p>
        Try searching for something else.
      </p>
    </div>
  );
};

export default EmptyState;