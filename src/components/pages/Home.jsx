
import RefBubble from "../ui/RefBubble"
export default function Home( {setPage} ) {
    return (
        <div>
            <div className="flex fit-content gap-12 justify-center">
                <RefBubble heading="Crops" image="/HayDay_Corn.png" reference="crops" />
                <RefBubble heading="Trees & Bushes" image="/HayDay_Raspberry.png" reference="plants" />
                <RefBubble heading="Production" image="/HayDay_Factory.png" reference="production" />
            </div>
        </div>
    )
}
