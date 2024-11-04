import Link from "next/link"
import Image from "next/image"



export default function Section7 ()
{
    return <>
        <section className=" w-full h-[500px] bg-[#FFF] mt-[50px]  flex py-[40px] px-[145px] flex-col justify-center items-center " >
            <div className=" relative ">
                <img className="twoline2 absolute top-[-45px] right-[-2px] shrink-0 translate-x-[20px] " src="/Images/Group 48095808.png" alt="وصف الصورة" style={{ width: '36px', height: '33px' }} />
                <h1 className="text-[#333] text-5xl font-bold	 not-italic   " > رواد النجاح</h1>
            </div>

            <div className="divIcon flex justify-center  items-center gab-[24px] self-stretch	">
                <div className=" mr-[60px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                    <img src="/Images/a5.png" alt="" width={'110px'} height={'144px'} />
                </div>
                <div className=" mr-[60px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                    <img src="/Images/A4.png" alt="" width={'110px'} height={'144px'} />
                </div>
                <div className=" mr-[60px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                    <img src="/Images/A3.png" alt="" width={'110px'} height={'144px'} />
                </div>
                <div className=" mr-[60px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                    <img src="/Images/A.png" alt="" width={'110px'} height={'144px'} />
                </div>
                <div className=" mr-[60px] flex flex-col p-[16px] justify-center items-center gab-[10px] rounded-lg	bg-[#FFF] ">
                    <img src="/Images/A2.png" alt="" width={'110px'} height={'144px'} />
                </div>



            </div>
        </section>

    </>
}
