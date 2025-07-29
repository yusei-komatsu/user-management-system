"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from "react";
import UserDetails from "../../../../components/UserDetails";
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { User } from "@/types/User";
import { fetchUserById } from "@/utils/api";

// useParamsを使用して、idを取得し数値に変換（タスク3-3-2）
const UserDetailsPage: React.FC = () => {
  const params = useParams();
  const userId = Number(params.id);
  
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await fetchUserById(userId);
        if (!fetchedUser) {
          setError("ユーザーが見つかりませんでした。");
        } else {
          setUser(fetchedUser);
        }
      } catch(error) {
        setError("ユーザー情報が取得できませんでした" + error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <Box sx={{ m:4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細
      </Typography>
      {user && <UserDetails user={user} />}
    </Box>
  );
};

export default UserDetailsPage;