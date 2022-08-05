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

  console.log(cat);
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
          {
            
           return item[key].includes(value.toLowerCase())
          }

          )
        )
      );

  }, [products, cat, filters]);

console.log("filter products is :",filteredProducts);
  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
