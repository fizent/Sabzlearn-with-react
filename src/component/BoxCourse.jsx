export default function BoxCourse({title, subject, teacher, acc, visit, price, img}) {
    return(
        <div className="bg-white rounded-lg border-b-2 cursor-pointer m-5 sm:m-0">
            <img src={img} alt={title} className="rounded-lg"/>      
            <h3 className="font-fontVazir text-lg px-5 py-3">{title}</h3>
            <p className="font-fontVazir px-5 py-3 text-gray-500">{subject}</p>
            <div className="flex justify-between px-5 py-3 border-b-2">
                <p className="font-fontVazir text-gray-500">{teacher}</p>
                <p className="font-fontVazir text-yellow-300">{acc}</p>
            </div>
            <div className="flex justify-between px-5 py-3">
                <div>
                    <p className="font-fontVazir text-gray-500">{visit}</p>
                </div>
                <div>
                    <span className="font-fontVazir text-green-500">{price}</span>
                </div>
            </div>
        </div>
    )
}
