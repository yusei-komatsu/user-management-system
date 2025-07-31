// components/parts/CustomCard.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { Box, Chip } from "@mui/material";

// TODO: メタデータ
const meta: Meta<typeof CustomCard> = {
  title: "Components/Parts/CustomCard",
  component: CustomCard,
  tags: ["autodocs"],
};
export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: "カードタイトル",
    description: "これはカスタムカードの説明です。",
    actions: (
      <>
        <CustomButton variantType="secondary">アクション1</CustomButton>
        <CustomButton variantType="danger">アクション2</CustomButton>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: "アクションなしのカード",
    description: "アクションが含まれていないカードの説明。",
  },
};

export const CardWithImage = {
  args: {
    title: "画像付きカード",
    description: "これは画像が含まれたカードです",
    actions: (
      <>
        <CustomButton variantType="primary">詳細</CustomButton>
        <CustomButton variantType="primary">編集</CustomButton>
        <CustomButton variantType="danger">削除</CustomButton>
      </>
    ),

    sx: {
      display: "flex",
      flexDirection: "column",
    },

    children: (
      <img
        src="https://source.unsplash.com/random/400x20"
        alt="カードの画像"
        style={{
          width: "100%",
          borderRadius: "8px 8px 0 0",
          objectFit: "cover",
        }}
      />
    ),
  },
};

export const ExpandableCard = {
  render: () => {
    const fullDescription =
      "山田 太郎は、日本の政治家、実業家、教育者。自由民主党所属の参議院議員。参議院地方創生及びデジタル社会の形成等に関する特別委員長。表現の自由を守る会会長。エンターテイメント表現の自由の会名誉顧問。YouTuber。";
    const [expanded, setExpanded] = useState(false);

    return (
      <CustomCard
        title="展開式カード"
        description={
          expanded ? fullDescription : `${fullDescription.slice(0, 40)}...`
        }
        actions={
          <CustomButton
            variantType="primary"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "閉じる" : "もっと見る"}
          </CustomButton>
        }
      />
    );
  },
};

export const CardWithStatusBadge: Story = {
  args: {
    title: (
      <Box display="flex" alignItems="center" gap={1}>
        <span>山田太郎</span>
        <Chip
          label="オンライン"
          color="success"
          size="small"
          sx={{ fontSize: "0.75rem", height: "20px" }}
        />
      </Box>
    ),
    description: "オンライン状態",
    actions: (
      <>
        <CustomButton variantType="primary">メッセージ</CustomButton>
        <CustomButton variantType="danger">ブロック</CustomButton>
      </>
    ),
  },
};
