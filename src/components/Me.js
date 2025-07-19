import Link from "next/link";

export default function Me() {
  return (
    <div className="z-20 bg-[#00000020] backdrop-blur-lg py-6 px-4 my-2 text-sm w-full">
      <p>
        I’m a Full stack developer who began their career as the quiet, artsy
        kid at the back of the classroom, constantly doodling in their
        workbooks. My combined passions for art and storytelling brought me
        here, in a position where I can demystify the everyday problems of users
        and empower them with delightful experiences and solutions. I studied
        Electronics and Computer Science at the University of Delhi and as a
        upcoming grad, I'm looking forward to my next chapter!
      </p>
      <br />
      <div className="flex flex-col gap-1 bg-[#00000025] py-2 px-4 text-white">
        <Link
          className="flex items-center gap-1"
          href="/resume-1.pdf"
          download="deepak's resume"
        >
          <span className="text-white underline">Resume</span>
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
  );
}
