import Image from "next/image";
import { CoverComponent } from "./coverStyles";

type Props = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  class: string;
};

export function Cover(props: Props) {
  return (
    <CoverComponent className={props.class}>
      <Image src={props.src} alt={props.alt} fill />
      <h1>{props.title}</h1>
    </CoverComponent>
  );
}
