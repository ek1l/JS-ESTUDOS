const meuPrimeiroArray = [ ["Fenix", 8, true],
                           ["Golias", 10, true], 
                           ["Helmet", 5, false],
                           ["Elemental", 3, true],
                           ["Darwin", 15, false],
                         ] 

                    
                         const filteredArray = meuPrimeiroArray.filter(subArray => subArray[1] > 9);
                         console.log(filteredArray);

                         const index = meuPrimeiroArray.findIndex(subArray => subArray[2] === false );
                         console.log(index);

                        const caixaAlta = meuPrimeiroArray.map(arrayUpper =>  arrayUpper[0].toUpperCase())
                        console.log(caixaAlta)



                        alert(`As naves que tem mais de 9 tripulantes são: ${filteredArray}\n A primeira nave da lista que está com o engate pendendo está na posição ${index} do array e\n os nomes das naves em caixa alta são: ${caixaAlta} `)