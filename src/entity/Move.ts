import { JoinTable, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import Alerts from "./Alerts";
import Carrier from "./Carrier";
import Product from "./Product";
import Tags from "./Tags";

@Entity()
export default class Move {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fromID: string;

    @Column()
    toID: string;

    @Column()
    timeStamp: string;

    @Column()
    carrier: string;

    @Column({
        default: "empty"
    })
    status: string;


    @Column({
        default: false
    })
    arrived: boolean;

    @Column({
        default: "empty"
    })
    pendingMoveFrom: string;

    @Column({
        default: "empty"
    })
    pendingMoveTo: string;


    @Column({
        nullable: true
    })
    fromSub: string;

    @Column()
    product: string;

    @Column({
        nullable: true
    })
    toSub: string;

    @Column({
        default: false
    })
    isFull: boolean;

    @Column({
        default: false
    })
    isStarted: boolean;

    @Column({
        default: 0
    })
    count: number;

    @Column({
        default: 0
    })
    quantity: number;

    @Column({
        default: false
    })
    isDefective: boolean;


    @OneToMany(
        type => Tags, tag => tag.moves
    )
    @JoinTable()
    tags: Tags[];

    @OneToMany(type => Alerts, alerts => alerts.move)
    @JoinTable()
    alerts: Alerts[];

    async createItself(data: { carrier: string; product: string; fromID: string; toID: any; fromSub: any; toSub: any; isFull: boolean; isDefective: boolean; }) {

        this.carrier = data.carrier;
        this.product = data.product;
        this.fromID = data.fromID;
        this.toID = data.toID;
        this.fromSub = data.fromSub || null;
        this.toSub = data.toSub || null;
        this.isFull = data.isFull
        this.isDefective = data.isDefective
        this.timeStamp = new Date().getTime().toString();
    }

}