import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";

export default function Work() {
  return (
    <section className="relative flex flex-col items-start justify-start max-w-[320px] overflow-hidden text-zinc-400 font-light">
      <div className="bg-[#ff6a0021] backdrop-blur-lg rounded-md p-4 mx-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <Image
              className="rounded-md"
              style={{ opacity: "0.9" }}
              width={25}
              height={25}
              src="https://img.eselt.de/img/18133277_45YJmXWcAUhA0Qf4/ad.jpg"
              alt="sripatro-logo"
            />
            <h2 className="text-xl font-thin">SriPatro</h2>

	  <Link href="https://sripatro.com">
	  <span className="bg-red-800 text-white text-[10px] font-thin  rounded-lg px-1">https://sripatro.com</span>
	  </Link>	
          </div>
          <Link href="https://sripatro.com">
            <ArrowSquareOut
              size={19}
              weight="bold"
              className="text-zinc-200 "
            />
          </Link>
        </div>

        <div className="my-2">
          <p className="text-xs">
            Full Stack Software Developer at SriPatro, Managing Design, Database
            and Developement.
          </p>
        </div>

        <Image
          className="rounded-md"
          style={{ opacity: "0.6" }}
          width={150}
          height={70}
          src="https://img.eselt.de/img/18133492_rlg6LLOvVCBdSkrG/ad.jpg"
          alt="sripatro-logo"
        />
      </div>
    </section>
  );
}
