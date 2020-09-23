
/* eslint-disable */
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { db } from '@/database/firebase.db';
import moment from 'moment';
import IFirebaseHourSchedule from '@/models/firebase/IFirebaseHourSchedule.interface';

export async function doConfirmBook(payload: any) {

 
    // ACTUALIZAR USUARIO CON SUS BOOKINGS 
    const userPayload = payload;
    const user_id_type = (userPayload.type+ '').toUpperCase();
    const user_id_cc = (userPayload.cc + '').toUpperCase();
    const user_id = user_id_type + '_' + user_id_cc + '_' +moment(userPayload.date).format('DDMMYYYY');
    const bookingsAll = userPayload.bookings;
    bookingsAll.push({
        type: userPayload.publicType,
        park: userPayload.park.id,
        date: userPayload.date,
        hour: userPayload.hour,
        sport: userPayload.sport,
        companions: userPayload.companions,
    });
    const bookings = bookingsAll.filter((booking => !moment(booking.date).isBefore(moment(new Date()), 'day')))
    const userRef = db.collection('schedules');
    const userQuery = userRef.doc(user_id);

    const schedulePayload = {
        date: userPayload.date,
        hour: userPayload.hour,
        cc: userPayload.cc,
        type: userPayload.type,
        name: userPayload.name,
        email: userPayload.email,
        phone: userPayload.phone,
        city: userPayload.city,
        address: userPayload.address,
        age: userPayload.age,
        eps: userPayload.eps,
        sport: userPayload.sport,
        park: userPayload.park.name,
        temperature: userPayload.temperature,
        covid_contact: userPayload.covid_contact,
        covid_symptoms: userPayload.covid_symptoms,
    }

    console.log(' ')
    console.log(' schedulePayload ')
    console.log(schedulePayload)
    console.log(' ')

    const userSnapshot = await userQuery.set(schedulePayload);
    return schedulePayload;
}
