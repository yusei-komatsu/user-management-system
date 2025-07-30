import React, { useState } from "react";
import { User } from "../types/User";
import CustomCard from "./parts/CustomCard";
import CustomButton from "./parts/CustomButton";
import Link from "next/link";
import { deleteUser } from "@/utils/api";
import CustomModal from "./parts/CustomModal";

// UserListPropsインターフェースを定義（タスク1-1-2）
interface UserListProps {
  users: User[];
}

// UserListコンポーネントの定義（タスク1-1-3）
const UserList: React.FC<UserListProps> = ({ users }) => {
  // useStateで表示するユーザー情報をstate管理する（タスク2-3-3.a）
  const [visibleUsers, setVisibleUsers] = useState<User[]>(users);
  const [open, setOpen] = useState(false);
  const [targetUserId, setTargetUserId] = useState<number | null>(null);
  const handleDelete = async (userId: number) => {
    try {
      await deleteUser(userId);
      setVisibleUsers((preview) =>
        preview.filter((user) => user.id !== userId)
      );
    } catch (error) {
      alert("削除できませんでした: " + error);
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
                onClick={() => {
                  setTargetUserId(user.id);
                  setOpen(true);}}
              >
                削除
              </CustomButton>

              {targetUserId !== null && (
                <CustomModal
                  title="削除の確認"
                  content="本当に削除しますか？"
                  open={open}
                  onClose={() => {
                    setOpen(false);
                    setTargetUserId(null);
                  }}
                  onConfirm={() => {
                    if (targetUserId !== null) handleDelete(targetUserId);
                    setOpen(false);
                  }}
                />
              )}
            </>
          }
        />
      ))}
    </div>
  );
};

export default UserList;