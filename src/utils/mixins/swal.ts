import Swal from "sweetalert2";

const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	timerProgressBar: true,
	timer: 2000,
	showConfirmButton: false
});

export { Toast };
