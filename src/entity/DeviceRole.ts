import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity()
export default class DeviceRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    deviceType: string;

    @Column()
    serialNumber: string;

    @Column()
    role: string;

}

