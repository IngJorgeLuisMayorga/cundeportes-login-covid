import IUser from '@/models/IUser.interface';
import { db } from '@/database/firebase.db';
import moment from "moment";

export async function getUsers() {
        const snapshot = await db.collection('users').get();
        const records = snapshot.docs
        .map(doc => doc.data())
        .filter(item => item.cc);

        console.log('')
        console.log('snapshot.docs.map(doc => doc.data())')
        console.log(snapshot.docs.map(doc => doc.data()))
        console.log('')
        console.log('')

        return records;
}