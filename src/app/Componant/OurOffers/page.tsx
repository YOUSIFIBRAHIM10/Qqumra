import Link from "next/link"
import Image from "next/image"



export default function OurOffers ()
{
    return <>
        <section className="  w-full h-[770px] shrink-0 bg-[#f6f6f6c9]">
            <div className="flex flex-col justify-center items-center gab-[8px]">
                <div className="pt-[37px] relative ">
                    <img className="twoline2 absolute top-[-4px] right-[-2px] shrink-0  " src="/Images/Group 48095808.png" alt="وصف الصورة" style={{ width: '36px', height: '33px' }} />
                    <h1 className="text-[#333] text-[38px] font-bold	 not-italic   " > <span className="text-[#229799]  text-[38px] not-italic font-bold text-right		">اختر خطتك</span>  وابدأ اليوم</h1>
                </div>
                    <div className="flex justify-between mt-[37px] py-[5px] px-[6px] h-[60px] items-center shrink-0 rounded-[150px] w-[300px] bg-[#EAEAEA]">
                        <button className="shraka  rounded-[170px]  flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px] bg-[#EAEAEA]">
                            <span className="  text-[#333] text-right text-[24px] font-bold leading-normal "> شراكة</span>
                        </button>
                        <button className="but1 rounded-[170px]  flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px]  bg-[#229799]">
                            <span className="  text-[#FFF] text-right text-[24px] font-bold leading-normal "> اشتراك</span>
                        </button>
                    </div>
            </div>
            <div className="flex items-center justify-center w-full h-[500] bg-[#f6f6f6c9]   mt-[40px]">
                <div className="   w-[1000px] justify-center flex   items-center shrink-0 self-stretch ">
                    <div className="frm bg-[#FFF] mr-[32px]  flex flex-col justify-center w-[400px]  h-[500px] items-center gab-[32px] shrink-0 self-stretch ">
                        <div className="inline-flex relative w-full m-[30px] pr-[20px] flex-col justify-center items-end gab-[12px] ">
                            <p className="text-[#333] mr-[22px] text-right text-[16px] not-italic font-bold ">خطة النمو</p>
                            <p className="text-[#333] mr-[22px] text-right text-[14px] not-italic font-normal	">ابدأ مشوار نجاحك بخطوات شهرية محسوبة</p>
                            <img className="shrink-0 absolute top-[1px] right-[16px]" src="/Images/point (2).png" alt="" width={'20px'} height={'20px'} />
                        </div>
                        <div  className="flex w-full h-[85px] py-[33px] px-[81px]  bg-[#22979921]   justify-center shrink-0 items-center gab-[10px]  ">
                            <p className="text-[#333] text-[18px] font-normal leading-5">جنيه مصري</p>
                            <p className="flex flex-col justify-center self-stretch	text-[#333]  text-right text-[36px] not-italic font-extrabold leading-5	">1000 </p>
                        </div>
                        <div className="flex flex-col gab-[8px] w-[280px] py-[50px] justify-center items-end">
                                <p className=" relative pb-[10px] leading-5 text-[#333] text-right text-[14px] not-italic  font-normal ">إمكانية رفع حتى 50 منتجًا لبدء متجرك الإلكتروني.
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                                <p className="relative pb-[10px]  leading-5 text-[#333] text-right text-[14px] not-italic  font-normal  ">الوصول إلى قوالب تصميم جذابة وسهلة الاستخدام
                                <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                                <p className=" relative pb-[10px]  leading-5 text-[#333] text-right text-[14px] not-italic  font-normal  ">دعم عدة خيارات للدفع لتسهيل المعاملات
                                <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                                <p className=" relative leading-5 text-[#333] text-right text-[14px] not-italic  font-normal ">مساعدة فورية من فريق الدعم 
                                <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                            </div>
                            <button className="but1   flex w-[180px] p-[10px]   h-[50px] justify-center items-center  gab-[14px] rounded-lg bg-[#229799]">
                            <span className="  text-[#FFF] text-right text-20px font-bold leading-normal "> ! اشترك الان</span>
                            </button>
                        </div>
                    <div className="frm bg-[#229799]  mr-[32px] flex flex-col justify-center w-[400px]  h-[500px] items-center gab-[32px] shrink-0 self-stretch ">
                            <div className="inline-flex  relative w-full m-[30px] pr-[20px] flex-col justify-center items-end gab-[12px] ">
                            <p className="text-[#FFF] mr-[22px] text-right text-[16px] not-italic font-bold ">الخطة الاحترافية</p>
                            <p className="text-[#FFF] mr-[22px] text-right text-[14px] not-italic font-normal	">ابدأ مشوار نجاحك بخطوات شهرية محسوبة</p>
                                <img className="shrink-0 absolute top-[1px] right-[16px]" src="/Images/point (2).png" alt="" width={'20px'} height={'20px'} />
                            </div>
                            <div className="flex w-full h-[85px] py-[33px] px-[81px]  bg-[#22979921]   justify-center shrink-0 items-center gab-[10px]  ">
                            <p className="text-[#FFF] text-[18px] font-normal leading-5">جنيه مصري</p>
                            <p className="flex flex-col justify-center self-stretch	text-[#FFF]  text-right text-[36px] not-italic font-extrabold leading-5	">800 </p>
                            </div>
                            <div className="flex flex-col gab-[8px] w-[280px] py-[50px] justify-center items-end">
                            <p className=" relative pb-[10px] leading-5 text-[#FFF] text-right text-[14px] not-italic  font-normal ">إمكانية رفع حتى 50 منتجًا لبدء متجرك الإلكتروني.
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                            <p className="relative pb-[10px]  leading-5 text-[#FFF] text-right text-[14px] not-italic  font-normal  ">الوصول إلى قوالب تصميم جذابة وسهلة الاستخدام
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                            <p className=" relative pb-[10px]  leading-5 text-[#FFF] text-right text-[14px] not-italic  font-normal  ">دعم عدة خيارات للدفع لتسهيل المعاملات
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                            <p className=" relative leading-5 text-[#FFF] text-right text-[14px] not-italic  font-normal ">مساعدة فورية من فريق الدعم
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                            </div>
                        <button className="butSpicail   flex w-[180px] p-[10px]   h-[50px] justify-center items-center  gab-[14px] rounded-lg bg-[#F7F7F8]">
                            <span className="  text-[#229799] text-right text-20px font-bold leading-normal "> ! اشترك الان</span>
                            </button>
                        </div>
                    <div className="frm bg-[#FFF] mr-[32px] flex flex-col justify-center w-[400px]  h-[500px] items-center gab-[32px] shrink-0 self-stretch ">
                            <div className="inline-flex relative w-full m-[30px] pr-[20px] flex-col justify-center items-end gab-[12px] ">
                                <p className="text-[#333] mr-[22px] text-right text-[16px] not-italic font-bold ">خطة البداية</p>
                                <p className="text-[#333] mr-[22px] text-right text-[14px] not-italic font-normal	">ابدأ مشوار نجاحك بخطوات شهرية محسوبة</p>
                                <img className="shrink-0 absolute top-[1px] right-[16px]" src="/Images/point (2).png" alt="" width={'20px'} height={'20px'} />
                            </div>
                            <div className="flex w-full h-[85px] py-[33px] px-[81px]  bg-[#22979921]   justify-center shrink-0 items-center gab-[10px]  ">
                                <p className="text-[#333] text-[18px] font-normal leading-5">جنيه مصري</p>
                                <p className="flex flex-col justify-center self-stretch	text-[#333]  text-right text-[36px] not-italic font-extrabold leading-5	">500 </p>
                            </div>
                            <div className="flex flex-col gab-[8px] w-[280px] py-[50px] justify-center items-end">
                                <p className=" relative pb-[10px] leading-5 text-[#333] text-right text-[14px] not-italic  font-normal ">إمكانية رفع حتى 50 منتجًا لبدء متجرك الإلكتروني.
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                                <p className="relative pb-[10px]  leading-5 text-[#333] text-right text-[14px] not-italic  font-normal  ">الوصول إلى قوالب تصميم جذابة وسهلة الاستخدام
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                                <p className=" relative pb-[10px]  leading-5 text-[#333] text-right text-[14px] not-italic  font-normal  ">دعم عدة خيارات للدفع لتسهيل المعاملات
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                                <p className=" relative leading-5 text-[#333] text-right text-[14px] not-italic  font-normal ">مساعدة فورية من فريق الدعم
                                    <img className=" absolute top-[3px] right-[-20px] w-[15px] h-[14px]" src="/Images/true.png" alt="" />
                                </p>
                            </div>
                            <button className="but1   flex w-[180px] p-[10px]   h-[50px] justify-center items-center  gab-[14px] rounded-lg bg-[#229799]">
                            <span className="  text-[#FFF] text-right text-20px font-bold leading-normal "> ! اشترك الان</span>
                            </button>
                        </div>
                </div>

            </div>
        </section>

    </>
}