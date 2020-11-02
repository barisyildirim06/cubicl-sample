export interface User{
	username?: string;
	password?: string;
}

export interface Account{
	username?: string;
	accountName?: string;
	amount?: number;
	currency?: string;
	interestRate?: number;
	timestamp?: number;
}

export interface Currency{
	usdAsTL?: number;
	eurAsTL?: number;
	turkishLira?: number;
	xauAsTL?: number;
}