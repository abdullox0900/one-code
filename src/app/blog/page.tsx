import BlockMain from '@/components/block_main/block_main'
import Container from "@/components/container/container"
import Heading from "@/components/heading/heading"

import { TracingBeam } from "@/components/ui/tracing-beam"

import { robotoMono } from '@/components/text_blocks/text_blocks'
import ComingSoon from '@/components/coming_soon/coming_soon'

export default function Blog() {

  // const arr = []



  return (
    <Container>
      <BlockMain>
        <Heading>Blog</Heading>

        <ComingSoon />

        <TracingBeam>
          <ul className='flex flex-col gap-[35px]'>
            {/* {
              arr.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#">
                      <h3 className='text-[24px] text-start font-semibold pb-[5px] max-[450px]:text-[18px] '>🙏 27 Principles for 27 Years</h3>
                      <span className={`${robotoMono.variable} text-[rgb(194,203,212)] mb-[10px] max-[450px]:text-[12px] font-mono`}>Jul 14, 2023 • 3 min • Life</span>
                    </a>
                  </li>
                )
              })
            } */}
          </ul>
        </TracingBeam>

      </BlockMain>
    </Container>
  )
}
