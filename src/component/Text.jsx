export default function TextBody({title, subtitle, course}) {
    return (
        <div className="mt-40 mb-20">
            <div className="flex justify-between items-center mx-auto max-w-[1260px]">
                <div className="flex flex-col text-right">
                    <span className="font-fontVazir text-gray-500 text-lg border-b-4 border-green-500 pb-2">{title}</span>
                    <h2 className="font-fontVazir text-black text-2xl mt-5">{subtitle}</h2>
                </div>
                <span className="font-fontVazir text-gray-500 text-lg self-baseline cursor-pointer">
                    {course}
                </span>
            </div>
        </div>
    );
}
