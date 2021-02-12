type VAL = {
  date: Date
  born?: true
  weigth?: number
  length?: number
}

export const bornValues: VAL = {
  date: new Date('2021-02-12'),
  born: true,
  weigth: 3.37,
  // length: 50,
}
