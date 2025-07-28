import React from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";

// UserListPropsインターフェースを定義（タスク1-1-2）
interface UserListProps {
  users: User[];
}

// UserListコンポーネントの定義（タスク1-1-3）
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {/* ユーザー情報を展開して表示（タスク1-1-4） */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;