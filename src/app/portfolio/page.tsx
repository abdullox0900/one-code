"use client";

import Image from "next/image";
import Container from "@/components/container/container";
import Heading from "@/components/heading/heading";
import BlockMain from "@/components/block_main/block_main";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 0];

  return (
    <Container>
      <BlockMain>
        <Heading>Portfolio</Heading>

        <TracingBeam>
          <ul className="flex w-full flex-wrap justify-center gap-[35px]">
            {arr.map((item, index) => {
              return (
                <li
                  key={index}
                  className="h-[400px] w-[300px] rounded-[24px] bg-[#18181B] p-[15px]"
                >
                  <Image
                    className="mb-[15px] w-full rounded-[16px]"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    alt="img"
                    width={300}
                    height={400}
                  />
                  <h4 className="mb-[15px] text-[22px] font-medium text-[#cccccc]">
                    Project Tile goes here
                  </h4>
                  <p className="mb-[20px] text-[14px] text-[#cccccc]">
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </p>
                  <div className="mx-auto flex w-[250px] items-center justify-between">
                    <a
                      href="#"
                      className="flex items-center gap-[3px] text-[12px]"
                    >
                      <FaLink style={{ fontSize: "18px" }} />
                      LivePreview
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-[3px] text-[12px]"
                    >
                      <FaGithub style={{ fontSize: "18px" }} />
                      View Code
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </TracingBeam>
      </BlockMain>
    </Container>
  );
}
