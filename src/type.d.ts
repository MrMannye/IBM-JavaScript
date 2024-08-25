export interface Results {
	countries: Country[];
	temples: Beach[];
	beaches: Beach[];
}

export interface Beach {
	id?: number;
	name: string;
	imageUrl: string;
	description: string;
}

export interface Country {
	id: number;
	name: string;
	cities: Beach[];
}