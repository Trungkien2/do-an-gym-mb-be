import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Workout } from 'src/workout/workout.entity';
@Table({
  tableName: 'tbl_excerise',
})
export class Excerise extends Model<Excerise> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
  })
  id: string;

  @ForeignKey(() => Workout)
  @Column({ field: 'workout_id', type: DataType.UUID })
  workout_id: string;

  @BelongsTo(() => Workout)
  Workout: Workout;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  prelude: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  duration: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link: string;
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
}
