export default function RefBubble( { heading, image, reference, setPage} ) {

    return (
        <div className="flex flex-col items-center">
            <div className="size-19 sm:size-46 rounded-xl overflow-hidden cursor-pointer bg-[#252529] border border-[#2e2e32] border-4" onClick={() => setPage(reference)}>
                <img src={image} alt={heading} className="w-full h-full object-contain p-2" />
            </div>
            <p className="text-center text-white text-xs md:text-lg font-bold my-2 text-center">{heading}</p>
        </div>
    )
}
