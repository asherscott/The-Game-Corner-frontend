import "./Settings.css";

function Settings() {
  return (
    <div>
      settings
      <div className="filter-container">
        <button>Platform</button>
        <select name="platform" id="platform-select"></select>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Settings;
