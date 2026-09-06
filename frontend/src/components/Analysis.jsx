import {
  Folder,
  FileCode,
  Layers,
  GitBranch,
  Package,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

function Analysis() {
  // Temporary mock data.
  // This will later come from the FastAPI backend.
  const analysisData = {
    projectName: "Sample E-Commerce API",
    summary:
      "This project is a Python-based REST API designed for managing users, products, orders, and authentication.",

    files: 45,
    directories: 12,

    languages: ["Python", "JavaScript"],
    frameworks: ["FastAPI"],
    libraries: ["Pydantic", "Uvicorn"],

    classes: 18,
    functions: 64,

    architecture: "Layered Architecture",
    architectureConfidence: "Likely",

    internalDependencies: 23,
    externalDependencies: 8,

    issues: 3,
    warnings: 5,
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Analysis Results</h1>
          <p>
            Understand the structure, technologies, and architecture of your
            project.
          </p>
        </div>

        <div className="analysis-status">
          <CheckCircle size={18} />
          Analysis Complete
        </div>
      </div>

      {/* Project Overview */}
      <section className="analysis-section">
        <h2>Project Overview</h2>

        <div className="overview-card">
          <div className="overview-icon">
            <Folder size={28} />
          </div>

          <div>
            <h3>{analysisData.projectName}</h3>
            <p>{analysisData.summary}</p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="analysis-stat-card">
            <FileCode size={24} />
            <div>
              <span>Files</span>
              <strong>{analysisData.files}</strong>
            </div>
          </div>

          <div className="analysis-stat-card">
            <Folder size={24} />
            <div>
              <span>Directories</span>
              <strong>{analysisData.directories}</strong>
            </div>
          </div>

          <div className="analysis-stat-card">
            <Layers size={24} />
            <div>
              <span>Classes</span>
              <strong>{analysisData.classes}</strong>
            </div>
          </div>

          <div className="analysis-stat-card">
            <GitBranch size={24} />
            <div>
              <span>Functions</span>
              <strong>{analysisData.functions}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="analysis-section">
        <h2>Technology Stack</h2>

        <div className="analysis-card">
          <div className="analysis-card-header">
            <Package size={22} />
            <h3>Detected Technologies</h3>
          </div>

          <div className="technology-row">
            <strong>Languages</strong>

            <div className="tag-list">
              {analysisData.languages.map((language) => (
                <span className="technology-tag" key={language}>
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="technology-row">
            <strong>Frameworks</strong>

            <div className="tag-list">
              {analysisData.frameworks.map((framework) => (
                <span className="technology-tag" key={framework}>
                  {framework}
                </span>
              ))}
            </div>
          </div>

          <div className="technology-row">
            <strong>Libraries</strong>

            <div className="tag-list">
              {analysisData.libraries.map((library) => (
                <span className="technology-tag" key={library}>
                  {library}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture and Dependencies */}
      <div className="analysis-two-column">
        <section className="analysis-card">
          <div className="analysis-card-header">
            <Layers size={22} />
            <h3>Architecture</h3>
          </div>

          <div className="architecture-result">
            <span>Detected Pattern</span>
            <strong>{analysisData.architecture}</strong>
            <small>
              {analysisData.architectureConfidence} architecture pattern based
              on project structure and dependencies.
            </small>
          </div>
        </section>

        <section className="analysis-card">
          <div className="analysis-card-header">
            <GitBranch size={22} />
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
        </section>
      </div>

      {/* Code Quality */}
      <section className="analysis-section">
        <h2>Code Quality</h2>

        <div className="quality-grid">
          <div className="quality-card">
            <AlertTriangle size={24} />
            <div>
              <span>Issues</span>
              <strong>{analysisData.issues}</strong>
            </div>
          </div>

          <div className="quality-card">
            <AlertTriangle size={24} />
            <div>
              <span>Warnings</span>
              <strong>{analysisData.warnings}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Analysis;