

const calculateBmi = (height: number, weight: number): string => {
  const bmi: number = weight / ((height/100) * (height/100));
  console.log(bmi);

  if(bmi <= 18.5) {
    return 'UnderWeight';
  }
  else if(bmi > 18.5 && bmi <= 25) {
    return 'Normal (healthy weight)';
  }
  else if(bmi > 25) {
    return 'Obese';
  }
}

console.log(calculateBmi(180,74));