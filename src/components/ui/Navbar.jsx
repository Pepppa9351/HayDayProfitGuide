const linkClass = "flex items-center justify-center rounded-lg text-sm font-semibold no-underline transition-all duration-150"
const linkStyle = { color: "#a8a8b0", padding: "0.5rem 1rem", background: "transparent", border: "none" }
const onEnter = e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#e3e3e8"; }

export default function Navbar( { page, setPage, navOpen, setNavOpen } ) {

  const onLeave = (key) => e => {
    if (page === key) return
    e.currentTarget.style.background = "transparent"
    e.currentTarget.style.color = "#a8a8b0"
  }

  return (
    <nav className={`fixed top-0 left-0 h-[100dvh] z-40 overflow-hidden transition-all duration-300 ${navOpen ? 'w-full xl:w-[320px]' : 'w-0'}`}>
      <div className="w-[80vw] xl:w-[320px] h-[100dvh] flex flex-col bg-[#161618] border-r border-[#2e2e32]">

      {/* Logo */}
      <div className="flex flex-col items-center gap-1 px-4 pt-16 pb-8 cursor-pointer" onClick={() => { setPage("home"); setNavOpen(false); }}>
        <img src={import.meta.env.BASE_URL + "HayDay_Logo.png"} alt="HayDay Guide" className="w-[6.5rem] h-20" />
        <span className="text-xs font-bold tracking-widest uppercase text-[#fbe12f]" style={{ fontFamily: "'Fredoka', sans-serif" }}>Profit Guide</span>
      </div>

      {/* Divider */}
      <div className="mx-4 my-1 h-px bg-[#2e2e32]" />

      {/* Links */}
      <div className="flex flex-col gap-1 px-3 pt-8">
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'home' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('home')} onClick={() => { setPage('home'); setNavOpen(false) }}>Home</button>
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'crops' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('crops')} onClick={() => { setPage('crops'); setNavOpen(false) }}>Crops</button>
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'plants' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('plants')} onClick={() => { setPage('plants'); setNavOpen(false) }}>Trees & Bushes</button>
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'tom' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('tom')} onClick={() => { setPage('tom'); setNavOpen(false) }}>Tom Request Sheet</button>
      </div>

      <div className="flex flex-col mt-auto px-3 pb-8">
        <button className={linkClass} style={{ ...linkStyle, ...(page === 'legal' ? { background: "rgba(255,255,255,0.08)", color: "#e3e3e8" } : {}) }} onMouseEnter={onEnter} onMouseLeave={onLeave('legal')} onClick={() => { setPage('legal'); setNavOpen(false) }}>Legal Information</button>
      </div>
      </div>
    </nav>
  )
}
