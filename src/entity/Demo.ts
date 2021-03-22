import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity"

@Entity()
export default class Demo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product: string;

    @Column()
    quantity: number;

   

    @Column({
        default: false
    })
    isFixed: boolean;

    @Column({
        default: false
    })
    isHandHeld: boolean

    @Column({
        default: false
    })
    isSensor: boolean;

    @Column({
        default: false
    })
    isElectron: boolean;

    @Column({
        default: false
    })
    isFinish: boolean;

    @Column({
        default: false
    })
    hasErrors: boolean;


    async createItself(data) {
        this.product = data.product;
        this.quantity = data.quantity;
    }

}


