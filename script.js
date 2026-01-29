function kirimData() {
  const data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    nama: document.getElementById("nama").value,
    umur: document.getElementById("umur").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value || "",
    tempat: document.getElementById("ttl").value,
    tanggal_lahir: document.getElementById("tanggalahir").value,
    sekolah: document.getElementById("school").value,
    universitas: document.getElementById("universitas").value,
    alasan: document.getElementById("alasan").value
  };

  fetch("https://script.google.com/macros/s/AKfycby7jhB_WUN06hDfTKt9XqgatJWWC9mtkSFRXFoiH24MuZ-u2AnTFs9779FvMdyZSquo/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(() => {
    alert("Data berhasil dikirim ke Sheets!");
    document.getElementById("registForm").reset();
  })
  .catch(err => {
    alert("Gagal kirim data. Cek console");
    console.error(err);
  });
}
