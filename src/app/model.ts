export interface User{
	username?: string;
	password?: string;
}

export interface Account{
	username?: string;
	accountName?: string;
	openingAmount?: number;
	amount?: number;
	currency?: string;
	interestRate?: number;
	timestamp?: string;
}

export interface Currency{
	usdAsTL?: number;
	eurAsTL?: number;
	turkishLira?: number;
	xauAsTL?: number;
}