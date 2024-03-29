"use client"

// Import Next or React
import Image from "next/image"

// Import Packages
import { TracingBeam } from "@/components/ui/tracing-beam"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


// Import Icons
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa6"

// Import Components
import BlockMain from "@/components/block_main/block_main"
import Container from "@/components/container/container"
import Heading from "@/components/heading/heading"
import Loading from '@/components/loading/loading'
import { TextOne, TextTwoPortfolio } from '@/components/text_blocks/text_blocks'

// TypeScript Type
type ProjectData = {
  name: string
  img: string
  link_github: string
  link_view: string
  type: string
  description: string
  id: string
}

export default function Portfolio() {

  const { data, isLoading } = useQuery({
    queryKey: ['project-data'],
    queryFn: () => axios('https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/students'),
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <BlockMain>
        <Heading>Portfolio</Heading>

        {/* <Spinner size="lg" /> */}

        <TracingBeam>
          <ul className="flex w-full flex-wrap justify-center gap-[35px]">
            {data?.data?.map((item: ProjectData, index: number) => {
              return (
                <li
                  key={index}
                  className="flex flex-col justify-between h-[430px] w-[300px] rounded-[24px] bg-[#18181B] p-[15px] pb-[25px]"
                >
                  <Image
                    className="mb-[10px] w-full rounded-[16px]"
                    src={item.img}
                    alt="img"
                    width={300}
                    height={400}
                  />
                  <h4 className="mb-[10px] text-[22px] font-medium text-[#cccccc]">
                    {item.name}
                  </h4>
                  <TextTwoPortfolio>
                    {item.description.length > 130 ? item.description.slice(0, 130) + '...' : item.description}
                  </TextTwoPortfolio>
                  {/* `
                  <p className="mb-[20px] text-[14px] text-[#cccccc]">
                    {item.description.length > 150 ? item.description.slice(0, 150) + '...' : item.description}
                  </p> */}
                  <div className="mx-auto flex w-[250px] items-center justify-between">
                    <a
                      href={item.link_view}
                      target='_blank'
                      className="flex items-center gap-[3px] text-[12px]"
                    >
                      <FaLink style={{ fontSize: "18px" }} />
                      LivePreview
                    </a>
                    <a
                      href={item.link_github}
                      target='_blank'
                      className="flex items-center gap-[3px] text-[12px]"
                    >
                      <FaGithub style={{ fontSize: "18px" }} />
                      View Code
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </TracingBeam>
      </BlockMain>
    </Container>
  )
}
