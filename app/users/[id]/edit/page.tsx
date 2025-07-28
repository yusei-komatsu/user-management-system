// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm";
import { useParams, useRouter } from "next/navigation";
import { Typography, Box } from "@mui/material";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  // URLからユーザーIDを取得して数値型に変換、userIdに格納（タスク2-3-2.a）
  const userId = Number(params.id);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      <EditUserForm
        userId={userId}
        onSuccess={() => router.push("/users")}
        onError={(error) => alert("更新に失敗しました:" + error)}
      />
    </Box>
  );
};

export default EditUserPage;
