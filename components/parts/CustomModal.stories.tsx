// components/parts/CustomModal.stories.tsx

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "../../components/parts/CustomModal";
import CustomButton from "../../components/parts/CustomButton";
import { Box } from "@mui/material";

// TODO: メタデータ
const meta: Meta<typeof CustomModal> = {
  title: "Components/Parts/CustomModal",
  component: CustomModal,
  tags: ["autodocs"],
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof CustomModal>;

// TODO: デフォルトストーリーの作成
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        {/* TODO: クリックでモーダル開閉させる */}
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
          // TODO: Propを渡す
          // onCloceはsetOpenにfalseを渡す
          // onConfirmはalert()を使ってクリックしたことを知らせて
          // setOpenにfalseを渡す
          title="削除の確認"
          content="本当に削除しますか？"
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("削除されました");
            setOpen(false);
          }}
        />
      </Box>
    );
  },
};
