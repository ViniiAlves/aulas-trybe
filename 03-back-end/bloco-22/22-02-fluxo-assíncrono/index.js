const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2. Passou 3 segundos.');
      resolve();
    }, 3000);
  })
}

async function main() {
  console.log('1. Início da função main.');

  await setTimeoutPromise();

  console.log('3. Fim da função main.');
}

main();