

import IUser from '@/models/IUser.interface';
import { db } from '@/database/firebase.db';
import IBook from '@/models/IBook.model';

export async function getBookById(bookId: string) {

    const bookRef = db.collection('schedules');
    const bookQuery = bookRef.doc(bookId);
    const bookSnapshot = await bookQuery.get();
    const bookDocument = bookSnapshot.data();
    if(bookDocument){
            
            const bookR = bookDocument;
            bookR['date'] = bookR['date'].toDate() || '';

            const book: IBook =  bookR as IBook;
            return book;
            
        } else {

            return null;
        }
       
}