class Carrinho {
  constructor(itens, qntd, valorTotal) {
    this.itens = itens;
    this.qntd = qntd;
    this.valorTotal = valorTotal;
  }

  addItem(item) {
    let contador = 0;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].qntd == item.qntd;
        contador = 1;
      }
    }

    if (contador == 0) {
      this.itens.push(item);
    }
    this.qntd += item.qntd;
    this.valorTotal += item.preco * item.qntd;
  }

  removeItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        let obj = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });

        this.qntd -= this.itens[itemCarrinho].qntd;
        this.valorTotal -=
          this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qntd;

        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 01,
      nome: "Camisa",
      qntd: 1,
      preco: 20,
    },
    {
      id: 02,
      nome: "Calça",
      qntd: 2,
      preco: 50,
    },
  ],
  3,
  120
);

console.log(carrinho);

carrinho.addItem({ id: 01, nome: "Camisa", qntd: 2, preco: 20 });

console.log(carrinho);

carrinho.addItem({ id: 03, nome: "Boné", qntd: 1, preco: 100 });

console.log(carrinho);

carrinho.removeItem({ id: 01, nome: "Camisa", qntd: 2, preco: 20});

console.log(carrinho);
