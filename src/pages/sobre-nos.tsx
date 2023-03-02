import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

export default function SobreNos() {
  const links = [
    {
      title: "Sobre nós",
      href: "/sobre-nos",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
    </>
  );
}
