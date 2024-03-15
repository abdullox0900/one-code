import { ChildrenType } from "@/typs/component.type";

export default function Heading(props: ChildrenType) {
  return (
    <h2 className="pb-[35px] text-center text-[34px]">{props.children}</h2>
  );
}
