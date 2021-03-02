

const calculateBmi = (height: number, weight: number): string => {
  const bmi: number = weight / ((height/100) * (height/100));

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

const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);

console.log(calculateBmi(height,weight));