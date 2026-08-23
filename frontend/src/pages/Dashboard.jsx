import {
  FolderGit2,
  Code2,
  Network,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

function Dashboard() {
  return (
    <div>

      <div className="dashboard-header">
        <div>
          <h1>Welcome to DevLens 👋</h1>
          <p>
            Understand unfamiliar software projects with AI-powered analysis.
          </p>
        </div>

        <button className="primary-button">
          Analyze Repository
          <ArrowRight size={17} />
        </button>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <FolderGit2 size={24} />
          <div>
            <span>Projects</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="stat-card">
          <Code2 size={24} />
          <div>
            <span>Files Analyzed</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="stat-card">
          <Network size={24} />
          <div>
            <span>Architectures</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="stat-card">
          <MessageSquare size={24} />
          <div>
            <span>AI Queries</span>
            <strong>0</strong>
          </div>
        </div>

      </div>

      <div className="section-card">

        <div className="section-heading">
          <div>
            <h2>Analyze a New Repository</h2>
            <p>
              Upload a ZIP file or provide a GitHub repository URL.
            </p>
          </div>
        </div>

        <div className="repository-input">
          <input
            type="text"
            placeholder="https://github.com/username/project"
          />

          <button className="primary-button">
            Analyze
          </button>
        </div>

        <div className="upload-box">
          <FolderGit2 size={30} />

          <h3>Upload ZIP Repository</h3>

          <p>
            Drag and drop your project here or browse your computer.
          </p>

          <button className="secondary-button">
            Browse Files
          </button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;