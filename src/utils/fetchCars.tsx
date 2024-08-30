import { CarType } from "../types";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8e83daff9dmsh6dcb0945f67d5eep10afb4jsn8fdf795302d8',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

type Params = {
	limit: number;
	make?: string;
	model?: string;
	fuel_type?: string;
	year?:number

}
const fetchCars = async ({
	limit,
	make = "bmw",
	model = "m4",
	fuel_type = "",
	year,
  }: Params): Promise<CarType[]> => {
	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`;
  
	const res = await fetch(url, options);
  
	const data = await res.json();
  
	return data;
}

export default fetchCars;