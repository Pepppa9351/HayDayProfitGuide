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
          <h1 className="text-lg xl:text-3xl font-bold mb-2 mt-8">Trees & Bushes table</h1>
          <p className="text-xs xl:text-base text-gray-400 mb-4 xl:mb-10">What is worth planting for the most profit?</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={import.meta.env.BASE_URL + "HayDay_Raspberry.png"} alt="Raspberry" className="hidden xl:block w-46 h-46" />
        </div>
      </div>
      <div className="my-auto mx-auto w-full xl:w-[80%]">
        <p className="text-xs xl:text-sm ml-2 xl:ml-6 italic mb-2">*Click on any column header to sort that column*</p>
        <div className="rounded-xl overflow-x-auto border border-[#2e2e32]">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr>
                <th className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-3 xl:py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Rank</th>
                <th className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-3 xl:py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Plant</th>
                <th className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-3 xl:py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Type</th>
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
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 border-b border-[#2e2e32] flex justify-center"><RankBadge rank={index + 1} /></td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center font-bold border-b border-[#2e2e32]">{plant.name}</td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{plant.type}</td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{plant.level}</td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{plant.cost} <img src={import.meta.env.BASE_URL + "gold-coin.png"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{plant.harvestH} hours</td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{plant.revenue} <img src={import.meta.env.BASE_URL + "gold-coin.png"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{plant.netProfit} <img src={import.meta.env.BASE_URL + "gold-coin.png"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{plant.roi}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
              
        <div className="flex justify-center mt-24">
          <img src={import.meta.env.BASE_URL + "HayDay_SignChick.png"} alt="Sign Chick" className="w-46 46" />
        </div>

      </div>
    </div>
  )
}
