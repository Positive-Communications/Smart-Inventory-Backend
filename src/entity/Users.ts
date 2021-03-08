import
{
    Column, Entity, JoinColumn, JoinTable,
    ManyToOne, OneToMany, OneToOne,
    PrimaryGeneratedColumn
}
    from "typeorm";

import * as bcrypt from "bcryptjs";
import UserPrivileges from "./UserPrivileges";
import Branch from "./Branch";
import Carrier from "./Carrier";
import PackingTags from "./PackingTags";
import readBranchByID from "../helpers/R/ByID/ReadBranchByID";
import Orders from "./Orders";
import saveUserPrivileges from "../helpers/C/singles/SaveUserPrivileges";
import Company from "./Company";

@Entity()
export default class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userPicture: string;

    @Column({
        unique: true
    })
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

    @OneToOne(type=>Company, company=>company.superAdmin)
    isSuper: Company;

    @ManyToOne(type => Branch, branch => branch.users)
    branch: Branch;

    @OneToOne(type => UserPrivileges, privilege => privilege.user)
    @JoinColumn()
    privileges: UserPrivileges;

    @OneToOne(type => Carrier, carrier => carrier.user)
    carrier: Carrier;

    @OneToOne(type => PackingTags, parking => parking.driver)
    parkingTags: PackingTags;


    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }


    async createItSelf(data) {

        this.privileges = await saveUserPrivileges(data.privileges)
        this.branch = await readBranchByID(data.branchID);
        this.identificationNumber = data.identificationNumber;
        this.identificationType = data.identificationType;
        this.userPicture = data.userPicture;
        this.userName = data.userName;
        this.password = data.password;
        this.identificationPhoto = data.identificationPhoto;
        this.designation = data.designation;
        this.isCarrier = data.isCarrier;
        this.departmentWorkArea = data.departmentWorkArea;
        this.phone = data.phone;
        this.mobile = data.mobile;
        this.email = data.email;
        this.joined = data.joined;
        this.hashPassword();
    }


    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}