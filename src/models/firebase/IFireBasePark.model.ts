import IFirebaseHourWeekday from './IFirebaseHourWeekday.interface';
import IFirebaseHourSchedule from './IFirebaseHourSchedule.interface';

export default interface IFireBasePark {
    id?: string;
    logo?: string;
    name: string;
    capacity: number;
    weekdays: {
        monday: IFirebaseHourWeekday[];
        tuesday: IFirebaseHourWeekday[];
        wednesday: IFirebaseHourWeekday[];
        thursday: IFirebaseHourWeekday[];
        friday: IFirebaseHourWeekday[];
        saturday: IFirebaseHourWeekday[];
        sunday: IFirebaseHourWeekday[];
    },
    schedules: IFirebaseHourSchedule[]

}