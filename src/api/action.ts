export enum Action {
  API = 'api/',
  Token = 'token',
  RefreshToken = 'token/refresh',
  ClearToken = 'token/clear',


  Income ='income',
  IncomeDetail = 'income/<id>',
  IncomeDelete = 'income/<id>',

  Expenses ='expenses',

  
  MilkProduction ='milk-production',
  MilkContent ='milk-content',
  MilkSold ='milk-sold',


  Animal = 'animal',
  AnimalDelete = 'animal/<id>',
}
