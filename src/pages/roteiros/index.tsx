import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

export default function Roteiros() {
  const links = [
    {
      title: "Roteiros",
      href: "/roteiros",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
    </>
  );
}
