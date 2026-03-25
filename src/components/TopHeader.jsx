export default function TopHeader() {
  return (
    <header className="top-header">
      <div className="search-bar">
        <span style={{ color: 'var(--text-muted)' }}>🔍</span>
        <input
          type="text"
          placeholder="Search for topics, courses, or mentors..."
          aria-label="Search courses"
        />
      </div>

      <div className="header-actions">
        <button className="notif-btn" aria-label="Notifications">🔔</button>
        <div className="dark-mode-toggle">
          <span>Dark Mode</span>
          <div className="toggle-switch" role="switch" aria-checked="true">
            <div className="toggle-circle" />
          </div>
        </div>
      </div>
    </header>
  )
}
