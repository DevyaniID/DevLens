import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  FolderGit2,
  Network,
  MessageSquare,
  FileText,
  Settings,
  Code2,
} from "lucide-react";

function DashboardLayout() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: FolderGit2,
    },
    {
      name: "Architecture",
      path: "/architecture",
      icon: Network,
    },
    {
      name: "AI Q&A",
      path: "/ai-chat",
      icon: MessageSquare,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },
  ];

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="logo">
          <Code2 size={26} />
          <span>DevLens</span>
        </div>

        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <NavLink to="/settings" className="nav-item">
            <Settings size={19} />
            <span>Settings</span>
          </NavLink>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h2>DevLens</h2>
            <p>AI-Powered Software Project Analyzer</p>
          </div>

          <div className="profile">
            <div className="avatar">B</div>
            <span>Member B</span>
          </div>
        </header>

        <section className="page-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default DashboardLayout;