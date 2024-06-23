import Container from "@/components/Container";
import Product from "@/components/Product";
import { getPhoneCases } from "@/helpers";
import React from "react";

const page = async () => {
  const products = await getPhoneCases();
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
        <h2>Phone Cases</h2>
        <p>Get the Phonecase you want</p>
      </div>
      <p className="mt-4 text-zinc-500 font-semibold">
        Showing all {products.length} results
      </p>
      <Product products={products} />
    </Container>
  );
};

export default page;
