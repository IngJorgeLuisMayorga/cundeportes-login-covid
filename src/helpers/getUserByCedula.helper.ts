import IUser from '@/models/IUser.interface';
import { db } from '@/database/firebase.db';

export async function getUserByCedula(cedula: string) {
        const userRef = db.collection('users');
        const userQuery = userRef.where('cc','==', cedula + '');
        const usersSnapshot = await userQuery.get();
        const userDocument = usersSnapshot.docs[0];
        if(userDocument){
            
            const userR = userDocument.data();
            userR.bookings.map(booking => booking.date = booking.date.toDate());

            const user: IUser =  userR as IUser;
            
            return user;
        } else {
            return null;
        }
}