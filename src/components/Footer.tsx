import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navigation } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#180735] mt-10 py-10 text-zinc-300">
      <Container className="flex items-center justify-between">
        <Logo className="text-white" spanClassName="bg-white text-black" />
        <ul className="flex gap-6 items-center justify-center">
          {navigation.map((item) => (
            <Link href={item?.href} key={item?._id}>
              <li className="hover:text-white duration-200">{item?.title}</li>
            </Link>
          ))}
        </ul>
        <p className="text-right">Join me with @reactbd.com</p>
      </Container>
    </div>
  );
};

export default Footer;
