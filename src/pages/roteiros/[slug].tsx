import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

export default function Roteiro() {
  const links = [
    {
      title: "Roteiros",
      href: "/roteiros",
    },
    {
      title: "Maragogi",
      href: "/roteiros/maragogi",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
    </>
  );
}
