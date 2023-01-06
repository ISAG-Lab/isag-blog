import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed bottom-0 z-50 left-0 w-full border-t-[1px] border-t-[#888787] bg-[#1E1E1E] p-3 lg:top-0 lg:min-h-screen lg:w-fit lg:border-t-0 lg:border-r-[1px] lg:border-r-[#888787]">
      <nav className="relative flex h-full w-full items-center justify-center">
        <Link href="/" className="absolute top-0 left-0 hidden lg:block">
          <Image src="/isag-logo.png" alt="isag logo" width="32" height="32" />
        </Link>
        <div className="flex w-full flex-row justify-around text-[#D8D8D8] lg:flex-col lg:justify-center lg:space-y-12">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              width="24"
              height="24"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </Link>
          <Link href={""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              width="24"
              height="24"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
