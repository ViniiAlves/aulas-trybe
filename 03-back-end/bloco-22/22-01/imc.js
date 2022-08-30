const imc = (weight, height) => {
  // return  weight / Math.pow(height, 2) -> Muito mais elegante!!!
  return (weight / (height * height)).toFixed(2);
  // return (weight / Math.pow(height, 2)).toFixed(2);
}

module.exports = imc;
