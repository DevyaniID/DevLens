import { FolderGit2, FileCode2, Network, MessageSquare, Upload } from "lucide-react";

function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Welcome to DevLens</h1>
          <p>
            Understand unfamiliar software projects with AI-powered analysis.
          </p>
        </div>

        <button className="primary-button">
          <Upload size={18} />
          Analyze Repository
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FolderGit2 size={22} />
          </div>
          <div>
            <span>Projects</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FileCode2 size={22} />
          </div>
          <div>
            <span>Files Analyzed</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Network size={22} />
          </div>
          <div>
            <span>Architectures</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <MessageSquare size={22} />
          </div>
          <div>
            <span>AI Queries</span>
            <strong>0</strong>
          </div>
        </div>
      </div>

      <div className="analyze-card">
        <div className="analyze-header">
          <div>
            <h2>Analyze a New Repository</h2>
            <p>
              Enter a GitHub repository URL or upload a ZIP file to begin.
            </p>
          </div>
        </div>

        <div className="github-input-row">
          <input
            type="text"
            placeholder="https://github.com/user/repository"
          />

          <button className="primary-button">
            Analyze
          </button>
        </div>

        <div className="upload-box">
          <Upload size={32} />
          <h3>Upload Repository ZIP</h3>
          <p>Drag and drop your project here, or click to browse.</p>

          <button className="secondary-button">
            Choose ZIP File
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;