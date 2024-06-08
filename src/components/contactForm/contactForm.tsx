// Libraries
import { CiCalendar } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import { PiTreePalmLight } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";

// Components
import {
  TextInput,
  NumberInput,
  Select,
  Textarea,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePickerInput } from "@mantine/dates";

// Assets
import styles from "./contactForm.module.scss";

export const ContactForm = () => {
  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      name: "",
      service: "",
      additional: "",
      passengers: null,
      date: [null, null],
    },
    validate: {
      name: (value) => {
        if (!value) return "O nome é obrigatório.";

        const nameParts = value.trim().split(" ");

        if (nameParts.length < 2) return "Insira seu nome completo.";

        return null;
      },
      date: (value) => {
        if (
          !Array.isArray(value) ||
          value.length !== 2 ||
          !value[0] ||
          !value[1]
        ) {
          return "As datas de chegada e saída são obrigatórias.";
        }

        return null;
      },
      passengers: (value) => {
        if (!value) return "A quantidade de pessoas é obrigatória.";

        if (isNaN(value) || value <= 0)
          return "A quantidade de pessoas deve ser um número maior que 0.";

        return null;
      },
      service: (value) => {
        if (!value) return "Selecione um serviço.";

        return null;
      },
    },
  });

  const handleSubmit = () => {
    if (!form.isValid()) return;

    const { name, service, additional, passengers, date } = form.values;

    const message = `Olá, estou interessado(a) em contratar um pacote Trível.

    *Dados:*
    - *Nome:* ${name}
    - *Serviço Escolhido:* ${service}
    - *Quantidade de Pessoas:* ${passengers}
    - *Data de Chegada:* ${(date[0]! as Date).toLocaleDateString("pt-BR")}
    - *Data de Saída:* ${(date[1]! as Date).toLocaleDateString("pt-BR")}
    ${!!additional ? "- *Informações Adicionais:* " + additional : ""}`;

    const phoneNumber = "+5582996587277";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles["contact-form"]}>
      <TextInput
        withAsterisk
        label="Seu nome:"
        key={form.key("name")}
        {...form.getInputProps("name")}
        className={styles["form-input"]}
        leftSection={<PiNotePencil />}
        placeholder="Insira aqui seu nome completo"
      />

      <DatePickerInput
        clearable
        withAsterisk
        type="range"
        valueFormat="DD/MM/YYYY"
        label="Data de chegada e saída:"
        minDate={new Date()}
        key={form.key("date")}
        {...form.getInputProps("date")}
        leftSection={<CiCalendar />}
        className={styles["form-input"]}
        placeholder="Selecione sua data de chegada e saída"
      />

      <NumberInput
        withAsterisk
        min={1}
        label="Quantidade de pessoas:"
        key={form.key("passengers")}
        className={styles["form-input"]}
        leftSection={<IoPeopleOutline />}
        {...form.getInputProps("passengers")}
        placeholder="Insira a quantidade de pessoas que irão ao passeio"
      />

      <Select
        clearable
        withAsterisk
        label="Serviços a contratar:"
        key={form.key("service")}
        className={styles["form-input"]}
        leftSection={<PiTreePalmLight />}
        {...form.getInputProps("service")}
        placeholder="Selecione o serviço que você gostaria de contratar"
        data={["Tour 1", "Tour 2"]}
      />

      <Textarea
        label="Informações adicionais:"
        description="Se houver algo mais que gostaria de compartilhar, por favor, insira no campo abaixo."
        placeholder="Insira aqui as informações adicionais"
        key={form.key("additional")}
        className={styles["form-input"]}
        {...form.getInputProps("additional")}
      />

      <Button
        fullWidth
        disabled={!form.isValid()}
        leftSection={<BsWhatsapp />}
        onClick={handleSubmit}
      >
        ENVIAR
      </Button>
    </div>
  );
};
