import { AfterInsert, Column, Entity, getConnection, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import readUnitByID from "../helpers/R/ByID/ReadUnitByID";
import assignRandomTag from "../helpers/U/Custom/AssignRandomTag";
import Product from "./Product";
import ScanProductHistory from "./ScanProductHistory";
import Tags from "./Tags";
import Unit from "./Units";

@Entity()
export default class Pallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    count: number;

    @Column()
    type: string;

    @Column({
        default: "empty"
    })
    status: string;

    @Column({
        default: false
    })
    hasErrors: boolean;

    @ManyToOne(type => Unit, unit => unit.pallets)
    unit: Unit;


    @ManyToOne(() => Product, product => product.pallet)
    product: Product;

    @OneToOne(type => Tags, tag => tag.pallet)
    tag: Tags;

    @OneToMany(type => ScanProductHistory, history => history.pallet)
    @JoinTable()
    history: ScanProductHistory[]


    async createItself(data) {
        this.count = data.count,
        this.type = data.palletType;
        this.unit = await readUnitByID(data.unit.id);
        this.tag = await assignRandomTag();
    }

    // @AfterInsert()
    // updateTag() {
    //     updateAssigedTag(this.tag)
    // }
}


async function updateAssigedTag(tag) {


    let tag_ = await getConnection()
        .createQueryBuilder()
        .update(Tags)
        .where('id =:id', { id: tag.id })
        .set({
            isPalletTag: true,
            isAssigned: true,
        })
        .execute();


    console.log("tag_", tag_);

}