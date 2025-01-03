document.addEventListener("DOMContentLoaded", function () {
  console.log("Halaman Pemesanan Mobil siap!");

  // Handle form submission
  document.getElementById("order").addEventListener("submit", function (event) {
    event.preventDefault();

    let car = document.getElementById("car").value;
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let payment = document.getElementById("payment").value;

    alert(`Pemesanan Anda telah berhasil!\n\nMobil: ${car}\nNama: ${fullname}\nEmail: ${email}\nTelepon: ${phone}\nAlamat: ${address}\nMetode Pembayaran: ${payment}`);
  });
});
