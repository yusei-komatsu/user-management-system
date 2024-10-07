'use client';

import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { useParams, useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Box, Alert, CircularProgress } from '@mui/material';
import { User } from '../../../../types/User';
import { fetchUserById, fetchUsers, updateUser } from '../../../../utils/api';

interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

const EditUserPage: React.FC = () => {
  const router = useRouter();
  const id = useParams().id;

  const { register, handleSubmit, formState: { errors } } = useForm<EditUserFormInputs>();
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const fetchedUser = await fetchUserById(Number(id));
        console.log(fetchUsers);
        setUser(fetchedUser);
      } catch (err) {
        setError('ユーザーの取得に失敗しました。' + err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getUser();
    }
  }, [id]);

  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      await updateUser(Number(id), data);
      router.push('/users');
    } catch (err) {
      setError('ユーザーの更新に失敗しました。' + err);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!user) {
    return <Alert severity="error">ユーザーが見つかりません。</Alert>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="名前"
          defaultValue={user.name}
          {...register('name', { required: '名前は必須です。' })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          margin="normal"
        />
        <TextField
          label="メール"
          defaultValue={user.email}
          {...register('email', { 
            required: 'メールは必須です。',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '有効なメールアドレスを入力してください。',
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          margin="normal"
        />
        <TextField
          label="役割"
          defaultValue={user.role}
          {...register('role', { required: '役割は必須です。' })}
          error={!!errors.role}
          helperText={errors.role?.message}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          更新
        </Button>
      </form>
    </Box>
  );
}

export default EditUserPage;