

import IBookRequest from '@/models/IBookRequest.model';
import { db } from '@/database/firebase.db';
import moment from 'moment'
import IBook from '@/models/IBook.model';

export async function doSendBookingRequest(bookRequest: IBookRequest) {

    const bookRef = db.collection('schedules');
    const bookQuery = bookRef.doc('SCHEDULES_SUMMARY');
    const bookSnapshot = await bookQuery.get();
    const bookDocument = bookSnapshot.data();
    const bookDate = moment(bookRequest.bookingDate).format('YYYYMMDD');

    if (bookDocument) {

        // ADD TO SUMMARY UPDATE VACACNY
        const schedulesKeys = Object.keys(bookDocument);
        const schedulesValues = Object.values(bookDocument);
        const schedulesUpdated: any = bookDocument;
        const nDates = schedulesKeys.length;

        const isDateAlready = schedulesKeys.filter(key => key === bookDate).length > 0;
        if (isDateAlready) {
            for (let k = 0; k < nDates; k++) {
                const scheduleDateK: string = schedulesKeys[k];
                const scheduleDateKCCs: string[] = schedulesValues[k];
                if (scheduleDateK === bookDate) {
                    scheduleDateKCCs.push(bookRequest.userCCType + '' + bookRequest.userCCNumber);
                }
                schedulesUpdated[scheduleDateK] = [... new Set(scheduleDateKCCs)];
            }
        } else {
   
            schedulesUpdated[bookDate] = [bookRequest.userCCType + '' + bookRequest.userCCNumber];

            console.log(' ============= >')
            console.log(' bookDate ' + bookDate)
            console.log('schedulesUpdated[bookDate] ' + schedulesUpdated[bookDate])

        }

        await bookQuery.update(schedulesUpdated);


        //BOOK 
        const bookCC = bookRequest.userCCType + bookRequest.userCCNumber + '_' + bookDate;
    
        await bookRef.doc(bookCC).set({
            cc: bookRequest.userCCNumber,
            date: bookRequest.bookingDate,
            names: bookRequest.userNames,
            sport: bookRequest.bookingSport,
            type: bookRequest.bookingType,

            temperature:  bookRequest.userTemperature || 0,
            covidsymptons:  bookRequest.userCovid.symptoms || "-",
            covidcontact: bookRequest.userCovid.contact || "-"
        });



        //UPDATE USER
        const userRef = db.collection('users');
        const userQuery = userRef.doc(bookRequest.userCCNumber);
        await userQuery.update({
            address: bookRequest.contactAddress,
            age: bookRequest.userAge,
            cc: parseInt(bookRequest.userCCNumber) ,
            city: bookRequest.contactCity,
            email: bookRequest.contactEmail,
            eps: bookRequest.userEPS,
            names: bookRequest.userNames,
            phone: bookRequest.contactPhone,
            type: bookRequest.userCCType,
        });

        return 'ok'

    }

    



}