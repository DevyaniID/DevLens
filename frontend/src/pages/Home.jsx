import { useState } from "react";
import {
  GitBranch,
  Upload,
  FileArchive,
  Sparkles,
  Folder,
  Code2,
  Layers3,
  Network,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const analysisData = {
  projectName: "Sample E-Commerce API",
  summary:
    "This project is a Python-based REST API designed for managing users, products, orders, and authentication.",

  files: 45,
  directories: 12,
  classes: 18,
  functions: 64,

  languages: ["Python", "JavaScript"],
  frameworks: ["FastAPI"],
  libraries: ["Pydantic", "Uvicorn"],

  architecture: "Layered Architecture",
  architectureConfidence: "Likely",

  internalDependencies: 23,
  externalDependencies: 8,

  issues: 3,
  warnings: 5,
};

function Home() {
  const [inputType, setInputType] = useState("github");
  const [githubUrl, setGithubUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = () => {
    if (inputType === "github" && !githubUrl.trim()) {
      alert("Please enter a GitHub repository URL.");
      return;
    }

    if (inputType === "zip" && !selectedFile) {
      alert("Please select a ZIP file.");
      return;
    }

    setShowResults(false);
    setIsAnalyzing(true);

    // Temporary mock analysis.
    // Backend integration will replace this later.
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="home-page">
      {/* HEADER */}
      <div className="home-header">
        <div>
          <div className="brand-heading">
            <div className="brand-icon">
              <Sparkles size={24} />
            </div>

            <div>
              <h1>DevLens</h1>
              <p>AI-Powered Software Project Analyzer</p>
            </div>
          </div>
        </div>
      </div>

      {/* INPUT SECTION */}
      <section className="analysis-input-card">
        <div className="section-heading">
          <div>
            <h2>Analyze a Software Project</h2>
            <p>
              Upload a repository and let DevLens understand its structure,
              architecture, dependencies and code quality.
            </p>
          </div>
        </div>

        {/* INPUT TABS */}
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

        {/* GITHUB INPUT */}
        {inputType === "github" && (
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
              Enter the URL of a public GitHub repository you want DevLens to
              analyze.
            </p>
          </div>
        )}

        {/* ZIP INPUT */}
        {inputType === "zip" && (
          <div className="zip-section">
            <div className="drop-zone">
              <FileArchive size={45} />

              <h2>Upload your project ZIP</h2>

              <p>Select a ZIP file containing your source code.</p>

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
          </div>
        )}

        {/* ANALYZE BUTTON */}
        <button
          className="analyze-button main-analyze-button"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
        >
          <Sparkles size={18} />

          {isAnalyzing ? "Analyzing Project..." : "Analyze Project"}
        </button>
      </section>

      {/* LOADING */}
      {isAnalyzing && (
        <section className="analysis-loading">
          <div className="loading-icon">
            <Sparkles size={26} />
          </div>

          <h2>Analyzing your project...</h2>

          <p>
            DevLens is scanning the repository and preparing the analysis
            report.
          </p>

          <div className="loading-steps">
            <span>Scanning files</span>
            <span>Detecting technologies</span>
            <span>Analyzing dependencies</span>
            <span>Detecting architecture</span>
          </div>
        </section>
      )}

      {/* RESULTS */}
      {showResults && (
        <section className="analysis-results">
          <div className="results-header">
            <div>
              <span className="results-label">ANALYSIS COMPLETE</span>

              <h2>{analysisData.projectName}</h2>

              <p>{analysisData.summary}</p>
            </div>

            <div className="success-badge">
              <CheckCircle2 size={17} />
              Analysis Complete
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="analysis-stats">
            <div className="analysis-stat-card">
              <Folder size={22} />

              <span>Files</span>
              <strong>{analysisData.files}</strong>
            </div>

            <div className="analysis-stat-card">
              <Layers3 size={22} />

              <span>Directories</span>
              <strong>{analysisData.directories}</strong>
            </div>

            <div className="analysis-stat-card">
              <Code2 size={22} />

              <span>Classes</span>
              <strong>{analysisData.classes}</strong>
            </div>

            <div className="analysis-stat-card">
              <Code2 size={22} />

              <span>Functions</span>
              <strong>{analysisData.functions}</strong>
            </div>
          </div>

          {/* REPORT GRID */}
          <div className="report-grid">
            {/* TECHNOLOGY */}
            <div className="report-card">
              <div className="report-card-header">
                <Code2 size={20} />
                <h3>Technology Stack</h3>
              </div>

              <div className="report-content">
                <strong>Languages</strong>

                <div className="tag-list">
                  {analysisData.languages.map((language) => (
                    <span key={language} className="tech-tag">
                      {language}
                    </span>
                  ))}
                </div>

                <strong>Frameworks</strong>

                <div className="tag-list">
                  {analysisData.frameworks.map((framework) => (
                    <span key={framework} className="tech-tag">
                      {framework}
                    </span>
                  ))}
                </div>

                <strong>Libraries</strong>

                <div className="tag-list">
                  {analysisData.libraries.map((library) => (
                    <span key={library} className="tech-tag">
                      {library}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ARCHITECTURE */}
            <div className="report-card">
              <div className="report-card-header">
                <Layers3 size={20} />
                <h3>Architecture</h3>
              </div>

              <div className="architecture-result">
                <span>Detected Architecture</span>

                <strong>{analysisData.architecture}</strong>

                <div className="confidence">
                  Confidence: {analysisData.architectureConfidence}
                </div>
              </div>
            </div>

            {/* DEPENDENCIES */}
            <div className="report-card">
              <div className="report-card-header">
                <Network size={20} />
                <h3>Dependencies</h3>
              </div>

              <div className="dependency-stats">
                <div>
                  <span>Internal</span>
                  <strong>{analysisData.internalDependencies}</strong>
                </div>

                <div>
                  <span>External</span>
                  <strong>{analysisData.externalDependencies}</strong>
                </div>
              </div>
            </div>

            {/* CODE QUALITY */}
            <div className="report-card">
              <div className="report-card-header">
                <AlertTriangle size={20} />
                <h3>Code Quality</h3>
              </div>

              <div className="quality-stats">
                <div>
                  <span>Issues</span>
                  <strong>{analysisData.issues}</strong>
                </div>

                <div>
                  <span>Warnings</span>
                  <strong>{analysisData.warnings}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* AI SUMMARY */}
          <div className="ai-summary-card">
            <div className="report-card-header">
              <Sparkles size={20} />
              <h3>AI Project Summary</h3>
            </div>

            <p>
              This project appears to follow a layered backend architecture.
              The application separates its API, business logic and data
              handling responsibilities. DevLens detected a FastAPI-based
              service with Python as the primary language and supporting
              JavaScript components.
            </p>

            <p>
              The repository contains multiple modules with internal
              dependencies between components. The architecture appears
              maintainable, although the detected code-quality issues and
              warnings should be reviewed.
            </p>
          </div>

          {/* ARCHITECTURE DIAGRAM PLACEHOLDER */}
          <div className="architecture-diagram-card">
            <div className="report-card-header">
              <Layers3 size={20} />
              <h3>Architecture Visualization</h3>
            </div>

            <div className="diagram-placeholder">
              <Layers3 size={40} />

              <h3>Architecture Diagram</h3>

              <p>
                The generated Mermaid architecture diagram will appear here.
              </p>
            </div>
          </div>

          {/* DOWNLOAD */}
          <div className="report-actions">
            <button className="analyze-button">
              <Upload size={18} />
              Download Analysis Report
            </button>
          </div>
        </section>
      )}

      {/* INITIAL INFORMATION */}
      {!showResults && !isAnalyzing && (
        <section className="analysis-info">
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
        </section>
      )}
    </div>
  );
}

export default Home;