import Link from "next/link"
import Image from "next/image"



export default function Footer ()
{
    return <>
        <section className="footerDiv relative w-full  flex justify-center items-center h-[400px] bg-[#249597]">
            <div className=" flex  w-[1115px] justify-between items-start">
                <div className="flex w-[250px] flex-col items-end  shrink-0 ">
                    <p className="self-stretch text-[#FFF] pb-[16px] text-right text-[24px] not-italic font-bold leading-normal">تواصل معنا</p>
                    <div className="flex flex-col justify-center items-center self-stretch"></div>
                    <div className="flex py-[12px]   bg-[#f3ffff54] mb-[12px] rounded-md   items-center justify-center gab-[10px] self-stretch ">
                        <div className="flex flex-col pr-[14px]">
                        <p className="text-[#FFF] text-right text-[16px] not-italic font-bold leading-normal">البريد الالكتروني</p>
                        <p className="text-[#FFF] text-right text-[14px] not-italic font-normal leading-normal"> mailinator@gmail.com</p>
                        </div>
                        <img src="/Images/bared.png" alt="" width={'32px'} height={'32px'} />
                    </div>
                    
                    <div className="flex py-[12px] pl-[53px]  bg-[#f3ffff54]  rounded-md   items-center justify-center  self-stretch ">
                        <div className="flex flex-col  pr-[14px]">
                            <p className="text-[#FFF] text-right text-[16px] not-italic font-bold leading-normal">خدمة العملاء </p>
                            <p className="text-[#FFF] text-right text-[14px] not-italic font-normal leading-normal"> شات مباشر</p>
                        </div>
                        <img src="/Images/chat-bubble-bottom-center-text_mini.png" alt="" width={'32px'} height={'32px'} />
                    </div>
                </div>
                <div className="flex w-[250px] flex-col items-end  shrink-0 ">
                    <p className="self-stretch text-[#FFF] pb-[16px] text-right text-[24px] not-italic font-bold leading-normal"> خدماتنا</p>
                    <div className="flex flex-col items-end py-[8px]">
                        <p className="text-[#FFF] py-[12px] text-right text-base not-italic font-normal leading-normal">إنشاء المتاجر الإلكترونية</p>
                        <p className="text-[#FFF] py-[12px] text-right text-base not-italic font-normal leading-normal">تصميم قوالب احترافية</p>
                        <p className="text-[#FFF] py-[12px] text-right text-base not-italic font-normal leading-normal">تحسين محركات البحث</p>
                        <p className="text-[#FFF] py-[12px] text-right text-base not-italic font-normal leading-normal">تسويق رقمي</p>
                    </div>
                </div>
                <div className="flex w-[250px] flex-col items-end  shrink-0 ">
                    <p className="self-stretch text-[#FFF] pb-[16px] text-right text-[24px] not-italic font-bold leading-normal"> روابط سريعة</p>
                    <div className="flex flex-col items-end py-[8px]">
                        <ul>
                            <li className="us text-[#FFF] py-[12px] text-right text-base not-italic font-normal leading-normal"><Link href={'/'}>  من نحن</Link></li>
                            <li className="us text-[#FFF] py-[12Px] text-right text-base not-italic font-normal leading-normal"><Link href={'/'} >  التصنيفات</Link></li>
                            <li className="  us text-[#FFF] py-[12Px] text-right text-base not-italic font-normal leading-normal"><Link href={'/'} > المدونة</Link></li>
                            <li className="us text-[#FFF] py-[12Px] text-right text-base not-italic font-normal leading-normal"><Link href={'/'} > الاسعار</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-[250px] flex-col items-end  shrink-0 ">
                        <img src="/Images/Qumrawhite.png" alt="" width={'127px'} height={'37px'} />
                    <div className="flex flex-col items-end py-[8px]">
                        <p className="text-[#FFF] py-[12px] text-right text-base not-italic font-normal leading-normal">   شركة متخصصة في تقديم خدمات إنشاء المتاجر الإلكترونية، وتستهدف رواد الأعمال وأصحاب المشاريع الصغيرة والمتوسطة.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center self-stretch"></div>
                    <div className="flex py-[12px]   bg-[#f3ffff54] mb-[12px] rounded-md   items-center justify-center gab-[10px] self-stretch ">
                        <img className="p-[6px]" src="/Images/googlPlay.png" alt="" width={'120px'}  height={'40px'} />
                            <img className="ml-[6px] p-[6px]" src="/Images/appStore.png" alt="" width={'120px'} height={'40px'} />
                    </div>
                </div>
            </div>
        </section>
        <div className="flex w-full px-[200px] justify-between items-center bg-[#249597]">
                <div className="flex justify-center items-center p-[16px]">
                <img className="flex p-[7px] justify-center items-center rounded-[30px] " src="/Images/book.png" alt="" width={'40px'} height={'40px'} />
                <img className="flex p-[7px] justify-center items-center rounded-[30px] " src="/Images/gram.png" alt="" width={'40px'} height={'40px'} />
                <img className="flex p-[7px] justify-center items-center rounded-[30px] " src="/Images/x.png" alt="" width={'40px'} height={'40px'} />
                <img className="flex p-[7px] justify-center items-center rounded-[30px] " src="/Images/app.png" alt="" width={'40px'} height={'40px'} />
            </div>
            <p className="text-[#FFF] text-right text-[16px] font-normal not-italic leading-normal">جميع الحقوق محفوظة © 2024 شركة قمرة</p>
            </div>

    </>
}
