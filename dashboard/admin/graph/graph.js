const jmhMhs = document.querySelector("#jmh-data-mhs");
const jmhDsn = document.querySelector("#jmh-data-dsn");
const jmhKls = document.querySelector("#jmh-data-kls");

jmhDsn.innerText = localStorage.getItem("jmhDataDsn");
jmhMhs.innerText = localStorage.getItem("jmhDataMhs");
jmhKls.innerText = localStorage.getItem("jumlahDataKelas");