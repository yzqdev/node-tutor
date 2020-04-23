let text = parseInt(readline());
let num = text.replace(/[^0-9]/gi, ``);
let alphabet = text.replace(/[^a-z]+/gi, ``);
let newstrnum = Number(text.replace(alphabet, ``));
switch (alphabet) {
  case `bps`:
    console.log(newstrnum);
    console.log(`hello`);
    break;
  case `Kbps`:
    console.log(newstrnum * 1000);
    break;
  case `Mbps`:
    console.log(newstrnum * 1000000);
    break;
  case `Gbps`:
    console.log(newstrnum * 1000000000);
    break;
  case `Tbps`:
    console.log(newstrnum * 1000000000000);
    break;
}
