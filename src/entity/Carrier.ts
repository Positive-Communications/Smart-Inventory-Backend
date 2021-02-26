import { AfterInsert, Column, Entity, getConnection, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Users from "./Users";
import ManualEntry from "./ManualEntry";
import CarrierType from "./CarrierType";
import readCarrierTypeByID from "../helpers/R/ByID/ReadCarrierTypeByID";
import readUserByID from "../helpers/R/ByID/ReadUserByID";
import Tags from "./Tags";
import assignRandomTag from "../helpers/U/Custom/AssignRandomTag";
import ScanProductHistory from "./ScanProductHistory";

@Entity()
export default class Carrier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    No: number;

    @Column()
    status: string;

    @Column()
    isFixedUse: boolean;

    @OneToOne(type => Users, user => user.carrier)
    @JoinColumn()
    user: Users;

    @ManyToOne(type => CarrierType, type => type.carriers)
    type: CarrierType


    @OneToMany(type => ManualEntry, manualEntry => manualEntry.carrier)
    @JoinTable()
    manualEntry: ManualEntry[];


    @OneToMany(type => ScanProductHistory, history => history.carrier)
    @JoinTable()
    palletHistory: ScanProductHistory[];


    @OneToOne(type => Tags, tag => tag.carrier)
    tag: Tags;


    async createItSelf(data) {
        this.No = data.number;
        this.type = await readCarrierTypeByID(data.type);
        this.user = await readUserByID(data.user);
        this.isFixedUse = data.isFixed;
        this.status = "empty";
        this.tag = await assignRandomTag();
    }

    @AfterInsert()
    updateTag = () => {
        updateTag(this.tag);
    }

}

const updateTag = async (tag) => {

    let tag_ = await getConnection()
        .createQueryBuilder()
        .update(Tags)
        .where('id =:id', { id: tag.id })
        .set({
            isCarrierTag: true,
            isAssigned: true,
        })
        .execute();

    console.log('carrier ', tag_);




}
