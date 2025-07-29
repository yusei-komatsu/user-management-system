"use client"

import React from "react"
import { Button } from "@mui/material"
import { deleteUser } from "@/utils/api"

// DeleteUserButtonPropsを定義（タスク2-1-2-2）
interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

// DeleteUserButtonコンポーネントの中身を作成（タスク2-1-2-3）
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    // ユーザーに削除確認（タスク2-1-2-4）
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await deleteUser(userId);
        onDelete(userId);
      } catch (error) {
        alert("削除できませんでした" + error)
      }
    }
  };

  return (
    <Button color="error" onClick={handleDelete}>
      削除
    </Button>
  )
};

export default DeleteUserButton;