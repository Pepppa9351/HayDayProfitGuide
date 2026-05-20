export default function SortableHeader({ title, onClick }) {
  return (
    <th
      onClick={onClick}
      className="px-3 py-2 text-xs font-bold cursor-pointer select-none whitespace-nowrap bg-[#252529] text-[#a8a8b0]"
      onMouseEnter={e => e.currentTarget.style.background = "#2e2e33"}
      onMouseLeave={e => e.currentTarget.style.background = "#252529"}
    >
      {title} <span className="text-[0.6rem] opacity-50">↕</span>
    </th>
  )
}
