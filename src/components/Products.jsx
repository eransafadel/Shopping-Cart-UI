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

  console.log("cat is:", cat);
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
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

  }, [products, cat, filters]);


  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
