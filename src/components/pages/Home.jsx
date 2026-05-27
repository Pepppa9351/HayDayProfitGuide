
import RefBubble from "../ui/RefBubble"
export default function Home( {setPage} ) {
    return (
        <div className="w-full">
            {/* Logo */}
            <div className="flex flex-col items-center gap-1 px-4 mb-6 md:mb-8">
                <img src={import.meta.env.BASE_URL + "HayDay_Logo.webp"} alt="HayDay Guide" className="w-40 h-32 md:w-64 md:h-50" />
                <span className="text-base md:text-xl font-bold tracking-widest uppercase" style={{ color: "#fbe12f", fontFamily: "'Fredoka', sans-serif" }}>Profit Guide</span>
            </div>
            <div className="text-center text-sm sm:text-xl text-gray-400 mb-8:mb-12 px-4">
                <p className="mb-4">Spreadsheets with detailed information on crops, trees, bushes, and Tom's requests.</p>
                <p className="mb-4">What should you grow, plant and request from Tom for the most profit?</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-12 w-full mt-15 sm:mt-30">
                <RefBubble heading="Crops" image={import.meta.env.BASE_URL + "HayDay_Crop_Corn_4.webp"} reference="crops" setPage={setPage} />
                <RefBubble heading="Trees & Bushes" image={import.meta.env.BASE_URL + "HayDay_Blueberry_Bush_Stage_02_03.webp"} reference="plants" setPage={setPage} />
                <RefBubble heading="Tom Request Sheet" image={import.meta.env.BASE_URL + "HayDay_Tom_front.webp"} reference="tom" setPage={setPage} />
            </div>
        </div>
    )
}
