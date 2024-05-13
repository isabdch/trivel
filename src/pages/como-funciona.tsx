// Components
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

const HowItWorks = () => {
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

export default HowItWorks;