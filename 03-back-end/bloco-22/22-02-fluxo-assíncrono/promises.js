const fooPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(5);
  })
}

const fooAsync = async () => 5;    // Forma menor da função acima, com o mesmo resultado.