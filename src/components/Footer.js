import Link from "next/link";

export default function Footer() {
  return (
    <section className="p-2  ">
      <div className="bg-[#00000020] backdrop-blur-lg py-6 px-4 my-2 text-xs w-full">
        <h1 className="text-2xl text-zinc-200">Let's Get in Touch!</h1>
        <br />
        <p className="text-xs text-zinc-300">
          HMU for work, coffee chats, advice, or LMK about your favourite animes
          :)
        </p>
        <br />
		<div className="flex items-start">
        <div className="flex flex-col gap-1 bg-[#00000035] py-2 px-4 text-white">
          <Link
            className="flex items-center gap-1"
            href="mailto:deepakthapa1423@gmail.com"
          >
            <span className="text-white underline">Gmail</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </Link>
          <Link
            className="flex items-center gap-1"
            href="https://t.me/+919971766493"
          >
            <span className="text-white underline">Telegram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </Link>
          <Link
            className="flex items-center gap-1"
            href="https://wa.me/+919971766493"
          >
            <span className="text-white underline">Whastapp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </Link>
	
        </div>
		        <div className="flex flex-col gap-1 bg-[#00000035] py-2 px-4 text-white">
 <Link
            className="flex items-center gap-1"
            href="https://x.com/deepakisdemigod"
          >
            <span className="text-white underline">X</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </Link>
          <Link
            className="flex items-center gap-1"
            href="https://github.com/deepakisdemigod"
          >
            <span className="text-white underline">Github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </Link>
         	 <Link
            className="flex items-center gap-1"
            href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
          >
            <span className="text-white underline">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </Link>


        </div>
		</div>
      </div>
      <div className="bg-[#00000020] backdrop-blur-lg p-4 text-xs w-full text-white">
        <p className="text-xs">
          Designed and coded by Deepak Thapa -- Made with care, caffeine, and a
          good playlist{" "}
        </p>

        <br />
        <p className="text-xs text-zinc-300">© Deepak Thapa 2025</p>
      </div>
		<br />
    </section>
  );
}
