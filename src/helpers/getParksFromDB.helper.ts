



import IUser from '@/models/IUser.interface';
import { db } from '@/database/firebase.db';
import IBook from '@/models/IBook.model';
import IFireBasePark from '@/models/firebase/IFireBasePark.model';

export async function getParksFromDB(): Promise <IFireBasePark[]> {

    const parksRef = db.collection('parks');
    const parksQuery = parksRef;
    const parksQuerySnapshop = await parksQuery.get();
    const parksDoc = parksQuerySnapshop.docs.map((doc) => { return { id: doc.id, ...doc.data() }});
    return parksDoc as IFireBasePark[];
       
}