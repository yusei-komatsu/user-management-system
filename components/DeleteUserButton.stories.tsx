import type { Meta, StoryObj } from '@storybook/react';
import DeleteUserButton from './DeleteUserButton';

// Meta情報を定義（タスク2-2-2.a）
const meta: Meta<typeof DeleteUserButton> = {
  title: 'Components/DeleteUserButtont',
  component: DeleteUserButton,
};

export default meta;

// StoryObjを使ってストーリー定義（タスク2-2-2.b）
type Story = StoryObj<typeof DeleteUserButton>;

// デフォルトストーリーの設定（タスク2-2-2.c）
export const Default: Story = {
  args: {
      userId: 1,
      onDelete: (userId) => alert(`ユーザーID ${userId} を削除しました`)
  },
};
