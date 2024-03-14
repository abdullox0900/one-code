import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"
import Container from '../container/container'

export default function Footer() {

    type IconType = {
        id: number
        path: string
        icon: React.ReactElement
    }[]

    const socialMediaIcon: IconType = [
        {
            id: 1,
            path: '',
            icon: <FaGithub />,
        },
        {
            id: 2,
            path: '',
            icon: <FaLinkedin />,
        },
        {
            id: 3,
            path: '',
            icon: <FaTelegram />,
        },
        {
            id: 4,
            path: '',
            icon: <FaYoutube />,
        }
    ]

    return (
        <Container>
            <footer className='flex items-center justify-between py-[25px]'>
                <span className='text-[#3f3f3f] text-[16px] font-semibold'>© One Code</span>

                <ul className='flex items-center gap-[15px]'>
                    {
                        socialMediaIcon.map(item => {
                            return <li key={item.id}>
                                <a href={item.path} className='text-[22px] text-[#3f3f3f]'>
                                    {item.icon}
                                </a>
                            </li>
                        })
                    }

                </ul>
            </footer>
        </Container>
    )
}