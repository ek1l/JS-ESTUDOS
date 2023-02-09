function decrementaImprimePares(num) {
    while (num >= 0) {
      if (num % 2 === 0) {
        console.log(num);
      }
      num--;
    }
  }


decrementaImprimePares(10);