const Options = ({ solved, handleReset, handleSolve, setSpeed }) => {
  const handleChange = (e) => {
    setSpeed(parseInt(e.target.value));
  };

  return (
    <div className="options">
      <div className="speed">
        <label htmlFor="speed">Velocidad:</label>
        <select
          disabled={solved}
          name="speed"
          id="speed"
          defaultValue="50"
          onChange={handleChange}
        >
          <option value="75">Lento</option>
          <option value="50">Regular</option>
          <option value="25">Rapido</option>
          <option value="0">Instantaneo</option>
        </select>
      </div>
      {!solved ? (
        <button className="solve-button" onClick={() => handleSolve()}>
          Resolver
        </button>
      ) : (
        <button className="solve-button" onClick={handleReset}>
          Cancelar
        </button>
      )}
    </div>
  );
};

export default Options;
