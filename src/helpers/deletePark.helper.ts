import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { db } from '@/database/firebase.db';
import moment from 'moment';

export async function deletePark(payload: IFireBasePark) {
    
    const parkRef = db.collection('parks');
    const parkQuery = parkRef.doc(payload.id || payload.name.replace(/[^A-Z0-9]+/ig, "_"));
    const parkSnapshot = await parkQuery.delete();

    return {
        name: payload.name,
        capacity: payload.capacity,
        schedules: payload.schedules,
        weekdays: payload.weekdays,
    };

}
