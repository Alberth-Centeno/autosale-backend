import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Costumer } from "../../costumers/entities/costumers.entity";

@Entity('sales')
export class Sale {
    @PrimaryGeneratedColumn('increment', { type: 'int4' })
    id: number;

    @Column({ type: 'int4' })
    vehicle_id: number;

    @Column({ type: 'int4' })
    customer_id: number;

    @Column({ type: 'int4' })
    total: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    deleted_at: Date;

    @ManyToOne(() => Costumer, (costumer) => costumer.sales, { 
        nullable: false,
        onDelete: 'RESTRICT'   
    })
    @JoinColumn({ name: 'customer_id' })  
    customer: Costumer;
}