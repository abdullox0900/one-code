import BlockMain from "@/components/block_main/block_main"
import Container from "@/components/container/container"
import Heading from "@/components/heading/heading"
import Image from "next/image"

import AboutMe from '@/assets/img/about_me.jpeg'
import { HeadingOne, TextOne } from '@/components/text_blocks/text_blocks'



export default function About() {

  return (
    <Container>
      <BlockMain>
        <Heading>About</Heading>
        <HeadingOne>Me</HeadingOne>

        <TextOne>I am Abdullokh Abdusalomov, a 22-year-old Software Developer from Tashkent, Uzbekistan, currently living in Andijon, Uzbekistan.</TextOne>

        <TextOne>
          I have been involved in web development for 2 years. During this time, I have gained valuable experience and skills in various aspects of web development. I have worked for several companies and participated in numerous projects over the past 2 years.
        </TextOne>

        <TextOne>
          If you want to get in touch, I am most responsive over <a className='text-[#4385d7] hover:underline' href='mailto:a.abdullokh31@gmail.com' target='_blank'>email</a> and I tend to be pretty active on <a className='text-[#4385d7] hover:underline' href='#' target='_blank'>Telegram</a> as well.
        </TextOne>

        <HeadingOne>Mentor</HeadingOne>

        <TextOne>
          {`In addition to my development work, I have also served as a mentor in web development for the past year. I've had the opportunity to teach and guide over 150 individuals in their journey of learning programming.`}
        </TextOne>

        <TextOne>
          Furthermore, I engage in educational content creation on <a className='text-[#4385d7] hover:underline' href='#' target='_blank'>YouTube</a>, where I run a blog and provide video tutorials on web development. {`It's`} my goal to contribute to the community by sharing my expertise and helping aspiring developers achieve their goals.
        </TextOne>

        <HeadingOne>Work</HeadingOne>

        <TextOne>
          <a className='text-[#4385d7] hover:underline' href="#">More about me →</a>
        </TextOne>


        {/* <Image className='w-full h-[400px] object-cover object-top rounded-[16px] mb-[35px]' src={AboutMe} width={100} height={400} alt='img' /> */}

      </BlockMain>
    </Container>
  )
}
