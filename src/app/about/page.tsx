import BlockMain from "@/components/block_main/block_main"
import Container from "@/components/container/container"
import Heading from "@/components/heading/heading"

import { HeadingOne, TextOne } from '@/components/text_blocks/text_blocks'
import Link from 'next/link'



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
          If you want to get in touch, I am most responsive over <a className='text-[#4385d7] hover:underline' href='mailto:a.abdullokh31@gmail.com' target='_blank'>email</a> and I tend to be pretty active on <a className='text-[#4385d7] hover:underline' href='https://t.me/a_abdullokh31' target='_blank'>Telegram</a> as well.
        </TextOne>

        <HeadingOne>Mentor</HeadingOne>

        <TextOne>
          {`In addition to my development work, I have also served as a mentor in web development for the past year. I've had the opportunity to teach and guide over 150 individuals in their journey of learning programming.`}
        </TextOne>

        <TextOne>
          Furthermore, I engage in educational content creation on <a className='text-[#4385d7] hover:underline' href='https://www.youtube.com/channel/UC_Ctr4-bWS0lLZ05ae2oktw' target='_blank'>YouTube</a>, where I run a blog and provide video tutorials on web development. {`It's`} my goal to contribute to the community by sharing my expertise and helping aspiring developers achieve their goals.
        </TextOne>

        <HeadingOne>Work</HeadingOne>

        <TextOne>
          {`I'm`} excited to share my experiences in web development with you. Until now, {`I've`} worked in several companies and IT training centers. Through these experiences, {`I've`} gained a deeper understanding that facilitates learning and acquiring diverse knowledge and experiences.
        </TextOne>

        <TextOne>
          Recently,{`I've`} been employed at <a className='text-[#4385d7] hover:underline' href="https://www.google.com/search?q=digital+city&oq=digital+city&sourceid=chrome&ie=UTF-8" target="_blank" >Digital City</a>, where {`I've`} had the opportunity to learn many things and collaborate with a diverse team. This experience has enabled me to apply my technological skills and expertise in real projects.
        </TextOne>

        <TextOne>
          If {`you're`} interested in seeing what {`I've`} been up to, you can check out my portfolio or my <a className='text-[#4385d7] hover:underline' href='https://www.youtube.com/channel/UC_Ctr4-bWS0lLZ05ae2oktw' target='_blank'>GitHub</a> account. There,{`you'll`} find many of the projects {`I've`} worked on, which will give you a closer look at what I do.
        </TextOne>

        <TextOne>Best regards 🙂, Abdullokh</TextOne>

        <TextOne>
          <Link className='text-[#4385d7] hover:underline' href="/about/more">More about me →</Link>
        </TextOne>


        {/* <Image className='w-full h-[400px] object-cover object-top rounded-[16px] mb-[35px]' src={AboutMe} width={100} height={400} alt='img' /> */}

      </BlockMain>
    </Container>
  )
}
