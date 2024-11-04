import Link from "next/link"
import Image from "next/image"


export default function OurCustomrs ()
{
    return <>

        <section className="flex py-[68px] px-[100px] w-full  justify-center items-center bg-[#FFF]">
            <div className="flex    w-[1164px] bg-[#FFF] justify-between items-center shrink-0 ">
                <div className="what relative mr-[50px] w-[415px]  h-[290px] shrink-0">
                    <img className=" w-[415px]  h-[290px] shrink-0" src="/Images/social.png" alt="000" />
                </div>
                <div className=" flex   flex-col items-end gap-[16px] self-stretch">
                    <img className="twoline2 shrink-0 translate-x-[20px] " src="/Images/Group 48095808.png" alt="وصف الصورة" style={{ width: '36px', height: '33px' }} />
                    <h1 className="text-[#333]  text-right  text-3xl font-bold " > <span className="text-[#229799] text-right text-3xl not-italic font-bold	">انطلق بأعمالك</span> نحو النجاح مع استراتيجيات التسويق الرقمي الفعالة </h1>
                    <div className="flex flex-col items-end gab-[12px] self-stretch">
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">تحويل الزوار إلى عملاء باستخدام استراتيجيات ترويج مخصصة
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                        </p>
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">رفع مستوى الوعي بالعلامة التجارية من خلال إعلانات فعالة
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                        </p>
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">إمكانية تعديل الاستراتيجية التسويقية
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                        </p>
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">الوصول إلى الفئة المستهدفة بدقة
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                        </p>
                    </div>
                    <button className="but1   flex  h-[50px] py-4 px-6 justify-center items-center mt-[25px] gab-[14px] rounded-lg bg-[#229799]">
                        <span className="  text-[#FFF] text-right text-20px font-bold leading-normal "> ! ابدأ تجارتك الان</span>
                    </button>
                </div>
            </div>



        </section>

    </>
}
