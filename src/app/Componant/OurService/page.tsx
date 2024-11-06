import Link from "next/link"
import Image from "next/image"


export default function OurService ()
{
    return <>
        <section className="w-full flex py-[40px] px-[145px] flex-col justify-center items-center gab-[10px]  bg-[#F7F7F8]">
            <div className="w-full flex items-center justify-center h-[300px] shrink-0 bg-[#F7F7F8] ">
                <div className="flex w-full h-full flex-col justify-center items-center bg-[#F7F7F8] gab-[40px]">
                    <div className="flex pt-[60px] flex-col items-center gab-[8px]">
                        <div className="flex flex-col items-center gab-[8px]">
                            <div className="mb-[16px] relative ">
                                <img className="twoline2 absolute top-[-50px] right-[-2px] shrink-0 translate-x-[20px] " src="/Images/Group 48095808.png" alt="وصف الصورة" style={{ width: '36px', height: '33px' }} />
                                <h1 className="text-[#333] text-5xl font-bold	 not-italic   " > <span className="text-[#229799]  text-5xl not-italic font-bold		">انضم الى</span> مجتمع قمره</h1>
                            </div>
                            <div>
                                <p className="  font-normal text-[#333] text-center w-[350px]	 text-[20px] not-italic leading-7 ">تابعنا على وسائل التواصل الاجتماعي للبقاء على اطلاع بأحدث الأخبار والفعاليات</p>
                            </div>
                        </div>
                    </div>
                    <div className="divIcon flex justify-center  items-center gab-[24px] self-stretch	">
                        <div className="socialIconDiv mr-[24px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                            <img className="pb-[8px]" src="/Images/in.png" alt="" width={'82px'} height={'82px'} />
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[16px] not-italic font-bold	">لينكد ان</p>
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[14px] not-italic font-normal		">300 متابع</p>
                            <button className="but1   flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px] rounded-lg bg-[#229799]">
                                <span className="  text-[#FFF] text-right text-[14px] font-bold leading-normal "> ! انضم الينا </span>
                            </button>
                        </div>
                        <div className="socialIconDiv mr-[24px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                            <img className="pb-[8px]" src="/Images/telegram.png" alt="" width={'82px'} height={'82px'} />
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[16px] not-italic font-bold	">تيليجرام</p>
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[14px] not-italic font-normal		">300 متابع</p>
                            <button className="but1   flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px] rounded-lg bg-[#229799]">
                                <span className="  text-[#FFF] text-right text-[14px] font-bold leading-normal "> ! انضم الينا </span>
                            </button>
                        </div>
                        <div className="socialIconDiv mr-[24px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                            <img className="pb-[8px]" src="/Images/instagram.png" alt="" width={'82px'} height={'82px'} />
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[16px] not-italic font-bold	">انستجرام</p>
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[14px] not-italic font-normal		">300 متابع</p>
                            <button className="but1   flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px] rounded-lg bg-[#229799]">
                                <span className="  text-[#FFF] text-right text-[14px] font-bold leading-normal "> ! انضم الينا </span>
                            </button>
                        </div>
                        <div className="socialIconDiv mr-[24px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                            <img className="pb-[8px]" src="/Images/facebook.png" alt="" width={'82px'} height={'82px'} />
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[16px] not-italic font-bold	">فيسبوك</p>
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[14px] not-italic font-normal		">300 متابع</p>
                            <button className="but1   flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px] rounded-lg bg-[#229799]">
                                <span className="  text-[#FFF] text-right text-[14px] font-bold leading-normal "> ! انضم الينا </span>
                            </button>
                        </div>
                        <div className="socialIconDiv mr-[24px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                            <img className="pb-[8px]" src="/Images/discord.png" alt="" width={'82px'} height={'82px'} />
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[16px] not-italic font-bold	">ديسكورد</p>
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[14px] not-italic font-normal		">300 متابع</p>
                            <button className="but1   flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px] rounded-lg bg-[#229799]">
                                <span className="  text-[#FFF] text-right text-[14px] font-bold leading-normal "> ! انضم الينا </span>
                            </button>
                        </div>
                        <div className="socialIconDiv mr-[24px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                            <img className="pb-[8px]" src="/Images/watsapp.png" alt="" width={'82px'} height={'82px'} />
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[16px] not-italic font-bold	">قناه واتساب </p>
                            <p className="self-stretch pb-[8px] text-[#333] text-center	text-[14px] not-italic font-normal		">300 متابع</p>
                            <button className="but1   flex  h-[50px] py-[8px] px-[32px] justify-center items-center  gab-[8px] rounded-lg bg-[#229799]">
                                <span className="  text-[#FFF] text-right text-[14px] font-bold leading-normal "> ! انضم الينا </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
