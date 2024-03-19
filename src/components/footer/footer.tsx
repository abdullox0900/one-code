import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"
import Container from "../container/container"

export default function Footer() {
  type IconType = {
    id: number
    path: string
    icon: React.ReactElement
  }[]

  const socialMediaIcon: IconType = [
    {
      id: 1,
      path: " https://github.com/abdullox0900",
      icon: <FaGithub />,
    },
    {
      id: 2,
      path: "https://www.linkedin.com/feed/",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      path: "https://t.me/day_a_js",
      icon: <FaTelegram />,
    },
    {
      id: 4,
      path: "https://www.youtube.com/channel/UC_Ctr4-bWS0lLZ05ae2oktw",
      icon: <FaYoutube />,
    },
  ]

  return (
    <Container>
      <footer className="flex items-center justify-between self-end py-[25px]">
        <span className="text-[16px] font-semibold text-[#3f3f3f]">
          © Abdullox 2024
        </span>

        <ul className="flex items-center gap-[15px]">
          {socialMediaIcon.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.path} target='_blank' className="text-[22px] text-[#3f3f3f]">
                  {item.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </footer>
    </Container>
  )
}
