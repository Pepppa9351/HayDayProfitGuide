export default function RankBadge({ rank }) {
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#35353a", color: "#a8a8b0" }}>
      {rank}
    </div>
  )
}
