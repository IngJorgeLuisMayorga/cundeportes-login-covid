export default interface IFirebaseHourWeekday {
    hour: string;
    aviableFor: Array<'PUBLIC' | 'SCHOOL'>;
    capacity: {
        total: number;
        busy: number;
    };
}