import { FolderGit2, Plus, Clock } from "lucide-react";
function Projects() {
  const projects = [];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Projects</h1>
          <p>Manage and analyze your software repositories.</p>
        </div>

        <button className="primary-button">
          <Plus size={18} />
          New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <FolderGit2 size={42} />
          </div>

          <h2>No projects analyzed yet</h2>

          <p>
            Upload a repository or connect a GitHub project to start analyzing
            its architecture, code structure, and dependencies.
          </p>

          <button className="primary-button">
            Analyze Your First Project
          </button>
        </div>
      ) : (
        <div className="projects-grid">
          {/* Project cards will be dynamically added here */}
        </div>
      )}
    </div>
  );
}

export default Projects;