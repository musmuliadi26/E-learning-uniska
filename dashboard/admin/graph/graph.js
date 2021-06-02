const jmhMhs = document.querySelector("#jmh-data-mhs");
const jmhDsn = document.querySelector("#jmh-data-dsn");

jmhDsn.innerText = localStorage.getItem("jmhDataDsn");
jmhMhs.innerText = localStorage.getItem("jmhDataMhs");