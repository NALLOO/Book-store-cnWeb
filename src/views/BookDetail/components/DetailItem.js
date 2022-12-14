import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";

export default function DetailItem(props) {
  const { BookItem } = props;
  return (
    <div
      style={{
        paddingTop: "100px",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          padding: "20px",
          maxWidth: "1200px",
          display: "flex",
          gap: "15px",
        }}
      >
        <Box>
          <img
            src={BookItem.thumbnail}
            alt="thumbnail"
            style={{ width: "390px", height: "420px" }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "8px",
                border: "2px solid #C92127",
                color: "#C92127",
                fontSize: "14px",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#fff",
                  borderColor: "#C92127",
                  borderWidth: "2px",
                },
              }}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                background: "#C92127",
                width: "190px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#C92127",
                },
              }}
            >
              Mua ngay
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ textAlign: "left" }}>
            One Piece - Tập 99: “Luffy Mũ Rơm” (Bản Bìa Cứng) - Limited Edition
            - Tặng Kèm Postcard PVC Luffy
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box sx={{ width: "60%", display: "flex", gap: "5px" }}>
                <span>Nhà cung cấp:</span>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  {BookItem.supplier}
                </div>
              </Box>
              <Box sx={{ width: "40%", display: "flex", gap: "5px" }}>
                <span>Tác giả:</span>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  {BookItem.author}
                </div>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "60%", display: "flex", gap: "5px" }}>
                <span>Nhà xuất bản:</span>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  {BookItem.publish}
                </div>
              </Box>
              <Box sx={{ width: "40%", display: "flex", gap: "5px" }}>
                <span>Hình thức bìa:</span>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  {BookItem.form}
                </div>
              </Box>
            </Box>
            <Box>
              <Rating value={BookItem.rating} readOnly></Rating>
            </Box>
            <Box>
              <Typography variant="h4">{}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
