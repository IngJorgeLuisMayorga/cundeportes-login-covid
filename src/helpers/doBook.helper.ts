/* eslint-disable */
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { db } from '@/database/firebase.db';
import moment from 'moment';
import IFirebaseHourSchedule from '@/models/firebase/IFirebaseHourSchedule.interface';

export async function doBook(payload: any) {

    console.clear()
 
    // ACTUALIZAR USUARIO CON SUS BOOKINGS 
    const userPayload = payload;
    const user_id_type = (userPayload.type+ '').toUpperCase();
    const user_id_cc = (userPayload.cc + '').toUpperCase();
    const user_id = user_id_type + '_' + user_id_cc;
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
    const userRef = db.collection('users');
    const userQuery = userRef.doc(user_id);

    const userSnapshot = await userQuery.set({
        cc: userPayload.cc,
        type: userPayload.type,
        name: userPayload.name,
        email: userPayload.email,
        phone: userPayload.phone,
        city: userPayload.city,
        address: userPayload.address,
        age: userPayload.age,
        eps: userPayload.eps,
        bookings: bookings
    });



    // ACTUALIZAR PARQUES CON SUS BOOKINGS
    const park_id = (payload.park as IFireBasePark).id;
    const park_schedules = (payload.park as IFireBasePark).schedules;
    const park_schedulesN = park_schedules.length;

    let flag = 0;
    for(let k = 0 ; k < park_schedulesN; k ++){
        const schedule = park_schedules[k];
        if(moment(schedule.date).isSame(moment(payload.date))){
            schedule.capacity.busy = schedule.capacity.busy + 1;
            flag = 1;
            break;
        }
    }
    if(flag === 0){
        park_schedules.push({
            tag: moment(payload.date).format("DD/MM/YYYY"),
            date: payload.date,
            hour: payload.hour,
            capacity: {
                total: payload.park.capacity,
                busy: 1
            }
        } as IFirebaseHourSchedule)
    }
    const schedules = park_schedules.filter((schedule => !moment(schedule.date).isBefore(moment(new Date()), 'day')))
    const parkRef = db.collection('parks');
    const parkQuery = parkRef.doc(park_id);
  
    const parkSnapshot = await parkQuery.update({
        schedules: schedules
    })
    
 
    console.warn(
        { userSnapshot, parkSnapshot} 
    )
    debugger;

    return false;
    //return { userSnapshot, parkSnapshot} 

}
