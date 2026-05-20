import Plants from '../../data/Plants.json'
import SortableHeader from '../ui/SortableHeader'
import RankBadge from '../ui/RankBadge'
import { useTableSort } from '../../hooks/useTableSort'

export default function PlantsTable() {
  const { sortCol, sortDir, handleSort } = useTableSort('roi')
  const sorted = [...Plants].sort((a, b) => sortDir * (b[sortCol] - a[sortCol]))

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-8">Trees & Bushes table</h1>
      <div style={{ width: "80%", margin: "0 auto", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid #2e2e32"}}>
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <th className="px-3 py-2 text-xs font-bold whitespace-nowrap" style={{ background: "#252529", color: "#a8a8b0" }}>Rank</th>
            <th className="px-3 py-2 text-xs font-bold whitespace-nowrap" style={{ background: "#252529", color: "#a8a8b0" }}>Plant</th>
            <th className="px-3 py-2 text-xs font-bold whitespace-nowrap" style={{ background: "#252529", color: "#a8a8b0" }}>Type</th>
            <SortableHeader key="level" title="Lvl" onClick={() => handleSort('level')} />
            <SortableHeader key="cost" title="Cost" onClick={() => handleSort('cost')} />
            <SortableHeader key="harvestH" title="Harvest Time" onClick={() => handleSort('harvestH')} />
            <SortableHeader key="revenue" title="Revenue" onClick={() => handleSort('revenue')} />
            <SortableHeader key="netProfit" title="Net Profit" onClick={() => handleSort('netProfit')} />
            <SortableHeader key="roi" title="ROI %" onClick={() => handleSort('roi')} />
          </tr>
        </thead>

        <tbody>
          {sorted.map((plant, index) => (
            <tr key={plant.name} style={{ background: index % 2 === 0 ? "#1a1b1e" : "#1e1f23", color: "#e3e3e8" }}
              onMouseEnter={e => e.currentTarget.style.background = "#25262b"}
              onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? "#1a1b1e" : "#1e1f23"}>
              <td className="px-2 py-2" style={{ borderBottom: "1px solid #2e2e32", display: "flex", justifyContent: "center" }}><RankBadge rank={index + 1} /></td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.name}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.type}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.level}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.cost}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.harvestH}h</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.revenue}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.netProfit}</td>
              <td className="px-2 py-2 text-center" style={{ borderBottom: "1px solid #2e2e32" }}>{plant.roi}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
