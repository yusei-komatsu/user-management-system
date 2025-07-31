// components/parts/CustomModal.stories.tsx

import React, { useState, useEffect } from "react";
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

export const SlideInModal: Story = {
  render: () => {
    const[open, setOpen] = useState(false);
    return (
      <Box>
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          スライドインモーダルを開く
        </CustomButton>
        <CustomModal
          title="スライドイン確認"
          content="下からスライドインします"
          open={open}
          onClose={() => setOpen(false)}
          slideDirection="up"
        />
      </Box>
    );
  },
};

export const SlideOutModal: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <CustomButton variantType="primary" onClick={() => setOpen(false)}>
          スライドアウトモーダル
        </CustomButton>

        <CustomModal
          open={open}
          title="スライドアウト確認"
          content="このモーダルは閉じるときにスライドアウトします"
          onClose={() => setOpen(false)}
          slideDirection="up"
        />
      </>
    );
  },
};

export const ModalWithTimerClose: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <CustomButton variantType="primary" onClick={() => setOpen(false)}>
          10秒後に閉じるモーダルを開く
        </CustomButton>

        <CustomModal
          open={open}
          title="自動で閉じるモーダル"
          content="このモーダルは10秒後に自動で閉じます"
          onClose={() => setOpen(false)}
          autoCloseDelay={10000}
        />
      </>
    );
  },
};