
import RefBubble from "../ui/RefBubble"
export default function Home( {setPage} ) {
    return (
        <div>
            {/* Logo */}
            <div className="flex flex-col items-center gap-1 px-4 mb-8">
                <img src={import.meta.env.BASE_URL + "HayDay_Logo.png"} alt="HayDay Guide" className="w-64 h-50" />
                <span className="text-xl font-bold tracking-widest uppercase" style={{ color: "#fbe12f", fontFamily: "'Fredoka', sans-serif" }}>Profit Guide</span>
            </div>
            <div className="text-center text-xl text-gray-400 mb-12">
                <p className="mb-4">Spreadsheets with detailed information on crops, trees, bushes, and Tom's requests.</p>
                <p className="mb-4">What should you grow, plant and request from Tom for the most profit?</p>
            </div>

            <div className="flex fit-content gap-12 justify-center">
                <RefBubble heading="Crops" image={import.meta.env.BASE_URL + "HayDay_Crop_Corn_4.png"} reference="crops" setPage={setPage} />
                <RefBubble heading="Trees & Bushes" image={import.meta.env.BASE_URL + "HayDay_Blueberry_Bush_Stage_02_03.png"} reference="plants" setPage={setPage} />
                <RefBubble heading="Tom Request Sheet" image={import.meta.env.BASE_URL + "HayDay_Tom_front.png"} reference="tom" setPage={setPage} />
            </div>
        </div>
    )
}
