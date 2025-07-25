// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import React from 'react';
import { useRouter } from 'next/navigation';
import RegisterForm from '../../components/RegisterForm';
// import { Typography, Box } from '@mui/material';

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
// 新規登録時にユーザー一覧へ遷移できるように設定（タスク1-3-2.c）
const RegisterPage: React.FC = () => {
  const router = useRouter();
  return (
    <RegisterForm
      onSuccess={() => router.push("/users")}
      onError={(error) => alert("登録に失敗しました:" + error)}
    />
  );
};

export default RegisterPage;