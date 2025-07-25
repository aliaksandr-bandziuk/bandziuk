"use client";

import { FC, useState, useEffect, useId } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import styles from "./FormFull.module.scss";
import { Form as FormType } from "@/types/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  agreedToPolicy: boolean;
};

export interface ContactFormProps {
  onFormSubmitSuccess?: () => void; // Функция обратного вызова для успешной отправки
  form: any;
  lang: string;
  offerButtonCustomText?: string;
}

const FormFull: FC<ContactFormProps> = ({
  onFormSubmitSuccess,
  form,
  lang,
  offerButtonCustomText,
}) => {
  const uid = useId();
  const [message, setMessage] = useState<string | null>(null);
  const [filled, setFilled] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const dataForm = form.form;
  const router = useRouter(); // Используйте useRouter из next/navigation

  useEffect(() => {
    const autofilledFields = ["name", "phone", "email", "message"] as const;

    const observer = new MutationObserver(() => {
      autofilledFields.forEach((field) => {
        const el = document.getElementById(`${uid}-${field}`) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | null;

        if (el && el.value.trim() !== "") {
          setFilled((prev) => {
            if (prev[field]) return prev; // уже установлено — не обновляем
            return { ...prev, [field]: true };
          });
        }
      });
    });

    const form = document.querySelector("form");
    if (form) {
      observer.observe(form, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [uid]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilled((prev) => ({ ...prev, [name]: value.trim() !== "" }));
  };

  const initialValues: FormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
    agreedToPolicy: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(`${dataForm.validationNameRequired}`),
    phone: Yup.string().required(`${dataForm.validationPhoneRequired}`),
    // country: Yup.string().required(`${dataForm.validationCountryRequired}`),
    email: Yup.string()
      .email(`${dataForm.validationEmailInvalid}`)
      .required(`${dataForm.validationEmailRequired}`),
    message: Yup.string().required(dataForm.validationMessageRequired!),
    agreedToPolicy: Yup.boolean()
      .required(`${dataForm.validationAgreementRequired}`)
      .oneOf([true], `${dataForm.validationAgreementOneOf}`),
  });

  const onSubmit = async (
    values: FormData,
    { setSubmitting, resetForm }: FormikHelpers<FormData>
  ) => {
    setSubmitting(true);
    try {
      const currentPage = window.location.href; // Получаем текущий URL
      const response = await axios.post("/api/email", {
        ...values,
        currentPage,
      });
      if (response.status === 200) {
        resetForm({});
        setFilled({ name: false, phone: false, email: false, message: false });

        // GTM event
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "form_submission_success",
            form_name: "form_full",
            page_url: window.location.href,
          });
        }

        onFormSubmitSuccess && onFormSubmitSuccess();
        setMessage(
          lang === "ru"
            ? "Я получил вашу заявку и свяжусь с вами в ближайшее время."
            : lang === "pl"
              ? "Otrzymałem Twoje zapytanie i skontaktuję się z Tobą wkrótce."
              : "I received your request and will contact you shortly."
        );
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } else {
        throw new Error("Failed to send lead to monday.com");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        lang === "ru"
          ? "Произошла ошибка при отправке заявки. Попробуйте позже или напишите мне на почту info@bandziuk.com"
          : lang === "pl"
            ? "Wystąpił błąd podczas wysyłania zapytania. Spróbuj ponownie później lub napisz do mnie na adres info@bandziuk.com"
            : lang === "en"
              ? "An error occurred while sending the request. Please try again later or email me at info@bandziuk.com"
              : "An error occurred while sending the request. Please try again later or email me at info@bandziuk.com"
      );
      setTimeout(() => {
        setMessage(null);
      }, 7000);
    } finally {
      setSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      {message && <div className={styles.popup}>{message}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            {/* Поле для имени */}
            <div className={styles.inputWrapper}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="rgb(255, 162, 96)"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
              <label
                // htmlFor="name"
                htmlFor={`${uid}-name`}
                className={`${styles.label} ${filled.name ? styles.filled : ""}`}
              >
                {dataForm.inputName}
              </label>
              <Field
                // id="name"
                id={`${uid}-name`}
                name="name"
                type="text"
                className={`${styles.inputField}`}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.inputWrapper}>
              <label
                // htmlFor="phone"
                htmlFor={`${uid}-phone`}
                className={`${styles.label} ${styles.labelPhone} ${filled.phone ? styles.filled : ""}`}
              >
                {dataForm.inputPhone}
              </label>
              <PhoneInput
                // id="phone"
                id={`${uid}-phone`}
                name="phone"
                className={`${styles.phoneInput}`}
                onBlur={handleBlur}
                onChange={(value) => setFieldValue("phone", value)}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.inputWrapper}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="rgb(255, 162, 96)"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.5l-11-7.5v15h22v-15l-11 7.5zm0-2.5l11-7h-22l11 7z" />
              </svg>
              <label
                // htmlFor="email"
                htmlFor={`${uid}-email`}
                className={`${styles.label} ${filled.email ? styles.filled : ""}`}
              >
                {dataForm.inputEmail}
              </label>
              <Field
                // id="email"
                id={`${uid}-email`}
                name="email"
                type="email"
                className={`${styles.inputField}`}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.inputWrapper}>
              <svg
                className={styles.iconMessage}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="rgb(255, 162, 96)"
                viewBox="0 0 24 24"
              >
                <path d="M2 2v20l4-4h16v-16h-20zm18 12h-12v-2h12v2zm0-4h-12v-2h12v2z" />
              </svg>
              <label
                // htmlFor="message"
                htmlFor={`${uid}-message`}
                className={`${styles.label} ${styles.labelMessage} ${filled.message ? styles.filled : ""}`}
              >
                {dataForm.inputMessage}
              </label>
              <Field
                as="textarea"
                // id="message"
                id={`${uid}-message`}
                name="message"
                className={styles.inputField}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.customCheckbox}>
              <Field
                type="checkbox"
                name="agreedToPolicy"
                // id="agreedToPolicy"
                id={`${uid}-agreedToPolicy`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("agreedToPolicy", e.target.checked);
                }}
              />
              <ErrorMessage
                name="agreedToPolicy"
                component="div"
                className={styles.errorCheckbox}
              />
              <label htmlFor={`${uid}-agreedToPolicy`}>
                {lang === "ru"
                  ? "Я согласен с "
                  : lang === "pl"
                    ? "Zgadzam się z "
                    : "I agree with the terms of the "}
                <Link
                  className={styles.policyLink}
                  href={
                    lang === "ru"
                      ? "/ru/politika-konfidencialnosti"
                      : lang === "pl"
                        ? "/pl/polityka-prywatnosci"
                        : "/privacy-policy"
                  }
                  target="_blank"
                >
                  {lang === "ru"
                    ? "Политикой конфиденциальности"
                    : lang === "pl"
                      ? "Polityką prywatności"
                      : "Privacy Policy"}
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className={styles.sentBtn}
                disabled={isSubmitting}
                onClick={handleButtonClick}
              >
                {isSubmitting ? (
                  <div className={styles.loader}></div>
                ) : offerButtonCustomText ? (
                  offerButtonCustomText
                ) : (
                  dataForm.buttonText
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormFull;
