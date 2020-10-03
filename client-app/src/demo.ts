let data ;

data = "42";

export interface ICar {
    key : number,
    color: string,
    model: string,
    topSpeed?: number
}

const car1 : ICar = {
    key: 1,
    color: 'blue',
    model : 'BMW'
}

const car2 : ICar= {
    key: 2,
    color: 'black',
    model : 'MErcedes'
}

export const cars = [car1, car2];