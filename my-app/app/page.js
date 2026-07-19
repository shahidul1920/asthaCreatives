import Button from "@/components/Button";
import Image from "next/image";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 font-poppins">
      <HomePage />
      <Button>Click Me</Button>
    </div>
  );
}
