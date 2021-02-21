const Options = ({ solved, handleReset, handleSolve, setSpeed }) => {
  const handleChange = (e) => {
    setSpeed(parseInt(e.target.value));
  };

  return (
    <div className="options">
      <div className="speed">
        <label htmlFor="speed">Speed:</label>
        <select
          disabled={solved}
          name="speed"
          id="speed"
          defaultValue="50"
          onChange={handleChange}
        >
          <option value="75">Slow</option>
          <option value="50">Regular</option>
          <option value="25">Fast</option>
          <option value="0">Instant</option>
        </select>
      </div>
      {!solved ? (
        <button className="solve-button" onClick={() => handleSolve()}>
          Solve
        </button>
      ) : (
        <button className="solve-button" onClick={handleReset}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default Options;
