// Components
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

const AboutUs = () => {
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

export default AboutUs;