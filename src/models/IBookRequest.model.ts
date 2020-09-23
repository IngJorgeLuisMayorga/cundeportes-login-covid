import IUser from './IUser.interface';

export default interface IBookRequest {

    contactEmail: string;
    contactAddress: string;
    contactCity: string;
    contactPhone: string;

    user: IUser | null;
    userNames: string;
    userAge: number;
    userCCNumber: string;
    userCCType: string;
    userEPS: string;
    userTemperature: number;
    userCovid: {symptons: string; contact: string} | any;

    bookingDate: Date;
    bookingSport: string;
    bookingType: string;
}