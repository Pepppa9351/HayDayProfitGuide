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
      <div className="flex items-center mt-10">
        <div className="flex-1"/>
        <div className="flex-1 text-center">
          <h1 className="text-lg xl:text-3xl font-bold mb-2">Crops table</h1>
          <p className="text-xs xl:text-base text-gray-400 mb-4 xl:mb-10">What is worth growing for profit the most?</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={import.meta.env.BASE_URL + "Crop_Crate.png"} alt="Crop Crate" className="hidden xl:block w-46 h-46" />
        </div>
      </div>
      <div className="my-auto mx-auto w-full xl:w-[80%]">
        <p className="text-xs xl:text-sm ml-2 xl:ml-6 italic mb-2">*Click on any column header to sort that column*</p>
        <div className="rounded-xl overflow-x-auto border border-[#2e2e32]">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr>
                <th className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-3 xl:py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Rank</th>
                <th className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-3 xl:py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Crop</th>
                <SortableHeader key="level" title="Lvl" onClick={() => handleSort('level')} />
                <SortableHeader key="growTime" title="Grow Time" onClick={() => handleSort('growMin')} />
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
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 border-b border-[#2e2e32] flex justify-center"><RankBadge rank={index + 1} /></td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center font-bold border-b border-[#2e2e32]">{crop.name}</td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{crop.level}</td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{crop.growMin} minutes</td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{crop.sell1} <img src={import.meta.env.BASE_URL + "gold-coin.png"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{crop.sell10} <img src={import.meta.env.BASE_URL + "gold-coin.png"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                  <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{crop.cph} <img src={import.meta.env.BASE_URL + "gold-coin.png"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-center mt-24">
          <img src={import.meta.env.BASE_URL + "HayDay_Chicken_Haystack.png"} alt="Chicken Haystack" className="w-57 h-32 xl:w-74 xl:h-46" />
        </div>

      </div>
    </div>
  )
}
