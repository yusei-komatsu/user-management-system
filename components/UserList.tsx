import React, { useState } from "react";
import { User } from "../types/User";
import CustomCard from "./parts/CustomCard";
import CustomButton from "./parts/CustomButton";
import Link from "next/link";
import { deleteUser } from "@/utils/api";

// UserListPropsインターフェースを定義（タスク1-1-2）
interface UserListProps {
  users: User[];
}

// UserListコンポーネントの定義（タスク1-1-3）
const UserList: React.FC<UserListProps> = ({ users }) => {
  // useStateで表示するユーザー情報をstate管理する（タスク2-3-3.a）
  const [visibleUsers, setVisibleUsers] = useState<User[]>(users);
  const handleDelete = async (userId: number) => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await deleteUser(userId);
        setVisibleUsers((preview) =>
          preview.filter((user) => user.id !== userId)
        );
      } catch (error) {
        alert("削除できませんでした: " + error);
      }
    }
  };

  return (
    <div>
      {/* ユーザー情報を展開して表示（タスク1-1-4） */}
      {visibleUsers.map((user) => (
        <CustomCard
          key={user.id}
          title={user.name}
          description={
            `メール: ${user.email}\n` +
            `役割: ${user.role}`
          }
          actions={
            <>
              <CustomButton
                variantType="primary"
                component={Link}
                href={`/users/${user.id}/details`}
              >
                詳細
              </CustomButton>
              <CustomButton
                variantType="primary"
                component={Link}
                href={`/users/${user.id}/edit`}
              >
                更新
              </CustomButton>
              <CustomButton
                variantType="danger"
                onClick={() => handleDelete(user.id)}
              >
                削除
              </CustomButton>
            </>
          }
        />
      ))}
    </div>
  );
};

export default UserList;