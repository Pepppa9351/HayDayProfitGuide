import { useState } from 'react'
import Tom from '../../data/Tom.json'
import SortableHeader from '../ui/SortableHeader'
import RankBadge from '../ui/RankBadge'
import { useTableSort } from '../../hooks/useTableSort'

export default function TomRequestTable() {
    const { sortCol, sortDir, handleSort } = useTableSort('sell10')
    const sorted = [...Tom].sort((a, b) => sortDir * (b[sortCol] - a[sortCol]))
    const [level, setLevel] = useState(207)

    return (
        <div>
            <div className="flex items-center mt-10">
                <div className="flex-1" />
                <div className="flex-1 text-center">
                    <h1 className="text-lg xl:text-3xl font-bold mb-2 whitespace-nowrap">Tom Request Sheet</h1>
                    <p className="text-xs xl:text-base text-gray-400 mb-4 xl:mb-10">What is the most expensive item you can request at your level?</p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={import.meta.env.BASE_URL + "HayDay_TinyTom.webp"} alt="Tiny Tom" className="hidden xl:block w-32 h-46" />
                </div>
            </div>

            <div className="flex justify-center mt-12 flex-col items-center">
                <p className="text-xs xl:text-sm text-gray-400 mb-2">Select your current level: {level}</p>
                <input type="range" min="1" max="207" value={level} onChange={e => setLevel(parseInt(e.target.value))} className="w-[80%] xl:w-[80%] mx-auto mb-4 appearance-none cursor-pointer [&::-webkit-slider-runnable-track]:bg-[#4a4a52] [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-[#6b6b75] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#a8a8b0] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#6b6b75] [&::-webkit-slider-thumb]:mt-[-4px] [&::-moz-range-track]:bg-[#4a4a52] [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:border [&::-moz-range-track]:border-[#6b6b75] [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#a8a8b0] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#6b6b75]" />    
            </div>
            <div className="my-auto mx-auto w-full xl:w-[80%]">
                <p className="text-xs xl:text-sm ml-2 xl:ml-6 italic mb-2">*Click on any column header to sort that column*</p>
                <div className="rounded-xl overflow-x-auto border border-[#2e2e32]">
                    <table className="w-full text-xs border-collapse">
                        <thead>
                            <tr>
                                <th className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-3 xl:py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Rank</th>
                                <th className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-3 xl:py-2 text-xs font-bold whitespace-nowrap bg-[#252529] text-[#a8a8b0]">Item</th>
                                <SortableHeader key="level" title="Lvl" onClick={() => handleSort('level')} />
                                <SortableHeader key="sell1" title="Sell ×1" onClick={() => handleSort('sell1')} />
                                <SortableHeader key="sell10" title="Sell ×10" onClick={() => handleSort('sell10')} />
                            </tr>
                        </thead>
                        <tbody>
                            {sorted.map((item, index) => (
                                item.level <= level && (<tr key={item.name} style={{ background: index % 2 === 0 ? "#1a1b1e" : "#1e1f23", color: "#e3e3e8" }}
                                    onMouseEnter={e => e.currentTarget.style.background = "#25262b"}
                                    onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? "#1a1b1e" : "#1e1f23"}>
                                    <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 border-b border-[#2e2e32] flex justify-center"><RankBadge rank={index + 1} /></td>
                                    <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center font-bold border-b border-[#2e2e32]">{item.name}</td>
                                    <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{item.level}</td>
                                    <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{item.sell1} <img src={import.meta.env.BASE_URL + "gold-coin.webp"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                                    <td className="px-0.5 py-0.5 md:px-1 md:py-1 xl:px-2 xl:py-2 text-center border-b border-[#2e2e32]">{item.sell10} <img src={import.meta.env.BASE_URL + "gold-coin.webp"} alt="Coin" className="w-3 h-3 md:w-4 md:h-4 inline" /></td>
                                </tr>)
                            ))}
                        </tbody>
                    </table>
                </div>

            <div className="flex justify-center mt-24">
                <img src={import.meta.env.BASE_URL + "HayDay_Tom_sleep.webp"} alt="Tom Sleeping" className="w-45 h-31 xl:w-60 xl:h-46" />
            </div>

            </div>
        </div>
    )
}
