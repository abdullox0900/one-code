type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Container(props: ContainerProps) {
  return (
    <div
      className="mx-auto w-[750px] max-w-[100%] px-[24px]"
      style={props.style}
    >
      {props.children}
    </div>
  );
}
