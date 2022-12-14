import { Box, Rating, Typography } from "@mui/material";
import React from "react";

function Book() {
  const book = {
    name: "Kẻ Thù Không Đội Trời Chung Của Tôi Cuối Cùng Cũng Phá Sản - Tập 3 - Tặng Kèm Postcard Bồi Cứng + Bookmark Bồi Cứng",
    price: 30000,
    rating: 4,
    img: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935244880533.jpg",
  };
  return (
    <div
      className="book-container"
      style={{
        maxWidth: "300px",
        minHeight: "330px",
        background: "#fff",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "300px",
          }}
        >
          <img
            src={book.img}
            alt="book"
            style={{
              width: "200px",
              objectFit: "contain",
            }}
          ></img>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            maxHeight: "2.8em",
            mminHeight: "2.8em",
            lineHeight: "1.4em",
            textAlign: "left",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": " 2",
            "-webkit-box-orient": "vertical",
          }}
        >
          {book.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            fontWeight: "600",
            color: "#D22121",
          }}
        >
          <span>{book.price}đ</span>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "auto",
          }}
        >
          <Rating value={book.rating} readOnly size="small" />
        </Box>
      </Box>
    </div>
  );
}

export default Book;
