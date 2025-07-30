// components/parts/CustomButton.tsx

import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "danger";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  ...props
}) => {
  let color: ButtonProps["color"] = "primary";

  // TODO: variantTypeに応じてcolorを変化させる
  // colorに設定する色は調べて実装する
  switch (variantType) {
    case "secondary":
      color = "secondary";
      break;
    case "danger":
      color = "error";
      break;
    case "primary":
    default:
      color = "primary";
      break;
  }

  return (
    // TODO: <Button>の実装
    // プロップスには[color][variant]を設定し、{...props}を最後に設定する
    <Button color={color} variant="contained" {...props} />
  );
};

export default CustomButton;
