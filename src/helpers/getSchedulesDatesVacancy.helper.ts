
import { db } from '@/database/firebase.db';
import IScheduleDate from '@/models/IDates.model';

export async function getSchedulesDatesVacancy() {

    const schedulesRef = db.collection('schedules');
    const schedulesQuery = schedulesRef.doc('SCHEDULES_SUMMARY');
    const schedulesSnapshot = await schedulesQuery.get();
    const schedulesDocument = schedulesSnapshot.data();

    if (schedulesDocument) {

        const schedulesKeys = Object.keys(schedulesDocument);
        const schedulesValues = Object.values(schedulesDocument);

        const noVacancyTimestamps: IScheduleDate[] = schedulesKeys.map(
            (dateString: string, index: number) => {
                return {
                    index: index,
                    cc: schedulesValues[index],
                    booked: schedulesValues[index].length,
                    month: parseInt(dateString.substring(4, 6), 10),
                    day:  parseInt(dateString.substring(6, 8), 10),
                    year:  parseInt(dateString.substring(0, 4), 10)
                }
            }
        )

        return noVacancyTimestamps;
    } else {

        return null;
    }

}