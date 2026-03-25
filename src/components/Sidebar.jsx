const NAV_ITEMS = [
  { icon: '🏠', label: 'Home', href: '#' },
  { icon: '📚', label: 'Courses', href: '#', active: true },
  { icon: '🏆', label: 'Awards', href: '#' },
  { icon: '👤', label: 'Profile', href: '#' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          <h1>Amber Helix</h1>
          <p>Learning Portal</p>
        </div>
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={item.active ? 'active' : ''}>
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="user-profile">
        <div className="avatar" />
        <div className="user-info">
          <h4>Alex Rivera</h4>
          <p>Level 14 Pro</p>
        </div>
      </div>
    </aside>
  )
}
