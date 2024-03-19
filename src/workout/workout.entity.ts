import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Excerise } from 'src/excerise/entities/excerise.entity';
@Table({
  tableName: 'tbl_workout',
})
export class Workout extends Model<Workout> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
  })
  id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  created_at_unix_timestamp: number;
  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  updated_at_unix_timestamp: number;

  @Column({
    type: DataType.DATE,
  })
  deleted_at: string;

  @CreatedAt
  CreatedAt: Date;

  @UpdatedAt
  UpdatedAt: Date;
  // assocation
  @HasMany(() => Excerise)
  exercises: Excerise[];
}
