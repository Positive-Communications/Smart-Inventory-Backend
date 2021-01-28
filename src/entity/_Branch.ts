import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class _Branch {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    streetRoad: string;

}

