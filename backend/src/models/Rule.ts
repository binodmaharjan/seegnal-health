import { DataTypes } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

@Table({
  tableName: "rules",
  timestamps: true,
})
export class Rule extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataTypes.JSONB,
    allowNull: false,
    unique: true,
  })
  combination!: object;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  severity!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  color!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  alert!: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: "created_at",
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    field: "updated_at",
  })
  updatedAt!: Date;
}
