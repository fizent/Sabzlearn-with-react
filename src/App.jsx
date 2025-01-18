import './App.css'
import NavBar from './component/NavBar'
import TextBody from './component/text'
import BoxCourse from './component/BoxCourse'
import GradientBox from './component/GradianCourse'
import AboutCourse from './component/AboutCourse'
import AboutText from './component/AboutText'
import Footer from './component/Footer'
import { useState } from 'react'
function App() {
  const courses = [
    {
        id: 1,
        title: "آموزش جامع PHP از صفر + پروژه محور",
        subject: "دوره آموزش PHP یک برنامه جامع و کاربردیست و برای افرادی طراحی شده که میخواهند مهارت‌های خود را در",
        acc: 5.0,
        visit: 4000,
        price: "500.000 تومان",
        img: "/src/assets/CourseImage/php-ex-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 2,
        title: "آموزش پروژه محور NestJS از صفر!",
        subject: "NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر Node.js",
        acc: 4.0,
        visit: 2012,
        price: "300.000 تومان",
        img: "/src/assets/CourseImage/Course-thumbnail-Algorithm-1-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 3,
        title: "آموزش پروژه محور فریمورک Fastify",
        subject: "Fastify یه فریمورک وب سریع و کم‌ حجم برای ساخت برنامه‌های تحت وب با Node.js هست.Fastify یکی از",
        acc: 3.0,
        visit: 654,
        price: "400.000 تومان",
        img: "/src/assets/CourseImage/English22-1-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 4,
        title: "نمایش نقشه‌های تعاملی با Leaflet.js",
        subject: "دوره Leaflet.JS به شما یاد می‌دهد چگونه نقشه‌های تعاملی سبک و جذاب بسازید. این دوره پروژه‌محور است و",
        acc: 3.0,
        visit: 8754,
        price: "600.000 تومان",
        img: "/src/assets/CourseImage/ezgif.com-jpg-to-webp-converted-17-1-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 5,
        title: "آموزش جامع api نویسی با PHP",
        subject: "API یکی از پر کاربردترین اجزای نرم افزاریه که حتما باید بلد باشی! توی این دوره قراره api نویسی رو…",
        acc: 3.0,
        visit: 5498,
        price: "800.000 تومان",
        img: "/src/assets/CourseImage/ezgif.com-jpg-to-webp-converted-32-1-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 6,
        title: "آموزش جاوا اسکریپت مقدماتی تا پیشرفته + مینی پروژه",
        subject: "عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…",
        acc: 5.0,
        visit: 546,
        price: "900.000 تومان",
        img: "/src/assets/CourseImage/IMAGE-1402-12-24-13_42_44-1-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 7,
        title: "آموزش الگوریتم و ساختمان داده به زبان ساده",
        subject: "آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی دارند مناسب می باشد . خصوصا برای…",
        acc: 5.0,
        visit: 6891,
        price: "900.00 تومان",
        img: "/src/assets/CourseImage/IMAGE-1403-02-20-17_14_44_11zon-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 8,
        title: "آموزش کاربردی Bash Script",
        subject: "ساختمان داده و الگوریتم، یک مهارت ضروری برای ورود به دنیای برنامه نویسیه که دیدگاه شما رو به مسائل مختلف…",
        acc: 3.0,
        visit: 8754,
        price: "رایگان",
        img: "/src/assets/CourseImage/IMAGE-1403-02-20-17_59_09_11zon-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 9,
        title: "مینی پروژه های تخصصی با Html، Css + دیزاین اختصاصی",
        subject: "عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…",
        acc: 5.0,
        visit: 9887,
        price: "900.000 تومان",
        img: "/src/assets/CourseImage/js22-min-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 10,
        title: "آموزش جامع زبان انگلیسی",
        subject: "اگر به‌عنوان یک برنامه‌نویس از اجرای دستورات تکراری برای تست برنامه‌های خود خسته شده‌اید، وقت آن رسیده که اسکریپت نویسی…",
        acc: 5.0,
        visit: 987,
        price: "رایگان",
        img: "/src/assets/CourseImage/Leaf-1-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 11,
        title: "تجربیات طلایی من در کار تیمی",
        subject: "در ساده ترین حالت شما اگه تو یک شرکت برنامه نویسی استخدام بشین، وارد تیم اون شرکت میشین و باید…",
        acc: 5.0,
        visit: 65496,
        price: "440.000 تومان",
        img: "/src/assets/CourseImage/php-ex-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
    {
        id: 12,
        title: "بازی سازی تحت وب با JS",
        subject: "دوره بازی‌سازی با جاوااسکریپت در سبزلرن به شما ساخت بازی‌های آنلاین را با استفاده از CSS، HTML و JavaScript آموزش…",
        acc: 5.0,
        visit: 990,
        price: "رایگان",
        img: "/src/assets/CourseImage/game-js-1-768x432.webp",
        teacher: "محمد فاضل زارع",
    },
];



const AboutSabzlearn = [
  {
    id: 1,
    topic: "آموزش برنامه نویسی رایگان",
    description:
      "سبزلرن اعتقاد داره ورود هر علاقه مندی به دنیای آموزش کدنویسی باید بدون ریسک باشه و هیچ دغدغه ای جز تمرکز روی یادگیری در ذهن اون فرد نباشه. به همین دلیل می بینید که در طرح آموزش برنامه نویسی رایگان سبزلرن، تمام زبان ها و تکنولوژی های اصلی مثل جاوا اسکریپت، پایتون، CSS ، HTML و چندین دوره دیگه به صورت رایگان و همراه با پشتیبانی مادام العمر آموزش داده میشه که همه اونها در دسته آموزش صفر تا صد برنامه نویسی هم هستن و برخلاف دیگران، به بهانه رایگان بودن چیزی از کیفیت و حجم محتوای دوره ها کم نشده!",
  },
  {
    id: 2,
    topic: "آموزش کدنویسی بدون ریسک",
    description:
      "با توجه به مورد قبلی، کاملا واضحه که نگرش سبزلرن، دریافت هزینه آموزش برنامه نویسی از کسانی هست که مسیر قطعی خودشون رو پیدا کردن و قصد توسعه مهارت ها و تکنیک های خودشون رو دارن نه همه! دومین نکته اینه که شما با گذروندن یا دیدن چند جلسه از دوره های رایگان با سبک و کیفیت محتوای دوره برنامه نویسی سبزلرن آشنا میشید و به این ترتیب ریسک شما برای پرداخت هزینه آموزش های بعدی صفر خواهد بود.",
  },
  {
    id: 3,
    topic: "آموزش صفر تا صد برنامه نویسی واقعی!",
    description:
      "همونطور که میدونید سرفصل های هر تخصص برنامه نویسی به صورت بین المللی تدوین شده اما گاهی برای ایرانی ها به دلیل محدودیت ها و مسائل تکنیکی کدنویسی، این سرفصل ها باید بومی سازی شده و با مثال ها و پروژه های ایرانی تدریس بشن تا دانشجو در فضای بازار کار قرار بگیره. فرآیند بومی سازی هم نیاز به مطالعه و تسلط خیلی زیادی داره که در عین حفظ ساختار کامل دوره برنامه نویسی، اون رو به محتوایی منطبق بر نیاز دانشجوهای ایرانی، روان‌تر و عملی‌تر تبدیل کنه. بنابراین در سبزلرن قرار نیست کتابی و خشک این مهارت جذاب رو یاد بگیرید.",
  },
  {
    id: 4,
    topic: "دوره برنامه نویسی با تضمین نقد",
    description:
      "ضمانت ها معمولا بعد از فروش ارائه میشن اما سبزلرن به عنوان ضمانت پیش‌دستانه، 20 الی 40 درصد همه دوره های پولی رو هم به رایگان در اختیار علاقه‌مندان گذاشته تا دیگه هیچ حرف و حدیث و اصطلاحا هندونه دربسته‌ای در کار نباشه و خیلی راحت تصمیمشون برای انتخاب بهترین منبع آموزش برنامه نویسی رو بگیرن.",
  },
  {
    id: 5,
    topic: "آموزش برنامه نویسی از صفر با همراهی پشتیبان مسلط",
    description:
      "نکته مهم بعدی اینه که سبزلرن اعتقاد داره ارائه آموزش برنامه نویسی به تنهایی، لزوما به معنی تربیت یک برنامه نویس حرفه ای نیست و حتما نیاز داره که پشتیبانان فنی مسلط و آشنا به شرایط بازار کار هر رشته قدم به قدم در کنار دانشجو باشن تا از لحظه شروع دوره برنامه نویسی تا تدوین رزومه، جلسه مصاحبه استخدام و چالش های بعد از استخدام همراهی لازم و دلسوزانه رو داشته باشن.",
  },
  {
    id: 6,
    topic: "یادگیری برنامه نویسی با چشم باز",
    description:
      "آخرین نکته هم توصیه ما به مطالعه کامنت دانشجوهای قبلی سبزلرن هست که در صفحه هر دوره آموزش برنامه نویسی میتونید مطالعه کنید و بر اساس برآیند کلی نظرات، درصد رضایت رو محاسبه کنید.",
  },
];




const CoursePopular = courses.slice(0, 4);

const [ShowMore, setShowMore] = useState(false)

const LimitedShowText = ShowMore ? AboutSabzlearn : AboutSabzlearn.slice(0, 2)

return (
  <div>
    <NavBar />
    <section>
      <TextBody 
        title="آخـــرین دوره های ما" 
        subtitle="سکوی پرتاپ شما به سمت موفقیت" 
        course="دوره ها"
      />
      <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 mx-auto max-w-[1260px]">
        {courses.map(course => (
          <BoxCourse 
            key={course.id}
            title={course.title}
            subject={course.subject}
            acc={course.acc}
            visit={course.visit}
            price={course.price}
            img={course.img}
            teacher={course.teacher}
          />
      ))}

      </div>
    </section>
    

    <section>
      <TextBody 
        title="نقشه راه" 
        subtitle="نقشه های راه برای شروع اصولی یادگیری" 
      />
      <div className="grid grid-rows-1 justify-center sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 mx-auto max-w-[1260px]">
        <GradientBox 
          gradientColors="to left, #ff6347, #feb47b" 
          text="فرانت اند" 
          subtitle="30 دوره"
        />
        <GradientBox 
          gradientColors="to left, #00ff7f, #00bfff" 
          text="امنیت" 
          subtitle="9 دوره"
        />
        <GradientBox 
          gradientColors="to left, #800080, rgb(0, 125, 228), #00bfff" 
          text="پایتون" 
          subtitle="6 دوره"
        />
        <GradientBox 
          gradientColors="to left, rgb(90, 0, 90), rgb(179, 0, 110), rgb(255, 107, 235)" 
          text="مهارت نرم افزار" 
          subtitle="7 دوره"
        />
      </div>
    </section>

    <section>
      <TextBody
        title="پرطرفدار ترین دوره ها"
        subtitle="دوره های محبوب و پروژه محور سبزلرن"
      />
      <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 mx-auto max-w-[1260px]">
        {CoursePopular.map(course => (
          <BoxCourse 
            key={course.id}
            title={course.title}
            subject={course.subject}
            acc={course.acc}
            visit={course.visit}
            price={course.price}
            img={course.img}
            teacher={course.teacher}
          />
      ))}
      </div>
    </section>



    <section className="mx-auto max-w-[1260px]">
      <TextBody
        title="مــا چه کمکی میتونیم بهت بکنیم"
        subtitle="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
      />

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <AboutCourse
            title="تضمین کاملترین محتوا"
            subtitle="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."
          />
          <AboutCourse
            title="پروژه محور در راستای بازار کار"
            subtitle="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
          />
        </div>
        <div className="flex flex-col gap-6">
          <AboutCourse
            title="پشتیبانی دائمی"
            subtitle="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
          />
          <AboutCourse
            title="سراغ حرفه ای ها رفتیم"
            subtitle="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
          />
        </div>
      </div>
    </section>


    
    <section>
      <TextBody 
        title="محبوب ترین دوره ها" 
        subtitle="پرمخاطب ترین دوره های رایگان سبزلرن" 
        course="دوره ها"
      />
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 mx-auto max-w-[1260px]">
        {courses.filter((course) => course.price === "رایگان").map((course)=> (
          <BoxCourse 
            key={course.id}
            title={course.title}
            subject={course.subject}
            acc={course.acc}
            visit={course.visit}
            price={course.price}
            img={course.img}
            teacher={course.teacher}
          />        
        ))}
      </div>
    </section>

    <section className="m-5 sm:mx-auto max-w-[1260px] mt-40 mb-20">
      <div>
        <h2 className="font-fontVazir text-3xl py-3 sm:text-4xl">با دوره‌های <span className="text-green-500">سبزلرن</span> برنامه‌نویس حرفه‌ای شوید!</h2>
        <p className="font-fontVazir text-gray-500">اگر در ابتدای مسیر یادگیری برنامه‌نویسی قرار دارید یا بعد از چند سال فعالیت حرفه‌ای به‌عنوان برنامه‌نویس به‌دنبال فتح قله‌های جدید در این حوزه هستید، دوره‌های سبزلرن شما را به هدفتان می‌رسانند. در این آکادمی همه چیز برای یادگیری برنامه‌نویسی از صفر یا دریافت آموزش‌های تکمیلی برای تبدیل شدن به یک برنامه‌نویس کاربلد مهیا است. در سبزلرن دوره‌های آموزشی متنوع با کمترین هزینه و پشتیبانی مستمر آماده شده تا بدون نیاز به کتاب یا دوره دیگر، بتوانید صفر تا صد برنامه‌نویسی را یاد بگیرید. تجربه‌های دانشجویان قبلی نشان می‌دهد که سبک تدریس اساتید مجرب سبزلرن نه تنها آموزش‌های استاندارد را با پروژه‌های واقعی ترکیب می‌کند، بلکه به دانشجویان انگیزه و اعتمادبه‌نفس لازم برای ادامه مسیر برنامه‌نویسی را می‌دهد. سبزلرن با تمرکز بر آموزش‌های منطبق با نیازهای بازار کار ایران و استفاده از روش‌های تدریس بومی‌سازی‌شده، تضمین می‌کند که نه تنها مطالب به‌روز و حرفه‌ای را یاد بگیرید، بلکه با آمادگی کامل وارد بازار کار شوید.</p>
      </div>
      {LimitedShowText.map((About)=> (
        <AboutText 
          key={About.id}
          topic={`${About.id}. ${About.topic}`}
          description={About.description}
        />
      ))}
      <div className="flex justify-center px-4 py-2">
          <button className="font-fontVazir text-green-500 rounded-lg border-2 border-green-500 px-4 py-2" onClick={() => setShowMore(!ShowMore)}>{!ShowMore ? "مشاهده بیشتر" : "مشاهده کمتر"}</button>
      </div>
    </section>


    <Footer></Footer>
  </div>
  )
}


export default App
