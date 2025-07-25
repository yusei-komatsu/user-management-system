import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ユーザー管理システム
        </Typography>
        <Button color="inherit" component={Link} href="/">
          ホーム
        </Button>
        <Button color="inherit" component={Link} href="/users">
          ユーザー一覧
        </Button>
        {/* 新規登録登録ページへのリンク（タスク1-3-1.b） */}
        <Button color="inherit" component={Link} href="/register">
          新規登録
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
