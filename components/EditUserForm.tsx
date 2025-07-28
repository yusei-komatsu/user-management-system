// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "../types/User";
import { useRouter } from "next/navigation";
import { error } from "console";

// 必要に応じて利用する
// EditUserFormPropsインターフェースの定義（タスク2-1-2）
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

// propsで外部からデータ・更新関数を受け取れるよう設定（タスク2-1-3）
interface EditUserFormProps {
  userId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
// Reactフックフォームの初期化
const EditUserForm: React.FC<EditUserFormProps> = ({ userId, onSuccess, onError }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditUserFormInputs>();

// 初期データ取得
useEffect (() => {
  const loadUser = async () => {
    try {
      const user: User | null = await fetchUserById(userId);
      if (user) {
        setValue("name", user.name);
        setValue("email", user.email);
        setValue("role", user.role);
      } else {
        setError("対象のユーザーが見つかりませんでした");
        if (onError) onError("ユーザーが見つかりません")
      } 
    } catch (error) {
      if (onError) onError(error);
      setError("ユーザー情報が取得できませんでした");
    }
  };

  loadUser();
}, [userId, setValue]);

const onSubmit: SubmitHandler<EditUserFormInputs> = async (data: EditUserFormInputs) => {
  try {
    await updateUser( userId, data );
    if (onSuccess) onSuccess();
    router.push("/users");
  } catch (error) {
    if (onError) onError(error);
    setError("更新できませんでした")
  }  
};

  return (
    <>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          ユーザー情報編集
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="名前"
          margin="normal"
          {...register("name")}
        />
        <TextField
          fullWidth
          label="メール"
          margin="normal"
          {...register("email")}
        />
        <TextField
          fullWidth
          label="ロール"
          margin="normal"
          {...register("role")}
        />
        <Button type="submit" variant="contained" fillWidth sx={{ mt: 2 }}>
          更新
        </Button>
      </form>
    </>
  );
};

export default EditUserForm;

