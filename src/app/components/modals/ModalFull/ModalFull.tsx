"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import { FormStandardDocument } from "@/types/formStandardDocument";
import { loadModalDialog } from "./loadModalDialog";

// The dialog pulls in the form (Formik, Yup), framer-motion and react-modal:
// several hundred KB no visitor needs until they press a contact button.
// It loads on the first open, or earlier when a button is hovered or focused
// (ModalButton calls loadModalDialog).
const ModalFullDialog = dynamic(loadModalDialog, { ssr: false });

type Props = {
  lang: string;
  formDocument: FormStandardDocument;
};

const ModalFull = (props: Props) => {
  const { isModalOpen } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stays mounted after the first open so the close animation and the
    // focus return keep working.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isModalOpen) setMounted(true);
  }, [isModalOpen]);

  return mounted ? <ModalFullDialog {...props} /> : null;
};

export default ModalFull;
