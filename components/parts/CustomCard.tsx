// components/parts/CustomCard.tsx

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  SxProps,
  Theme,
} from "@mui/material";

// TODO: インターフェースを修正
interface CustomCardProps {
  title: string | React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
  sx,
  children,
}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        {children}
        {/* TODO: [titel]と[description]を表示 */}
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: "pre-line" }}
        >
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;
