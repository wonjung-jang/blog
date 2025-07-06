import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 px-2 border-b border-gray100 color-bg-0">
      <div className="flex justify-between items-center max-w-4xl h-24 mx-auto">
        <h1 className="header-large">
          <Link className="hover:text-lime-500" href="/">
            원정 기록
          </Link>
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4">
            <Link className="hover:text-lime-500 leading-[1.125rem]" href="/">
              개발 원정 기록
            </Link>
            <Link
              className="hover:text-lime-500 leading-[1.125rem]"
              href="/daily"
            >
              일상 원정 기록
            </Link>
            <Link className="hover:text-lime-500 leading-[1.125rem]" href="/me">
              나
            </Link>
          </div>
          <div className="w-px color-bg-2 h-4"></div>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/wonjung-jang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/%EC%9B%90%EC%A0%95-%EC%9E%A5-7ab179335/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
