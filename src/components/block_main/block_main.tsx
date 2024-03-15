import { ChildrenType } from "@/typs/component.type";

export default function BlockMain(props: ChildrenType) {
  return <main className="py-[50px]">{props.children}</main>;
}
