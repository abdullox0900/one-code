import { Image } from "@nextui-org/react"
import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"
import Container from '../container/container'
import Posts from '../posts/posts'

export function GridBackgroundDemo() {
    return (
        <Container>
            <div className="min-h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
                <div className='flex absolute top-[100px] items-start max-[640px]:flex-col  max-[640px]:items-center' >
                    <div className='relative w-[145px] h-[145px] max-[640px]:mb-[25px]'>
                        <div style={{ backgroundImage: `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)` }} className='w-[143px] h-[143px] absolute top-0 left-0 z-[9] rounded-[50%]'></div>
                        <Image
                            width={142}
                            height={142}
                            style={{ border: '3px solid white' }}
                            className='w-[135px] h-[135px] absolute top-[4px] left-[4px] rounded-[50%] object-cover z-[10] max-[640px]:mb-[25px]'
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                    </div>
                    <div className='w-[550px] max-[720px]:w-[450px] max-[510px]:w-full'>
                        <h1 className="text-start text-[28px] ml-[35px] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-8 max-[640px]:ml-0 max-[640px]:text-center">
                            {"Hey, I'm Abdulloh. I'm a Frontend Developer and data security."}
                        </h1>
                        <ul className='flex item-items gap-[20px] ml-[35px] max-[640px]:ml-0 max-[510px]:flex-col'>
                            <li>
                                <a className='flex items-center gap-[10px] transition ease-in-out delay-800 hover:opacity-50' href="#">
                                    <FaGithub />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-[10px] transition ease-in-out delay-800 hover:text-[#00A0DC]' href="#">
                                    <FaLinkedin />
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-[10px] transition ease-in-out delay-800 hover:text-[#FF0000]' href="#">
                                    <FaYoutube />
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-[10px] transition ease-in-out delay-800 hover:text-[#229ED9]' href="#">
                                    <FaTelegram />
                                    Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-[45%] max-[720px]:mt-[400px] max-[640px]:mt-[600px] top-[45%] max-[510px]:mt-[650px] max-[340px]:mt-[690px]'>
                    <h4 className='text-start mb-[25px] text-[24px]'>Top Posts</h4>
                    <Posts />
                </div>
            </div>
        </Container>
    )
}