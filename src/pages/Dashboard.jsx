function Dashboard() {
  return (
    <div className="dashboard">

      <nav className="navbar">
        <h1>DevLens</h1>

        <div className="nav-links">
          <span>Profile</span>
          <span>Logout</span>
        </div>
      </nav>

      <main className="dashboard-content">

        <section className="hero">
          <h2>DevLens</h2>

          <p>Understand unfamiliar repositories faster.</p>

          <button onClick={() => window.location.assign("/upload")}>
           Analyze Repository
          </button>
        </section>

        <section className="recent-projects">

          <h2>Recent Projects</h2>

          <div className="project-grid">

            <div className="project-card">
              <h3>Hospital Management System</h3>
              <p>Python • FastAPI</p>
            </div>

            <div className="project-card">
              <h3>E-Commerce Application</h3>
              <p>React • Node.js</p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;