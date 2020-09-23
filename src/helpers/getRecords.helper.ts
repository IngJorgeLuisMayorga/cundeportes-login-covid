import IUser from '@/models/IUser.interface';
import { db } from '@/database/firebase.db';
import moment from "moment";

export async function getRecords() {
        const snapshot = await db.collection('schedules').get();
        const records = snapshot.docs
        .map(doc => doc.data())
        .filter(item => item.cc)
        .map(item => {
                console.warn(' ')
                console.warn('typeof item.date ')
                console.warn(typeof item.date === 'object')
                console.warn(' ')
                if(typeof item.date === 'object'){
                    item.date = moment(item.date.toDate()).format("DD/MM/YYYY")
                }
                return item
        })

        console.log('')
        console.log('snapshot.docs.map(doc => doc.data())')
        console.log(snapshot.docs.map(doc => doc.data()))
        console.log('')
        console.log('')

        return records;
}