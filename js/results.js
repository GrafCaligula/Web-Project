function printResultsHtml() {
  let search = window.location.search;
  let params = new URLSearchParams(search);

  params.forEach((value, key) => {
    // Ausgabe auf HTML-Seite
    const elem = document.createElement("p");
    elem.innerHTML = key + " : " + value;
    const node = document.getElementById("results");
    node.appendChild(elem);
  });
}

function printResultsConsole() {
  let search = window.location.search;
  let params = new URLSearchParams(search);

  params.forEach((value, key) => {
    Konsolenausgabe;
    console.log(key + " : " + value);
  });
}

function printResultObjectConsole() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let dataObj = [];

  params.forEach((value, key) => {
    // Ausgabe auf HTML-Seite
    // document.write("<p style='font-size: 1.5rem'>" + key + " : " + value + "</p>");

    // Ein Array mit key-value-Objekten erstellen
    dataObj.push({ key, value });
  });
  console.log(dataObj);
}
