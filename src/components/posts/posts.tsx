import { robotoMono } from '../text_blocks/text_blocks'

export default function Posts() {

    return (
        <ul className='flex flex-col items-start gap-[35px] z-10'>
            <li className='flex flex-col items-start z-10'>
                <h3 className='font-medium text-[22px] hover:text-[#4385d7] hover:underline cursor-pointer tracking-[0.9px] leading-[32px] text-start pb-[5px] max-[450px]:text-[18px] '>🙏 27 Principles for 27 Years</h3>
                <span className={`${robotoMono.variable} font-mono text-[17px] tracking-[0.9px] leading-[28.8px] text-[rgb(194,203,212)] mb-[10px] max-[450px]:text-[12px]`}>Jul 14, 2023 • 3 min • Life</span>
                <p className='text-start text-[rgb(173,180,187)] text-[17px] tracking-[0.9px] leading-[28.8px] max-[450px]:text-[14px] font-light'>
                    It’s that time of the year where I reflect on another trip around the sun. I’m turning 27 years old and unsurprisingly I don’t feel different than I did yesterday. But if I turn the clock back a year earlier, it does feel quite different now...
                </p>
            </li>
            <li className='flex flex-col items-start z-10'>
                <h3 className='font-medium text-[22px] hover:text-[#4385d7] hover:underline cursor-pointer tracking-[0.9px] leading-[32px] text-start pb-[5px] max-[450px]:text-[18px] '>🙏 27 Principles for 27 Years</h3>
                <span className={`${robotoMono.variable} font-mono text-[17px] tracking-[0.9px] leading-[28.8px] text-[rgb(194,203,212)] mb-[10px] max-[450px]:text-[12px]`}>Jul 14, 2023 • 3 min • Life</span>
                <p className='text-start text-[rgb(173,180,187)] text-[17px] tracking-[0.9px] leading-[28.8px] max-[450px]:text-[14px] font-light'>
                    It’s that time of the year where I reflect on another trip around the sun. I’m turning 27 years old and unsurprisingly I don’t feel different than I did yesterday. But if I turn the clock back a year earlier, it does feel quite different now...
                </p>
            </li>
            <li className='flex flex-col items-start z-10'>
                <h3 className='font-medium text-[22px] hover:text-[#4385d7] hover:underline cursor-pointer tracking-[0.9px] leading-[32px] text-start pb-[5px] max-[450px]:text-[18px] '>🙏 27 Principles for 27 Years</h3>
                <span className={`${robotoMono.variable} font-mono text-[17px] tracking-[0.9px] leading-[28.8px] text-[rgb(194,203,212)] mb-[10px] max-[450px]:text-[12px]`}>Jul 14, 2023 • 3 min • Life</span>
                <p className='text-start text-[rgb(173,180,187)] text-[17px] tracking-[0.9px] leading-[28.8px] max-[450px]:text-[14px] font-light'>
                    It’s that time of the year where I reflect on another trip around the sun. I’m turning 27 years old and unsurprisingly I don’t feel different than I did yesterday. But if I turn the clock back a year earlier, it does feel quite different now...
                </p>
            </li>
        </ul>
    )
}