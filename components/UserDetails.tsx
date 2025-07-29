import React from "react";
import { User } from "../types/User"
import { Card, CardContent, Typography } from "@mui/material";

// UserDetailsPropsインターフェースの定義（タスク3-1-2）
interface UserDetailsProps {
  user: User;
}

// コンポーネントの定義（タスク3-1-3）
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        {/* 表示内容の構成（タスク3-1-4） */}
        {/* MUIを利用したレイアウトの調整（タスク3-1-5） */}
        <Typography>ID:{user.id}</Typography>
        <Typography>名前:{user.name}</Typography>
        <Typography>メール:{user.email}</Typography>
        <Typography>役割:{user.role}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserDetails;