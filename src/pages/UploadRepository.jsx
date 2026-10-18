function UploadRepository() {
  return (
    <div className="upload-page">

      <nav className="navbar">
        <h1>DevLens</h1>

        <div className="nav-links">
          <span>Dashboard</span>
          <span>Profile</span>
          <span>Logout</span>
        </div>
      </nav>

      <main className="upload-content">

        <div className="upload-header">
          <h2>Analyze Your Repository</h2>
          <p>
            Upload your project or provide a GitHub repository URL
            to understand its structure and technologies.
          </p>
        </div>

        <div className="upload-card">

          <div className="input-section">
            <label>GitHub Repository URL</label>

            <input
              type="text"
              placeholder="https://github.com/username/repository"
            />
          </div>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="file-section">
            <div className="upload-icon">📦</div>

            <h3>Upload ZIP File</h3>

            <p>
              Select a ZIP file containing your project
            </p>

            <input type="file" accept=".zip" />
          </div>

          <button className="analyze-button">
            🚀 Analyze Repository
          </button>

        </div>

      </main>

    </div>
  );
}

export default UploadRepository;