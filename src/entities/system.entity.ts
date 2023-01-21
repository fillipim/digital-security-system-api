import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("systems")
export class System {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100})
    description: string

    @Column({ length: 100})
    acronym: string

    @Column({ length: 100, nullable: true})
    systemEmail: string

    @Column({ length: 50, nullable: true})
    url: string

    @Column({default: "ativo"})
    status: string

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length: 100, default: null})
    lastChangeUser: string

    @Column({length: 500, default: null})
    justificationChange: string
};