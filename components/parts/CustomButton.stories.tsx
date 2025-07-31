// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

// TODO: メタデータのエクスポート
export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};

// TODO: 上記サンプルを参考に[Secondary][Danger]を設定する
export const Secondary: Story = {
  args: {
    variantType: "secondary",
    children: "secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variantType: "danger",
    children: "danger Button",
  },
};

export const HoverHighlightButton: Story = {
  args: {
    variantType: "primary",
    children: "ホバーで強調表示",
    sx: {
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#1565c0",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        transform: "scale(1.20)",
      },
    },
  },
};

export const GradientButton: Story = {
  args: {
    variantType: "secondary",
    children: "グラデーションボタン",
    sx: {
      background: "linear-gradient(to right, #2196F3 10%, #191970 100%)",
      color: "#fff",
      boxShadow: "0 3ps 5px 2px rgba(22, 203, 243, 0.3)",
    },
  },
};

export const PressEffectButton: Story = {
  args: {
    variantType: "danger",
    children: "押した感のあるボタン",
    sx: {
      transition: "all 0.1s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      "&:active": {
        transform: "translateY(2px)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};