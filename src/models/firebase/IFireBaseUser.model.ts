import IFireBaseBooking from './IFireBaseBooking.interface';

export default interface IFireBaseUser {

    cc: string;
    type:string;
    
    name: string;

    email: string;
    phone: string;
    city: string;
    address: string;

    age: number;
    eps: string;

    bookings: IFireBaseBooking[];

}