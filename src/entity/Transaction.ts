import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyID: number;

    @Column({
        nullable: true
    })
    branchID: number;

    @Column()
    quantity: number;

    @Column()
    timeStamp: string;

    @Column()
    type: string;

    @Column()
    date: string;

    async createItself(data) {        
        this.companyID = data.company;
        this.branchID = data.branch || null;
        this.quantity = data.quantity;
        this.timeStamp = new Date().getTime().toString();
        this.type = data.tag_type;
        this.date = new Date().getTime().toString();
    }


}