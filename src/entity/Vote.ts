import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Vote {
  @Column({type: 'int'})
  value: number;

  @PrimaryColumn("int")
  userId: number;

  @PrimaryColumn("int")
  postId: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Post)
  @JoinColumn()
  post: Post;
}