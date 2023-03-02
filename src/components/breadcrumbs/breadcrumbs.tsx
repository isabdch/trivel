import Link from "next/link";

import { BreadcrumbsComponent } from "./breadcrumbsStyles";

type BreadcrumbsType = {
  links: {
    title: string;
    href: string;
  }[];
};

export function Breadcrumbs(props: BreadcrumbsType) {
  return (
    <BreadcrumbsComponent>
      <div className="container">
        <Link href="/">Home</Link>&nbsp;
        {props.links.map((link, index, array) => {
          return (
            <>
              /&nbsp;
              <Link
                key={link.title}
                className={index === array.length - 1 ? "active" : ""}
                href={link.href}
              >
                {link.title}
              </Link>
              &nbsp;
            </>
          );
        })}
      </div>
    </BreadcrumbsComponent>
  );
}
