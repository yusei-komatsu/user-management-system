import type { Meta, StoryObj } from '@storybook/react';
import UserDetails from './UserDetails';

// Meta情報を定義（タスク3-2-2.a）
const meta: Meta<typeof UserDetails> = {
  title: 'Components/UserDetails',
  component: UserDetails,
};

export default meta;

// StoryObjを使ってストーリー定義（タスク3-2-2.b）
type Story = StoryObj<typeof UserDetails>;

// デフォルトストーリーの設定（タスク3-2-2.c）
export const Default: Story = {
  args: {
      user: {id: 1, name: "山田 太郎", email: "taro.yamada@example.com", role: "admin", deleted: false}
  },
};
