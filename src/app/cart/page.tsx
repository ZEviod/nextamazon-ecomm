import Cart from "@/components/Cart";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const page = () => {
  return (
    <Container>
      <Title title="Your Cart" />
      <Cart />
    </Container>
  );
};

export default page;
