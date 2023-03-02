import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

export default function ComoFunciona() {
  const links = [
    {
      title: "Como funciona",
      href: "/como-funciona",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
    </>
  );
}
