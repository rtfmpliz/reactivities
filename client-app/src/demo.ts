let data ;

data = "42";

export interface ICar {
    color: string,
    model: string,
    topSpeed?: number
}

const car1 : ICar = {
    color: 'blue',
    model : 'BMW'
}

const car2 : ICar= {
    color: 'blue',
    model : 'BMW'
}

export const cars = [car1, car2];