// Core
import React from "react";
import Link from "next/link";

// Assets
import styles from "./breadcrumbs.module.scss";

type BreadcrumbsType = {
  links: {
    title: string;
    href: string;
  }[];
};

export const Breadcrumbs = (props: BreadcrumbsType) => {
  return (
    <div className={styles.breadcrumbs}>
      <div className="container">
        <Link href="/">Home</Link>&nbsp;
        {props.links.map((link, index, array) => {
          return (
            <React.Fragment key={link.title}>
              /&nbsp;
              <Link
                className={index === array.length - 1 ? styles.active : ""}
                href={link.href}
              >
                {link.title}
              </Link>
              &nbsp;
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
