interface result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = (arr: Array<number>, dailyGoal: number): result => {
  const periodLength: number = arr.length;
  const trainingDays: number = arr.reduce((acc, value) => {
    if(value > 0) {
      return acc + 1;
    }
    return acc;
  },0);

  const success: boolean = (arr.reduce((acc, value) => acc + value ,0) >= dailyGoal*arr.length);
  const target: number = dailyGoal;
  const average: number = arr.reduce((acc, value) => acc + value ,0)/arr.length;
  const rating: number = ((average/dailyGoal) > 1) ? 3 : ((average/dailyGoal) <= 0.8) ? 1 : 2;
  let ratingDescription: string = 'not too bad but could be better';
  if(rating === 1) {
    ratingDescription = 'bad';
  }
  else if(rating === 3) {
    ratingDescription = 'perfect';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1], 2));