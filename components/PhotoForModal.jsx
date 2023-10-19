import Image from "next/image";
import XMark from "/public/icons/xmark.svg";

export default function PhotoForModal({onClose, photo}){
    return(
        <>
            <div className='p-[12px] md:p-[16px] w-fit h-fit flex flex-col gap-[12px] bg-white rounded-2xl overflow-auto'>
                <div className='flex w-full justify-between h-fit'>
                    <h1 className='text-[32px] font-[Raleway] font-semibold text-[#2B2E4A]'>Foto</h1>
                    <button className='group text-xl flex text-[20px] font-[nunito] h-full md:py-[8px] items-center my-auto gap-[6px] text-[#2B2E4A]' onClick={() => onClose()
                    }><XMark className='fill-[#2B2E4A] group-hover:fill-[#FF7068] w-[32px] h-[32px] transition'/></button>
                </div>
                <div className='bg-[#F2F2F2] h-[327px] w-[327px] sm:h-[400px] sm:w-[400px] rounded-lg flex justify-center items-center'>
                {photo.url === "" 
                ?
                    < p className='text-[16px]'>N / A</p>
                : 
                    <img src={photo.url} alt="New Pet Image" className="w-full h-full object-cover rounded-lg shadow-lg"/>
                }
                </div>
            </div>
        </>
    )
}