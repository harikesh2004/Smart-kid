import { Button } from "@nextui-org/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="bg-[#cad3ff]">
      <Header />
      <Hero />
    </div>
  );
}
