class Casa {
  constructor(casaOuApartamento, cep, alugadoOuNao) {
    this.casaOuApartamento = casaOuApartamento;
    this.cep = cep;
    this.alugadoOuNao = alugadoOuNao;
  }
}

const listaCasas = [];

const save = () => {
  event.preventDefault();
  let casaOuApartamento = document.getElementById("casaOuApartamento").value;
  let cep = document.getElementById("cep").value;
  let alugadoOuNao = document.querySelector("#alugado").value;
  let criarCasa = new Casa(casaOuApartamento, cep, alugadoOuNao);
  listaCasas.push(criarCasa);
  console.table(listaCasas);

  const element = document.createElement("div");
  element.innerHTML = `   <div class="ultima">
	                      <ul>
	                        <li>Casa ou apartamento: ${casaOuApartamento}</li>
							<li>CEP: ${cep}</li>
							<li>Alugada ou não: ${alugadoOuNao}</li>
	 					  </ul>
               <button onclick="apagar(${listaCasas.length-1})">APAGAR</button>
						  </div>
						  `;
						  
  document.getElementById("listagem-de-casas").appendChild(element);
  if (alugadoOuNao === "Alugada") {
     element.classList.add("mudarcor")
  }
  document.querySelector("#cep").value = "";
  document.querySelector("#casaOuApartamento").value = "";
};


function apagar(index){
  let pegarUltima = document.querySelector(".ultima")
  pegarUltima.remove()
  listaCasas.splice(index, 1)
  console.table(listaCasas)
}
