// Shared by ModalFull (renders it) and ModalButton (warms it up on hover),
// so both use the same chunk and the second call is free.
export const loadModalDialog = () => import("./ModalFullDialog");
