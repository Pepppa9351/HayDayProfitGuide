export default function SortableHeader({ title, onClick }) {
  return (
    <th
      onClick={onClick}
      className="px-3 py-2 text-xs font-bold cursor-pointer select-none whitespace-nowrap"
      style={{ background: "#252529", color: "#a8a8b0" }}
      onMouseEnter={e => e.currentTarget.style.background = "#2e2e33"}
      onMouseLeave={e => e.currentTarget.style.background = "#252529"}
    >
      {title} <span style={{ fontSize: "0.6rem", opacity: 0.5 }}>↕</span>
    </th>
  )
}
