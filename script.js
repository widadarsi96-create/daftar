function kirimData() {
  const data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    nama: document.getElementById("nama").value,
    umur: document.getElementById("umur").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value || "",
    ttl: document.getElementById("ttl").value,
    tangalahir: document.getElementById("tangalahir").value,
    school: document.getElementById("school").value,
    universitas: document.getElementById("universitas").value,
    alasan: document.getElementById("alasan").value,
  };

  fetch("URL_APPS_SCRIPT_LO", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(res => {
    alert("Data berhasil dikirim");
    console.log(res);
  })
  .catch(err => {
    alert("Gagal kirim data");
    console.error(err);
  });
}

function hasil() {
  fetch("https://script.google.com/macros/s/AKfycbzDgwImI_HaLL6sMATcrvM_4hiTv7Ie3ABtU77MrUs0vgXfyJPYKCdK6ut8B5Qu3LQH/exec", { 
    method: "POST",
    body: JSON.stringify({
      nama: document.getElementById("nama").value
    })
  });
}
