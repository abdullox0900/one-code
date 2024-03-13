type ContainerProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

export default function Container(props: ContainerProps) {
    return (
        <div className='max-w-[100%] w-[750px] mx-auto px-[24px]' style={props.style}>{props.children}</div>
    )
}