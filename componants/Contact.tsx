import { useState } from "react";
3
export type ContactProps = {
  name: string;
  email: string;
  message: string;
};3

export const Contact = () => {
  const [contactForm, setContactForm] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  }
  return (
      
  );
};