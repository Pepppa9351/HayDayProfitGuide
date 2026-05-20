export default function RefBubble( { heading, image, reference} ) {

    return (
        <div>
            <div className="w-64 h-64 rounded-xl overflow-hidden cursor-pointer bg-[#252529] border border-[#2e2e32] border-4" onClick={() => setPage({reference})}>
                <img src={image} alt={heading} className="w-full h-full object-contain p-2" />
            </div>
            <p className="text-center text-white text-lg font-bold my-2">{heading}</p>
        </div>
    )
}