import Link from "next/link"
import Image from "next/image"



export default function Start ()
{
    return <>
    
        <section className="bg-custom-bg w-full h-full shrink-0 ">

            <div className="flex p-[10px] flex-col justify-center items-center gap-x-4 self-stretch">
                <div className="flex w-[606px] flex-col items-center gap:var(--Border, 20px)">
                    <h1 className="text-[#229799] text-center text-5xl not-italic font-extrabold leading-custom py-[30px]">ابدء الآن بإنشاء موقعك الإلكتروني مع افضل منصة عربية </h1>
                    <p className="text-[black] text-center text[16px]  not-italic font-normal leading-[25px]">سهولة، سرعة، ومرونة كاملة لإنشاء موقعك الإلكتروني بدون أي معرفة برمجية</p>
                </div>
                <div className="relative ">
                <div className=" flex justify-between ">
                        <img className="shrink-0  mx-[250px] " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: ' var(--Border, 20px)', height: '29.965px' }} />
                        <img className="shrink-0 mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: ' var(--Border, 20px)', height: '29.965px' }} />
                </div>
                    <img className="shrink-0 absolute bottom-[20px] right-[30px] mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: '9px', height: '11.415px' }} />
                    <img className="shrink-0 absolute  bottom-[10px] left-[100px] mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: '10px', height: '11.965px' }} />
                    <img className="shrink-0 absolute top-[50px] right-[60px] mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: ' 9px', height: '11.965px' }} />
                    <img className="shrink-0 absolute bottom-[20px] right-[30px] mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: ' 9px', height: '11.965px' }} />
                    <img className="shrink-0 absolute bottom-[90px] left-[30px] mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: ' 9px', height: '11.965px' }} />
                    <img className="shrink-0 absolute top-[130px] left-[30px] mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: ' 9px', height: '11.965px' }} />
                    <img className="shrink-0 absolute top-[190px] right-[30px] mx-[250px]  " src="/Images/smpoks.png" alt="وصف الصورة" style={{ width: ' 9px', height: '11.965px' }} />
                </div>
                <button className="but1 flex  h-[50px] py-4 px-6 justify-center items-center mt-[25px] gab-[14px] rounded-lg bg-[#229799]">
                    <span className="  text-[#FFF] text-right text-20px font-bold leading-normal ">ابدأ بناء موقعك الان</span>
                </button> 
                <div className="flex mt-[40px] relative  justify-center items-center shrink-0  bg-[#FFF] w-[471.407px]  h-[243.528px] border-[#ECECEC] border-solid border-[4px] rounded-[14px]">
                    <img className="shrink-0 absolute right-0 " src="/Images/side.png" alt="" width={' 24.578px'} height={'239.082px'} />
                    <img className=" shrink-0 absolute right-[10px] top-[25px] border-4 rounded-lg border-[#ECECEC]  background: url('<path-to-image>') lightgray 50% / cover no-repeat " src="/Images/Screenshot 2024-10-07 170120 1.png" alt="" width={' 444px'} height={'200px'} />
                    <div className="inline-flex bottom-[-80px] right-[-70px] bg-[#FFF] absolute padding: var(--Spacing-space-6, 10px) items-center gap: var(--Spacing-space-6, 10px)   rounded border-[#24959735] border ">
                        <img className="p-[6px] " src="/Images/return.png" alt="" width={' 103px'} height={'168px'} />
                    </div>
                    <div className="inline-flex bottom-[-80px] left-[-70px] bg-[#FFF] absolute padding: var(--Spacing-space-6, 10px) items-center gap: var(--Spacing-space-6, 10px)   rounded border-[#24959735] border ">
                        <img className="p-[6px] " src="/Images/9990.png" alt="" width={' 109px'} height={'131px'} />
                </div>
                    </div>
                <div className="inline-flex items-center gab-[70px] absolute top-[789px] ">
                <div className="manPack flex mr-[80px]   items-center border-[1px] border-[#EEE] bg-[#FFF] ">
                    <div className="flex items-start gab-[24px] py-[10px] px[64px]">
                        <img className="stroke-[5px] stroke-[#249597]" src="/Images/man.png" alt="000" width={'58.182px'} height={'64px'} />
                        <div className="s3r flex flex-col  justify-center items-center gab-[8px]">
                            <p className="flex w-[112px] h-[38px] flex-col justify-center text-[black] text-center text-5xl not-italic font-bold  ">+2050</p>
                            <p className="user text-[#8C8C8C]  text-right text-3xl not-italic font-bold ">مستخدم</p>
                        </div>
                    </div>
                    </div>
                    
                <div className="manPack flex   items-center border-[1px] border-[#EEE] bg-[#FFF] ">
                    <div className="flex items-start gab-[24px] py-[10px] px[64px]">
                        <img className="stroke-[5px] stroke-[#249597]" src="/Images/online-shop-ecommerce 1.png" alt="000" width={'58.182px'} height={'64px'} />
                        <div className="s3r flex flex-col  justify-center items-center gab-[8px]">
                            <p className="flex w-[112px] h-[38px] flex-col justify-center text-[black] text-center text-5xl not-italic font-bold  ">+2050</p>
                                <p className="user text-[#8C8C8C]  text-right text-3xl not-italic font-bold ">متجر الكتروني</p>
                        </div>
                    </div>
                    </div>
                    
                <div className="manPack flex ml-[80px]   items-center border-[1px] border-[#EEE] bg-[#FFF] ">
                    <div className="flex items-start gab-[24px] py-[10px] px[64px]">
                        <img className="stroke-[5px] stroke-[#249597]" src="/Images/increase-graph-profit-icon 1.png" alt="000" width={'58.182px'} height={'64px'} />
                        <div className="s3r flex flex-col  justify-center items-center gab-[8px]">
                            <p className="flex w-[112px] h-[38px] flex-col justify-center text-[black] text-center text-5xl not-italic font-bold  ">+2050</p>
                                <p className="user text-[#8C8C8C]  text-right text-3xl not-italic font-bold ">مبيعات</p>
                        </div>
                    </div>
                </div>
                    </div>
            </div>
        </section>

    </>
}
