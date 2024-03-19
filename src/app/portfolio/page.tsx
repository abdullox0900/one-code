"use client"

import BlockMain from "@/components/block_main/block_main"
import Container from "@/components/container/container"
import Heading from "@/components/heading/heading"
import { TracingBeam } from "@/components/ui/tracing-beam"
import Image from "next/image"

import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa6"

import axios from 'axios'
import { useEffect, useState } from 'react'

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
  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/students').then(res => setData(res.data))
  }, [])

  return (
    <Container>
      <BlockMain>
        <Heading>Portfolio</Heading>

        {/* <Spinner size="lg" /> */}

        <TracingBeam>
          <ul className="flex w-full flex-wrap justify-center gap-[35px]">
            {data?.map((item: ProjectData, index: number) => {
              return (
                <li
                  key={index}
                  className="h-[400px] w-[300px] rounded-[24px] bg-[#18181B] p-[15px]"
                >
                  <Image
                    className="mb-[15px] w-full rounded-[16px]"
                    src={item.img}
                    alt="img"
                    width={300}
                    height={400}
                  />
                  <h4 className="mb-[15px] text-[22px] font-medium text-[#cccccc]">
                    {item.name}
                  </h4>
                  <p className="mb-[20px] text-[14px] text-[#cccccc]">
                    {item.description.length > 200 ? item.description.slice(0, 200) + '...' : item.description}
                  </p>
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
