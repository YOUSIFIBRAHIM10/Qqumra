import Link from "next/link"
import Image from "next/image"



export default function Headers ()
{
    return <>
        <section className="flex   w-full h-full flex-col items-start shrink-0 gap-[var(--Spacing-space-6,10px)] bg-[#FFF]  " >
            <div className="divHed  flex w-full justify-between items-center px-[25px] py-[15px] ">
                <div className="flex items-center gab-[12px] ml-[90px]">
                    <button className="but1 flex  h-[50px] py-4 px-6 justify-center items-center gab-[14px] rounded-lg bg-[#229799]">
                        <span className="  text-[#FFF] text-right text-20px font-bold leading-normal ">انشئ متجرك الان</span>
                    </button>
                    <button className="but2 flex ml-[12px]  h-[50px] py-4 px-6 justify-center items-center gab-[14px] rounded-lg border-2 border-solid border-[#249597]">
                        <span className="text-[#229799] text-right text-20px font-bold leading-normal ">تسجيل الدخول</span>
                    </button>
                </div>
                <div className=" dev2 flex  items-end gab-[32px] ">
                    <ul className="flex ">
                        <li className="text-black text-right text-[20px] not-italic font-bold leading-normal ml-[32px]  border-2 border-solid border-[#249597] p-[4px] "><Link href={'/'}></Link>تواصل معنا</li>
                        <li className="text-black text-right text-[20px] not-italic font-bold leading-normal ml-[32px]   border-2 border-solid border-[#249597] p-[4px] "><Link href={'/'}></Link>الاسعار</li>
                        <li className="text-black text-right text-[20px] not-italic font-bold leading-normal ml-[32px]   border-2 border-solid border-[#249597] p-[4px] "><Link href={'/'}></Link>المدونة</li>
                        <li className="text-black text-right text-[20px] not-italic font-bold leading-normal ml-[32px]   border-2 border-solid border-[#249597] p-[4px] "><Link href={'/'}></Link>من نحن</li>
                        <li className="text-[#229799] text-right text-[20px] not-italic font-bold leading-normal ml-[32px]   border-2 border-solid border-[#249597] p-[4px] "><Link href={'/'}></Link>الرئيسية</li>
                        <img className="twoline shrink-0 " src="/Images/Group 48095808.png" alt="وصف الصورة" style={{ width: '13px', height: '12.5px' }} />
                    </ul>
                </div>
                <div className="mr-[100px]">
                    <img className="shrink-0" src="/Images/QUMRA-one-color-logo 2.jpg" alt="وصف الصورة" style={{ width: '111px', height: '33px' }} />
                </div>
            </div>
        </section>

    </>
}
