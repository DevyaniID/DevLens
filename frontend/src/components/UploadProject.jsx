import { useState } from "react";
import {
  GitBranch,
  Upload,
  FileArchive,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function UploadProject() {
  const navigate = useNavigate();

  const [inputType, setInputType] = useState("github");
  const [githubUrl, setGithubUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

const handleAnalyzeGithub = () => {
  if (!githubUrl.trim()) {
    alert("Please enter a GitHub repository URL.");
    return;
  }

  console.log("GitHub repository:", githubUrl);

  navigate("/analysis");
};
const handleAnalyzeZip = () => {
  if (!selectedFile) {
    return;
  }

  console.log("ZIP file:", selectedFile);

  navigate("/analysis");
};
  return (
    <div className="upload-page">
      <button
        className="back-button"
        onClick={() => navigate("/dashboard")}
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </button>

      <div className="upload-header">
        <div className="upload-title-icon">
          <Sparkles size={25} />
        </div>

        <div>
          <h1>Analyze a New Project</h1>
          <p>
            Upload a software project and let DevLens analyze its structure,
            architecture and code.
          </p>
        </div>
      </div>

      <div className="input-card">
        <div className="input-tabs">
          <button
            className={
              inputType === "github"
                ? "input-tab active"
                : "input-tab"
            }
            onClick={() => setInputType("github")}
          >
            <GitBranch size={20} />
            GitHub Repository
          </button>

          <button
            className={
              inputType === "zip"
                ? "input-tab active"
                : "input-tab"
            }
            onClick={() => setInputType("zip")}
          >
            <Upload size={20} />
            Upload ZIP
          </button>
        </div>

        {inputType === "github" ? (
          <div className="github-section">
            <label>GitHub Repository URL</label>

            <div className="github-input">
              <GitBranch size={20} />

              <input
                type="text"
                placeholder="https://github.com/username/repository"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>

            <p className="input-help">
              Enter the URL of a public GitHub repository you want
              DevLens to analyze.
            </p>

            <button
              className="analyze-button"
              onClick={handleAnalyzeGithub}
            >
              <Sparkles size={18} />
              Analyze Repository
            </button>
          </div>
        ) : (
          <div className="zip-section">
            <div className="drop-zone">
              <FileArchive size={45} />

              <h2>Upload your project ZIP</h2>

              <p>
                Select a ZIP file containing your source code.
              </p>

              <label className="browse-button">
                <Upload size={17} />
                Browse Files

                <input
                  type="file"
                  accept=".zip"
                  onChange={handleFileChange}
                  hidden
                />
              </label>

              {selectedFile && (
                <div className="selected-file">
                  <FileArchive size={18} />
                  <span>{selectedFile.name}</span>
                </div>
              )}
            </div>

            <button
              className="analyze-button"
              disabled={!selectedFile}
              onClick={handleAnalyzeZip}
            >
              <Sparkles size={18} />
              Analyze Project
            </button>
          </div>
        )}
      </div>

      <div className="analysis-info">
        <h3>What DevLens will analyze</h3>

        <div className="info-grid">
          <div>
            <strong>📁 Project Structure</strong>
            <span>Folders, files and modules</span>
          </div>

          <div>
            <strong>🔗 Dependencies</strong>
            <span>Libraries and relationships</span>
          </div>

          <div>
            <strong>🏗️ Architecture</strong>
            <span>Patterns and system structure</span>
          </div>

          <div>
            <strong>🤖 AI Insights</strong>
            <span>Code explanations and suggestions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadProject;

