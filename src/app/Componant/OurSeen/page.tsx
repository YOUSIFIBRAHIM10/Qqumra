import Link from "next/link"
import Image from "next/image"



export default function Section9 ()
{
    return <>
        <section className=" relative flex justify-center items-center w-full shrink-0 bg-[#FFF] my-[100px]">
            <div className="flex  w-[1166px] h-[350px] shrink-0 rounded-[8px] border-[1px] border-[#229799] bg-[#F3FFFF]">
                <div className="flex justify-center items-center">
                    <img src="/Images/brain.png" alt="" width={'300px'} height={'100px'}/>
                </div>
                <div className="flex  my-[30px] ml-[50px] w-[670px] flex-col justify-end items-end gab-[24px]">
                    <p className="text-[#333] text-right text-[34px] pb-[24px] not-italic font-bold ">حول أفكارك إلى متجر إلكتروني ناجح في دقائق</p>
                    <p className="text-[#333] text-right text-[24px] mb-[24px] not-italic font-normal leading-9	">لا تدع الأفكار تبقى على الورق! ابدأ الآن في تحويل رؤيتك إلى واقع مع منصتنا المتكاملة لإنشاء المتاجر الإلكترونية</p>
                    <button className="but1   flex  h-[50px] py-4 px-6 justify-center items-center mt-[25px] gab-[14px] rounded-lg bg-[#229799]">
                        <span className="  text-[#FFF] text-right text-20px font-bold leading-normal "> ! ابدأ تجارتك الان</span>
                    </button>
                </div>
            </div>
        </section>

    </>
}
