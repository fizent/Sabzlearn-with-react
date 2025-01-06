export default function Footer() {
    return(
        <footer className="bg-white">
            <div className="flex justify-between mx-auto max-w-[1260px]">
                <div className="border-1">
                    <div className="flex">
                        <img className="w-20" src="/src/assets/logo sabz.png" alt="" />
                        <h3 className="font-fontVazir text-4xl text-green-500 px-5">سبزلرن</h3>
                    </div>
                </div>
                <div className="flex"> 
                    <img src="/src/assets/icons8-telegramm-app.svg" alt="" />
                    <img src="/src/assets/icons8-instagram.svg" alt="" />
                    <img src="/src/assets/icons8-linkedin.svg" alt="" />
                </div>
            </div>
            <div className="flex justify-between mx-auto max-w-[1260px]">
                <div className="flex flex-col">
                    <h3>درباره سبزلرن</h3>
                    <p>شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و بدون استرس میتونی از مسیر لذت ببری.</p>
                </div>
                <div className="flex flex-col">
                    <h3>دوره های پرطرفدار</h3>
                    <ul>
                        <li>آموزش پایتون</li>
                        <li>آموزش Html</li>
                        <li>آموزش Css</li>
                        <li>پروژه های خلاقانه با Html و Css</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3>دسترسی سریع</h3>
                    <ul>
                        <li>قوانین و مقررات</li>
                        <li>ارسال تیکت</li>
                        <li>همه دوره ها</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}