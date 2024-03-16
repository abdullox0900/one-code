import { ChildrenType } from '@/typs/component.type'

import { Arimo, Roboto_Mono } from "next/font/google"

export const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400', '700'],
    variable: '--font-roboto-mono',
})

const arimo = Arimo({
    subsets: ["latin"],
    weight: ['400', '700'],
    variable: '--font-arimo',
})

export function HeadingOne(props: ChildrenType) {
    return <h4 className={`${robotoMono.variable} text-[17px] uppercase text-[#eef5fc] leading-[34px] font-mono tracking-[2px] font-medium ${props.className}`}> {props.children}</h4 >
}

export function TextOne(props: ChildrenType) {
    return <p className={`${arimo.variable} font-helvetica text-[17px] text-[#dde1e7] leading-[32px] mb-[20px] font-light tracking-[0.9px]`}>{props.children}</p>
}