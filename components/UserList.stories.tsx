import type { Meta, StoryObj } from '@storybook/react';
import UserList from './UserList';

// Meta情報を定義（タスク1-2-2.a）
const meta: Meta<typeof UserList> = {
  title: 'Components/UserList',
  component: UserList,
};

export default meta;

// StoryObjを使ってストーリー定義（タスク1-2-2.b）
type Story = StoryObj<typeof UserList>;

// デフォルトストーリーの設定（タスク1-2-2.c）
export const Default: Story = {
  args: {
    users: [
      { id: 1, name: '山田 太郎', email: 'taro.yamada@example.com', role: '管理者', deleted: false },
      { id: 2, name: '鈴木 花子', email: 'hanako.suzuki@example.com', role: '一般', deleted: false }
    ]
  },
};
