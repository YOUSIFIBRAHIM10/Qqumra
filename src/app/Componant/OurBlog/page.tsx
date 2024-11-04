import Link from "next/link"
import Image from "next/image"



export default function Section4 ()
{
    return <>

        <section className="flex py-[68px] px-[100px]  w-full  justify-center items-center bg-[#FFF] ">
            <div className="flex    w-[1164px] bg-[#FFF] justify-between items-center shrink-0 ">
                <div className=" flex   flex-col items-end gap-[16px] self-stretch mr-[100px]">
                    <img className="twoline2 shrink-0 translate-x-[20px] " src="/Images/Group 48095808.png" alt="وصف الصورة" style={{ width: '36px', height: '33px' }} />
                    <h1 className="text-[#333]  text-right  text-3xl font-bold not-italic " > <span className="text-[#229799] not-italic text-right text-3xl  font-bold	">صمم موقعك الألكتروني </span> بالحترافيه وجذب عملاءك من اللحظة الأولى</h1>
                    <div className="flex flex-col items-end gab-[12px] self-stretch">
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">تصميم واجهة جذابة وبسيطة تجعل التنقل سلسًا
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                        </p>
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">سرعة تحميل عالية ومُحسنة لضمان بقاء العملاء
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" /> 
                        </p>
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">الموقع يتكيف مع جميع الأجهزة
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                        </p>
                        <p className=" relative my-[12px] p-[12px] font-normal text-[#333] text-right text-[24px] not-italic leading-7 ">تصميم متوافق مع معايير محركات البحث
                            <img className=" absolute top-[20px] right-[-12px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                        </p>
                    </div>
                    <button className="but1   flex  h-[50px] py-4 px-6 justify-center items-center mt-[25px] gab-[14px] rounded-lg bg-[#229799]">
                        <span className="  text-[#FFF] text-right text-20px font-bold leading-normal ">انشئ متجرك الان</span>
                    </button>
                </div>
                <div className="what relative mr-[50px] w-[415px]  h-[290px] shrink-0">
                    <img className=" w-[480px]  h-[333.897px] shrink-0" src="/Images/lg.png" alt="000" />
                </div>
            </div>



        </section>

    </>
}