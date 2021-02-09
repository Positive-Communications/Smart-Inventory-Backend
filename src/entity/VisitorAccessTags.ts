import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Gate from "./Gate";
import Branch from "./Branch";
import readGateByID from "../helpers/R/ByID/ReadGateByID";
import readBranchByID from "../helpers/R/ByID/ReadBranchByID";
import saveGates from "../helpers/C/Multiple/SaveGates";

@Entity()
export default class VisitorAccessTags {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tagType: string;

    @Column()
    userName: string;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: string;

    @Column()
    identificationImage: string;

    @Column()
    visitorsCompany: string;

    @Column()
    designation: string;

    @Column()
    phone: string;

    @Column()
    mobile: string;

    @Column()
    email: string;

    @Column()
    expiry: string;

    @ManyToOne(type => Gate, gate => gate.visitorEntries)
    entryGate: Gate;

    @ManyToOne(type => Gate, gate => gate.visitorExit)
    exitGate: Gate;

    @ManyToOne(type => Branch, branch => branch.visitors)
    branch: Branch

    @OneToMany(type => Gate, gate => gate.visitorAccess)
    @JoinTable()
    accessGates: Gate[]

    async createItSelf(data) {
        this.tagType = data.tagType;
        this.userName = data.userName;
        this.identificationType = data.identificationType;
        this.identificationNumber = data.identificationNumber;
        this.identificationImage = data.identificationImage;
        this.visitorsCompany = data.visitorsCompany;
        this.designation = data.designation;
        this.phone = data.phone;
        this.mobile = data.mobile;
        this.email = data.email;
        this.expiry = data.expiry;
        this.entryGate = await readGateByID(data.entryGateID);
        this.exitGate = await readGateByID(data.exitGateID);
        this.branch = await readBranchByID(data.branchID);
        this.accessGates = await saveGates(data.gates);
    }

}