/* eslint-disable */
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { db } from '@/database/firebase.db';
import moment from 'moment';

export async function addPark(payload: IFireBasePark) {
    
    const parkRef = db.collection('parks');
    const parkQuery = parkRef.doc(payload.name.replace(/[^A-Z0-9]+/ig, "_"));
    const parkSnapshot = await parkQuery.set({
        name: payload.name,
        capacity: payload.capacity,
        schedules: payload.schedules,
        weekdays: payload.weekdays,
        logo: payload.logo,
    });

    return {
        name: payload.name,
        capacity: payload.capacity,
        schedules: payload.schedules,
        weekdays: payload.weekdays,
    };

}
