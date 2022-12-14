import React from "react";
import DetailItem from "./components/DetailItem";

function BookDetail() {
  const BookItem = {
    name: "One Piece - Tập 99: “Luffy Mũ Rơm” (Bản Bìa Cứng) - Limited Edition - Tặng Kèm Postcard PVC Luffy",
    author: "Eiichiro Oda",
    thumbnail:
      "https://cdn0.fahasa.com/media/catalog/product/8/9/8935244874983_1.jpg",
    form: "Bìa cứng",
    supplier: "NXB Kim Đồng",
    publish: "NXB Kim Đồng",
    price: "150000",
    rating: 4,
  };

  return (
    <div>
      <DetailItem BookItem={BookItem} />
    </div>
  );
}

export default BookDetail;
