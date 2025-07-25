// components/RegisterForm.stories.tsx

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

// TODO: メタデータ
// Meta型を用いてStorybookのメタデータを定義（タスク1-2-2.a）
const meta: Meta<typeof RegisterForm> = {
  title: "components/RegisterForm",
  component: RegisterForm,
};

export default meta;

// TODO: ストーリーの定義
// StoryObj<typeof RegisterForm> を使用してストーリーを定義（タスク1-2-2.b）
type Story = StoryObj<typeof RegisterForm>;

// TODO: デフォルトストーリーの設定
// デフォルトストーリーの設定（タスク1-2-2.c）
export const Default: Story = {
  args: {
    onSuccess: () => alert("登録に成功しました"),
    onError: (error) => alert("登録に失敗しました" + error)
  },
};
