export default interface IFirebaseHourSchedule {
    tag: string;
    date: Date;
    hour: string;
    capacity: {
        total: number;
        busy: number;
    };
}