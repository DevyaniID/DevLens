
import { FolderGit2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const projects = [];

  const handleNewProject = () => {
    navigate("/upload");
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Projects</h1>
          <p>Manage and analyze your software repositories.</p>
        </div>

        <button
          className="primary-button"
          onClick={handleNewProject}
        >
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

          <button
            className="primary-button"
            onClick={handleNewProject}
          >
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

