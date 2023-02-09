let entradaUsuario = prompt(`Digite a data de partida (formato DD/MM/YYYY)`);

let entradaUsuarioData = moment(entradaUsuario, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - entradaUsuarioData;

let escolhaOpcao = prompt(
  `Escolha como gostaria de exibir o tempo de partida \n1- Segundos \n2- Minutos\n3- Horas\n4- Dias `
);

if (escolhaOpcao == "1") {
  let secondsDeparture = Math.round(dateDiff / 1000);
  alert(`Tempo de vôo: ${secondsDeparture} segundos`);
} else if (escolhaOpcao == "2") {
  let minutesDeparture = Math.round(dateDiff / 1000 / 60);
  alert(`Tempo de vôo: ${minutesDeparture} minutos `);
} else if (escolhaOpcao == "3") {
  let hoursDeparture = Math.round(dateDiff / 1000 / 3600);
  alert(`Tempo de vôo: ${hoursDeparture} horas`);
} else if (escolhaOpcao == "4") {
  let daysDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
  alert(`Tempo de vôo: ${daysDeparture} dias `);
}else {
    alert(`opção inválida`)
}
