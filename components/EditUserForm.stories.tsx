// components/EditUserForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import EditUserForm from "./EditUserForm";

// TODO: メタデータ
// Meta型を用いてStorybookのメタデータを定義（タスク2-2-2.a）
const meta: Meta<typeof EditUserForm> = {
  title: "components/EditUserForm",
  component: EditUserForm,
}

export default meta;

// TODO: ストーリーの定義
// StoryObj<typeof EditUserForm> を使用してストーリーを定義（タスク2-2-2.b）
type Story = StoryObj<typeof EditUserForm>;


// デフォルトストーリーの設定（タスク2-2-2.c）
export const Default: Story = {
  args: {
    userId: 1, // 例となるユーザーID
    onSuccess: () => alert("更新に成功しました"),
    onError: (error) => alert("登録に失敗しました" + error),
  },
};
