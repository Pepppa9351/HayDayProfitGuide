import Plants from '../../data/Plants.json'
import SortableHeader from '../ui/SortableHeader'
import RankBadge from '../ui/RankBadge'
import { useTableSort } from '../../hooks/useTableSort'

export default function PlantsTable() {
  const { sortCol, sortDir, handleSort } = useTableSort('roi')
  const sorted = [...Plants].sort((a, b) => sortDir * (b[sortCol] - a[sortCol]))

  return (
    <div>
      <div className="flex items-center">
        <div className="flex-1" />
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold mb-2">Trees & Bushes table</h1>
          <p className="text-gray-400 mb-10">What is worth planting for the most profit?</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/HayDay_Raspberry.png" alt="Raspberry" className="w-46 h-46" />
        </div>
      </div>
      <div className="my-auto mx-auto w-[80%]">
        <p className="ml-6 italic mb-2">*Click on any column header to sort that column*</p>
        <div className="rounded-xl overflow-hidden border border-[#2e2e32]">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr>
                <th className="px-3 py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Rank</th>
                <th className="px-3 py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Plant</th>
                <th className="px-3 py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Type</th>
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
                  <td className="px-2 py-2 border-b border-[#2e2e32] flex justify-center"><RankBadge rank={index + 1} /></td>
                  <td className="px-2 py-2 text-center font-bold border-b border-[#2e2e32]">{plant.name}</td>
                  <td className="px-2 py-2 text-center border-b border-[#2e2e32]">{plant.type}</td>
                  <td className="px-2 py-2 text-center border-b border-[#2e2e32]">{plant.level}</td>
                  <td className="px-2 py-2 text-center border-b border-[#2e2e32]">{plant.cost} <img src="/gold-coin.png" alt="Coin" className="w-4 h-4 inline" /></td>
                  <td className="px-2 py-2 text-center border-b border-[#2e2e32]">{plant.harvestH} hours</td>
                  <td className="px-2 py-2 text-center border-b border-[#2e2e32]">{plant.revenue} <img src="/gold-coin.png" alt="Coin" className="w-4 h-4 inline" /></td>
                  <td className="px-2 py-2 text-center border-b border-[#2e2e32]">{plant.netProfit} <img src="/gold-coin.png" alt="Coin" className="w-4 h-4 inline" /></td>
                  <td className="px-2 py-2 text-center border-b border-[#2e2e32]">{plant.roi}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
              
        <div className="flex justify-center mt-24">
          <img src="/HayDay_SignChick.png" alt="Sign Chick" className="w-46 46" />
        </div>

      </div>
    </div>
  )
}
