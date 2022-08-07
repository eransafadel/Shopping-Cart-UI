import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { getProducts } from "../api";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap:wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {


  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const requestProducts = async () => {
      try {
        const res = await getProducts(cat);
        setProducts(res.data);
      }
      catch (err) { console.log(err); }
    }
    requestProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {

            return item[key].includes(value.toLowerCase());
          }

          )
        )
      );

  }, [products, cat, filters]);


  useEffect(() => {


    if (sort === "newest") {

      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }

    else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const filteredProductsShow = filteredProducts.map((item) => (
    <Product item={item} key={item.id}></Product>
  ));

  const productsShow = products.slice(0, 8)
  .map((item) => (
  <Product item={item} key={item.id}></Product>));



  return (
    <Container>
      {cat ? filteredProductsShow : productsShow}
    </Container>
  );
};

export default Products;
