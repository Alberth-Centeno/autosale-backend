import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}