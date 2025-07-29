import React from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";
import { useState } from "react"; 

// UserListPropsインターフェースを定義（タスク1-1-2）
interface UserListProps {
  users: User[];
}

// UserListコンポーネントの定義（タスク1-1-3）
const UserList: React.FC<UserListProps> = ({ users }) => {

  // useStateで表示するユーザー情報をstate管理する（タスク2-3-3.a）
  const [visibleUsers, setVisibleUsers] = useState<User[]>(users);

  // onDelete関数を定義し、削除対象IDを一致する要素をfilterで除外する（タスク2-3-3.b）
  const handleDelete = (userId: number) => {
    setVisibleUsers(preview => preview.filter(user => user.id !== userId));
  };

  return (
    <div>
      {/* ユーザー情報を展開して表示（タスク1-1-4） */}
      {visibleUsers.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;