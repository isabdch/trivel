// Components
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

const Contact = () => {
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

export default Contact;