import Toastify from "toastify-js"

export default function ShowToast(text) {
  Toastify({
    text: text,
    escapeMarkup: false,
    duration: 3000,
  }).showToast()
}
