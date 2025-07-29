// components/RegisterForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { createUser } from "../utils/api";

// RegisterFormPropsインターフェースの定義（タスク1-1-2）
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

// propsで外部からデータ・登録関数を受け取れるよう設定（タスク1-1-3）
interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError }) => {
  // 必要に応じて利用する
  const allowedRoles = ["admin", "member"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  // 1-1-4.　新規登録処理の実装（タスク1-1-4）
  const onSubmit: SubmitHandler<RegisterFormInputs> = async (
    data: RegisterFormInputs
  ) => {
    try {
      await createUser(data);
      console.log("登録情報:", data);

      if (onSuccess) onSuccess();
      console.log("登録に成功しました");
    } catch (error) {
      if (onError) onError(error);
      console.log("登録に失敗しました");
    }
  };

  // 登録用フォームの実装（タスク1-1-5）
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="名前"
          margin="normal"
          {...register("name", {
            required: { value: true, message: "名前は入力必須です。" },
            maxLength: {
              value: 10,
              message: "名前は10文字以内で入力してください。",
            },
            pattern: {
              value:
                /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}\p{Script=Latin}0-9\s]+$/u,
              message: "絵文字や記号は使用できません",
            },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          fullWidth
          label="メール"
          margin="normal"
          {...register("email", {
            required: {
              value: true,
              message: "メールアドレスは入力必須です。",
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "無効なメールアドレスの形式です。",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="ロール"
          {...register("role", {
            required: { value: true, message: "役割は入力必須です。" },
            validate: (value) =>
              allowedRoles.includes(value) ||
              "adminかmemberを入力してください。",
          })}
          error={!!errors.role}
          helperText={errors.role?.message}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          登録
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
