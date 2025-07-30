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
import CustomButton from "./parts/CustomButton";
import { deleteUser } from "@/utils/api";

// UserCardコンポーネントのPropsにonDeleteを追加する（タスク2-3-2.b）
interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
}

// もともとの削除ボタンをDeleteUserButtonに置き換える（タスク2-3-2.c）
// 該当ユーザーのidをもとに詳細画面に遷移するボタンを設置（タスク3-3-4.b）
const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const handleDelete = async () => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await deleteUser(user.id);
        onDelete(user.id);
      } catch (error) {
        alert("削除できませんでした: " + error);
      }
    }
  };

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
        <Button size="small" component={Link} href={`/users/${user.id}/details`}>
          詳細
        </Button>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>
          編集
        </Button>
        <CustomButton variantType="danger" onClick={handleDelete}>
          削除
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
