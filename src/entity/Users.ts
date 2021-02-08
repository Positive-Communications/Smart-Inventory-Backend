import
{
    Column, Entity, JoinColumn,
    ManyToOne, OneToOne,
    PrimaryGeneratedColumn
}
    from "typeorm";

import * as bcrypt from "bcryptjs";
import UserPrivileges from "./UserPrivileges";
import Branch from "./Branch";
import Carrier from "./Carrier";

@Entity()
export default class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userPicture: string;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: string;

    @Column()
    identificationPhoto: string;

    @Column()
    designation: string;

    @Column()
    isCarrier: boolean;

    @Column()
    departmentWorkArea: string;

    @Column()
    phone: string;

    @Column()
    mobile: string;

    @Column()
    email: string;

    @Column()
    joined: string;

    @ManyToOne(type => Branch, branch => branch.users)
    branch: Branch;

    @OneToOne(type => UserPrivileges, privilege => privilege.user)
    @JoinColumn()
    privileges: UserPrivileges;

    @OneToOne(type => Carrier, carrier => carrier.user)
    carrier: Carrier;


    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}