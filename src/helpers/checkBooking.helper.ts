
/* eslint-disable */
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { db } from '@/database/firebase.db';
import moment from 'moment';
import IFirebaseHourSchedule from '@/models/firebase/IFirebaseHourSchedule.interface';
import { getUserByCedula } from './getUserByCedula.helper';
import { getParksFromDB } from './getParksFromDB.helper';
import IFireBaseUser from '@/models/firebase/IFireBaseUser.model';
import IFireBaseBooking from '@/models/firebase/IFireBaseBooking.interface';

export async function checkBooking($cc,$client,$park, $date, $hour) {
    const user = await getUserByCedula($cc + '');
    const parks = await getParksFromDB();
    const park = parks.find(park => park.id === $park.id);
    const date = $date;
    const hour = $hour;
    const book = (user as any).bookings.find((booking: IFireBaseBooking) => {
        const bookingCC = user?.cc;
        const bookingDate = booking.date;
        const bookingHour = booking.hour;
        const bookingPark = booking.park
        const bookingSport = booking.sport;
        const bookingType = booking.type;
        if( 
            moment(bookingDate).isSame(moment(date),'day') && 
            moment(bookingDate).isSame(moment(date),'month')
        ){
            if(
                park &&
                bookingHour === hour && 
                bookingPark === park.id && 
                bookingCC === $cc
            ){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }      
    });
    return book || true;

}
