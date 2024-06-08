// Libraries
import { Alert } from "@mantine/core";
import { IoMdInformationCircleOutline } from "react-icons/io";

// Components
import { ContactForm } from "@/components/contactForm/contactForm";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

// Assets
import styles from "../styles/pages/contact.module.scss";

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

      <main className={styles.contact}>
        <div className="container">
          <h1>Entre em contato conosco!</h1>
          <p>
            Estamos disponíveis de segunda à sexta, das 8h às 22h. Dias de
            sábado e domingo, de 9h às 22h.
          </p>

          <ContactForm />

          <Alert title="Observação" icon={<IoMdInformationCircleOutline />}>
            Disponibilizamos cadeirinha ou assento de elevação. Nos
            informar, caso precise.
          </Alert>
        </div>
      </main>
    </>
  );
};

export default Contact;
