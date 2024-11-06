import Link from "next/link"
import Image from "next/image"


export default function Hero ()
{
    return <>

        <section className="flex py-[68px] px-[100px] mt-[400px] w-full  justify-center items-center bg-[#F7F7F8] ">
            <div className="flex    w-[1164px] bg-[#F7F7F8] justify-between items-center shrink-0 ">
                <div className="what relative mr-[50px] w-[415px]  h-[290px] shrink-0">
                    <img className=" w-[415px]  h-[290px] shrink-0" src="/Images/what 1.png" alt="000" />
                    <div className="flex  absolute top-[57px] right-[-45px] mb-[5px] w-[136px] bg-[#FFF] h-[86px] flex-col justify-center items-center gab-[10px] shrink-0 rounded-lg border-[1px] border-[#DFDFDF] ">
                        <div className="flex mb-[6px] justify-center  items-end gab-[12px] self-stretch">
                            <p className="text-[#333] mr-[12px] text-right	text-[16px] not-italic font-bold	">مطور</p>
                            <img src="/Images/computer-businessman-icon 1.png" alt="" width={'22px'} height={'27px'} />
                        </div>
                        <div className="flex justify-center  items-end gab-[12px] self-stretch">

                            <p className="text-[#333] text-right	text-[16px] not-italic font-bold	">+2000</p>
                        </div>

                    </div>
                    <div className="flex  absolute bottom-[-17px] left-[-43px] mb-[5px] w-[136px] bg-[#FFF] h-[86px] flex-col justify-center items-center gab-[10px] shrink-0 rounded-lg border-[1px] border-[#DFDFDF] ">
                        <div className="flex justify-center mb-[6px]  items-end gab-[12px] self-stretch">

                            <img src="/Images/Avatar (1).png" alt="" width={'22px'} height={'27px'} />
                            <img src="/Images/Avatar (2).png" alt="" width={'22px'} height={'27px'} />
                            <img src="/Images/Avatar (3).png" alt="" width={'22px'} height={'27px'} />
                            <img src="/Images/Avatar.png" alt="" width={'22px'} height={'27px'} />
                        </div>
                        <div className="flex justify-center  items-end gab-[12px] self-stretch">

                            <p className="text-[#333] text-right	text-[16px] not-italic font-bold	">+400 اراء العملاء</p>
                        </div>

                    </div>
                </div>
                <div className="devoleb flex   flex-col items-end gap-[16px] self-stretch">
                    <img className="twoline2 shrink-0 translate-x-[20px] " src="/Images/Group 48095808.png" alt="وصف الصورة" style={{ width: '36px', height: '33px' }} />
                    <h1 className="text-[#333]  text-right  text-3xl font-bold " > <span className="text-[#229799] text-right text-3xl not-italic font-bold	">نحن هنا  </span> لنجعل احلامك التجاريه حقيقه  </h1>
                    <div className="flex flex-col items-end gab-[12px] self-stretch">
                        <p className="pborder my-[12px] p-[12px] text-[#333] text-right text-[16px] not-italic leading-7 ">نحن فريق من المبدعين والمهنيين المتخصصين في تصميم وتطوير المتاجر الإلكترونية، نهدف إلى تمكين رواد</p>
                        <p className="pborder my-[12px] p-[12px] text-[#333] text-right text-[16px] not-italic leading-7 ">نحن نقدم مجموعة شاملة من الخدمات التي تشمل تصميم المواقع، تحسين تجربة المستخدم، والتسويق الرقمي، مما يضمن لعملائنا الوصول إلى جمهور أوسع وزيادة مبيعاتهم.</p>
                        <p className="pborder my-[12px] p-[12px] text-[#333] text-right text-[16px] not-italic leading-7 ">بفضل خبرتنا الواسعة في هذا المجال، نعمل بتعاون وثيق مع كل عميل لفهم احتياجاته ورؤيته، مما يساعدنا على تقديم حلول مخصصة تلبي توقعاتهم وتساعدهم على النجاح في عالم التجارة الإلكترونية</p>
                    </div>
                    <button className="but1   flex  h-[50px] py-4 px-6 justify-center items-center mt-[25px] gab-[14px] rounded-lg bg-[#229799]">
                        <span className="  text-[#FFF] text-right text-20px font-bold leading-normal ">اكتشف المزيد</span>
                    </button>
                </div>
            </div>
        </section>

    </>
}
