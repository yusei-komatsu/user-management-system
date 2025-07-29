"use client";

import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { User } from "../../types/User";
import { fetchUsers } from "../../utils/api";
// UserListコンポーネントのインポート（タスク1-3-1）
import UserList from "../../components/UserList"

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // fetchUsersによるデータ取得処理であることを確認（タスク1-3-2）
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (err) {
        setError("ユーザーの取得に失敗しました。" + err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー一覧
      </Typography>
      {/* UserListで一覧を表示するように修正（タスクリスト1-3-3） */}
      <UserList users={users} />
    </Box>
  );
};

export default UsersPage;
