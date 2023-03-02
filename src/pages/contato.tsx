import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

export default function Contato() {
  const links = [
    {
      title: "Contato",
      href: "/contato",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
    </>
  );
}
