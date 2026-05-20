const linkClass = "flex items-center justify-center rounded-lg text-sm font-semibold no-underline transition-all duration-150"
const linkStyle = { color: "#a8a8b0", padding: "0.5rem 1rem", background: "transparent", border: "none" }
const onEnter = e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#e3e3e8"; }

export default function Navbar( { page, setPage } ) {

  const onLeave = (key) => e => {
    if (page === key) return
    e.currentTarget.style.background = "transparent"
    e.currentTarget.style.color = "#a8a8b0"
  }

  return (
    <nav className="min-h-screen flex flex-col" style={{ width: "260px", flexShrink: 0, background: "#161618", borderRight: "1px solid #2e2e32" }}>

      {/* Logo */}
      <div className="flex flex-col items-center gap-1 px-4 cursor-pointer" style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }} onClick={()=>(setPage("home"))}>
          <img src="/HayDay_Logo.png" alt="HayDay Guide" style={{ width: "6.5rem", height: "5rem" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#fbe12f", fontFamily: "'Fredoka', sans-serif" }}>Guide Book</span>
      </div>

      {/* Divider */}
      <div className="mx-4 my-1 h-px" style={{ background: "#2e2e32" }} />

      {/* Links */}
      <div className="flex flex-col gap-1 px-3 pt-8">
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'home' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('home')} onClick={() => setPage('home')}>Home</button>
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'crops' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('crops')} onClick={() => setPage('crops')}>Crops</button>
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'plants' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('plants')} onClick={() => setPage('plants')}>Trees & Bushes</button>
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'production' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('production')} onClick={() => setPage('production')}>Production</button>
      </div>
    </nav>
  )
}
