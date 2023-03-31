import React from "react";
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
            <React.Fragment key={link.title}>
              /&nbsp;
              <Link
                className={index === array.length - 1 ? "active" : ""}
                href={link.href}
              >
                {link.title}
              </Link>
              &nbsp;
            </React.Fragment>
          );
        })}
      </div>
    </BreadcrumbsComponent>
  );
}
