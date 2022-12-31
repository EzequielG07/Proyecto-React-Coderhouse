import Swal from "sweetalert2";

export const message = (mensaje) => {
  Swal.fire({
    icon: "success",
    text: mensaje,
    background: "#000000",
    color: "#FFFFFF",
    position: "top",
    width: "24em",
    heightAuto: false,
  });
};
