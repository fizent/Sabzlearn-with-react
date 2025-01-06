import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function NavBar() {
    return(
        <header className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: 'url("/src/assets/hero-section.webp")'}}>
            <Router>  
                <nav className="flex justify-evenly">
                    <div>
                        <img src="../assets/react.svg" alt="" />
                        <ul className="flex">
                            <li className="m-5 font-fontVazir text-white text-lg">
                                <Link to="">دوره های اموزشی</Link>
                            </li>
                            <li className="m-5 font-fontVazir text-white text-lg">
                                <Link to="">همه دوره ها</Link>
                            </li>
                            <li className="m-5 font-fontVazir text-white text-lg">
                                <Link to="">مقالات</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="m-5 font-fontVazir text-white text-lg">من</button>
                        <button className="m-5 font-fontVazir text-white text-lg">شاپ</button>
                        <button className="m-5 font-fontVazir text-white text-lg">کیف</button>
                    </div>
                </nav>
                <div className="h-1/2 justify-center items-center flex flex-col">
                    <div className="">
                        <h1 className="font-fontVazir text-white text-center text-5xl pb-10"><span className="text-green-500">سبزلرن،</span> اولین گام برنامه‌نویس شدن</h1>
                        <p className="font-fontVazir text-white text-2xl pb-10">با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</p>

                    </div>

                    <div className="flex items-center justify-between gap-x-[50rem] p-1.5 sm:p-2 bg-white rounded-full border border-transparent">
                        <input type="text" className="flex-grow outline-none pr-2.5 bg-transparent text-gray-900 font-fontVazir text-sm md:text-base" placeholder="جستجو در بین گروه ها"/>
                        <button className="bg-green-500 p-3 rounded-[30px]">
                            <img src="/src/assets/icons8-suche-30.svg" alt="" />
                        </button>
                    </div>
                    <div className="flex justify-center gap-x-20 mt-10">
                        <div className="flex flex-col items-center w-40">
                            <img src="/src/assets/book-min.webp" className="mb-2.5" alt="" />
                            <h2 className="font-fontVazir text-lg text-white text-2xl whitespace-nowrap">1462 ساعت اموزش</h2>
                        </div>
                        <div className="flex flex-col items-center w-40">
                            <img src="/src/assets/clock-min.webp" className="mb-2.5" alt="" />
                            <h2 className="font-fontVazir text-lg text-white text-2xl whitespace-nowrap">77 دوره اموزشی</h2>
                        </div>
                        <div className="flex flex-col items-center w-40">
                            <img src="/src/assets/conversation-min.webp" className="mb-2.5" alt="" />
                            <h2 className="font-fontVazir text-lg text-white text-2xl whitespace-nowrap">165248 دانشجو</h2>
                        </div>
                    </div>
                </div>
            </Router>
        </header>
    )
}