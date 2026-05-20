import Crops from '../../data/Crops.json'
import SortableHeader from '../ui/SortableHeader'
import RankBadge from '../ui/RankBadge'
import { useTableSort } from '../../hooks/useTableSort'

const crops = Crops.map(c => ({
  ...c,
  cph: parseFloat((c.sell10 / (c.growMin / 60)).toFixed(1)),
}))

export default function CropsTable() {
  const { sortCol, sortDir, handleSort } = useTableSort('cph')
  const sorted = [...crops].sort((a, b) => sortDir * (b[sortCol] - a[sortCol]))

  return (
    <div>
    <h1 className="text-center text-3xl font-bold mb-8">Crops table</h1>
    <div style={{ width: "80%", margin: "0 auto", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid #2e2e32" }}>
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <th className="px-3 py-2 text-xs font-bold whitespace-nowrap" style={{ background: "#252529", color: "#a8a8b0" }}>Rank</th>
            <th className="px-3 py-2 text-xs font-bold whitespace-nowrap" style={{ background: "#252529", color: "#a8a8b0" }}>Crop</th>
            <SortableHeader key="level" title="Lvl" onClick={() => handleSort('level')} />
            <SortableHeader key="growTime" title="Grow Time" onClick={() => handleSort('growTime')} />
            <SortableHeader key="sell1" title="Sell ×1" onClick={() => handleSort('sell1')} />
            <SortableHeader key="sell10" title="Sell ×10" onClick={() => handleSort('sell10')} />
            <SortableHeader key="cph" title="Coins/Hour" onClick={() => handleSort('cph')} />
          </tr>
        </thead>

        <tbody>
          {sorted.map((crop, index) => (
            <tr key={crop.name} style={{ background: index % 2 === 0 ? "#1a1b1e" : "#1e1f23", color: "#e3e3e8" }}
              onMouseEnter={e => e.currentTarget.style.background = "#25262b"}
              onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? "#1a1b1e" : "#1e1f23"}>
              <td className="px-2 py-2" style={{ borderBottom: "1px solid #2e2e32", display: "flex", justifyContent: "center" }}><RankBadge rank={index + 1} /></td>
              <td className="px-2 py-2 text-center font-bold" style={{ borderBottom: "1px solid #2e2e32" }}>{crop.name}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{crop.level}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{crop.growMin}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{crop.sell1}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{crop.sell10}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{crop.cph}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
