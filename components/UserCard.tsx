// DeleteUserButtonをインポートする（タスク2-3-2.a）
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { User } from "../types/User";
import DeleteUserButton from "./DeleteUserButton";

// UserCardコンポーネントのPropsにonDeleteを追加する（タスク2-3-2.b）
interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
}

// もともとの削除ボタンをDeleteUserButtonに置き換える（タスク2-3-2.c）
const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>
          編集
        </Button>
        <DeleteUserButton userId={user.id} onDelete={onDelete} />
      </CardActions>
    </Card>
  );
};

export default UserCard;
