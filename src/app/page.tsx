import Image from "next/image";
import hero from "@/../public/hero.jpeg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
        <div className={`max-w-[500px] ${inter.className}`}>
          <h1 className="font-bold text-4xl">Welcome to My Website</h1>
          <p className="font-normal text-2xl my-5 text-justify text-[#4c4c4c]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </p>
          <button className="bg-[#121212] px-8 py-3 text-white text-2xl font-normal">
            Contact US
          </button>
        </div>
        <div>
          <Image src={hero} alt="" width={500} height={400} />
        </div>
      </div>
    </div>
  );
}
