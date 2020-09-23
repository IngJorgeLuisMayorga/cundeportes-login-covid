export default interface IFireBaseBooking {

    type: string;
    date: Date;
    park: string;
    hour: string;
    sport:any|'Acondicionamiento Fisico'|'Adulto mayor'|'Aerobicos'|'Ajedrez'|'Atletismo'|'Baloncesto'|'Billar'|'BMX'|'Bocha'|'Ciclismo'|'Discapacidad'|'Futbol'|'Futbol de salon'|'Gimnasia'|'Judo'|'Karate Do'|'Lucha Olimpica'|'Natación'|'Patinaje artistico'|'Patinaje de carreras'|'Porras'|'Rugby'|'Skate'|'Taekwondo'|'Tenis de campo'|'Tenis de mesa'|'Tiro con Arco'|'Voleybol';
    companions: Array<{
        cc: string;
        name: string;
        email: string;
        phone: string;
        city: string;
        address: string;
        age: number;
        eps: string;
    }>;


}