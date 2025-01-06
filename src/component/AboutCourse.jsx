export default function AboutCourse({title, subtitle}) {
    return(
        <div className="flex bg-white p-5 rounded-lg">
            <img src="/src/assets/react.svg" alt="" />
            <div className="px-3">
                <h3 className="font-fontVazir text-xl py-3">{title}</h3>
                <p className="font-fontVazir text-gray-500">{subtitle}</p>
            </div>
        </div>
    )
}