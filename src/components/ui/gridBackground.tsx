import { Image } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import Container from "../container/container";
import Posts from "../posts/posts";

export function GridBackgroundDemo() {
  return (
    <Container>
      <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex  min-h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black"></div>
        <div className="absolute top-[100px] flex items-start max-[640px]:flex-col  max-[640px]:items-center">
          <div className="relative h-[145px] w-[145px] max-[640px]:mb-[25px]">
            <div
              style={{
                backgroundImage: `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)`,
              }}
              className="absolute left-0 top-0 z-[9] h-[143px] w-[143px] rounded-[50%]"
            ></div>
            <Image
              width={142}
              height={142}
              style={{ border: "3px solid white" }}
              className="absolute left-[4px] top-[4px] z-[10] h-[135px] w-[135px] rounded-[50%] object-cover max-[640px]:mb-[25px]"
              alt="NextUI hero Image with delay"
              src="https://avatars.githubusercontent.com/u/94014212?v=4"
            />
          </div>
          <div className="w-[550px] max-[720px]:w-[450px] max-[510px]:w-full">
            <h1 className="relative z-20 ml-[35px] bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pb-8 text-start text-[28px] font-bold text-transparent max-[640px]:ml-0 max-[640px]:text-center">
              {"Hey, I'm Abdulloh. I'm a Frontend Developer and data security."}
            </h1>
            <ul className="item-items ml-[35px] flex gap-[20px] max-[640px]:ml-0 max-[510px]:flex-col">
              <li>
                <a
                  className="delay-800 flex items-center gap-[10px] transition ease-in-out hover:opacity-50"
                  href="#"
                >
                  <FaGithub />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="delay-800 flex items-center gap-[10px] transition ease-in-out hover:text-[#00A0DC]"
                  href="#"
                >
                  <FaLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="delay-800 flex items-center gap-[10px] transition ease-in-out hover:text-[#FF0000]"
                  href="#"
                >
                  <FaYoutube />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  className="delay-800 flex items-center gap-[10px] transition ease-in-out hover:text-[#229ED9]"
                  href="#"
                >
                  <FaTelegram />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="top-[45%] mt-[45%] max-[720px]:mt-[400px] max-[640px]:mt-[600px] max-[510px]:mt-[650px] max-[340px]:mt-[690px]">
          <h4 className="mb-[25px] text-start text-[24px]">Top Posts</h4>
          <Posts />
        </div>
      </div>
    </Container>
  );
}
