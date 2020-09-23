

import IBookRequest from '@/models/IBookRequest.model';
import { db } from '@/database/firebase.db';
import moment from 'moment'
import IBook from '@/models/IBook.model';

export async function doSendSignUpRequest(bookRequest: IBookRequest) {

        //UPDATE USER
        const userRef = db.collection('users');
        const userQuery = userRef.doc(bookRequest.userCCNumber);
        await userQuery.set({
            
            address: bookRequest.contactAddress,
            age: bookRequest.userAge,
            cc: parseInt(bookRequest.userCCNumber) ,
            city: bookRequest.contactCity,
            email: bookRequest.contactEmail,
            eps: bookRequest.userEPS,
            names: bookRequest.userNames,
            phone: bookRequest.contactPhone,
            type: bookRequest.userCCType,

            bookDate: bookRequest.bookingDate,
            bookSport: bookRequest.bookingSport,
            bookType: bookRequest.bookingType,

        });

        return 'ok'

}