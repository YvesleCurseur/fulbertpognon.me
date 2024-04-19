import Link from "next/link";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <div className="w-1/2 sticky max-sm:w-2/3">
      <h1 className="underline underline-offset-2 mb-4">Projects</h1>

      <h2 className="mb-4 text-4xl font-bold">2024</h2>
      <h3 className="mb-4 font-bold underline">News AI</h3>
      <div className="flex max-sm:block">
        <div className="mb-4 max-sm:text-lg max-sm:ml-0">
          <p className="text-justify">{t("newsai")}</p>
          <div className="flex space-x-5 mt-4">
            <a
              href="https://github.com/YvesleCurseur/ai-tvt-news"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:animate-pulse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="text-sm">Code</p>
            </a>
            <br />
            <a
              href="https://daily-news-tvt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:animate-pulse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-1"
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
              <p className="text-sm">Live</p>{" "}
            </a>
          </div>
        </div>
      </div>

      <hr className="mb-4" />

      <h2 className="mb-4 text-4xl font-bold">2023</h2>
      <div className="flex space-x-2">
        <h3 className="mb-4 font-bold underline">MiabuSusu</h3>

        <p className="text-xs text-gray-500 text-center mt-1">
          (In refactoring)
        </p>
      </div>
      {/* Stack */}
      <div className="flex mb-1">
        {/* Backend */}
        <svg
          width="26px"
          height="26px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="stack-svg"
        >
          <path
            d="M14.135,4H18.1V22.169a26.218,26.218,0,0,1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322,0-4,2.673-6.6,6.816-6.6a6.448,6.448,0,0,1,1.724.2V4Zm0,9.142a3.992,3.992,0,0,0-1.337-.2c-2,0-3.163,1.223-3.163,3.366,0,2.087,1.107,3.239,3.138,3.239a9.355,9.355,0,0,0,1.362-.1v-6.3Z"
            fill="#44b78b"
          />
          <path
            d="M24.4,10.059v9.1c0,3.133-.235,4.639-.923,5.938A6.316,6.316,0,0,1,20.237,28l-3.678-1.733A5.708,5.708,0,0,0,19.7,23.638c.566-1.121.745-2.42.745-5.837V10.059Z"
            fill="#44b78b"
          />
          <rect
            x="20.441"
            y="4.02"
            width="3.964"
            height="4.028"
            fill="#44b78b"
          />
        </svg>
        <p className="ml-1 cursor-pointer">(Django)</p>

        {/* Frontend */}


      </div>
      <div className="flex max-sm:block">
        <div className="mb-4 max-sm:text-lg max-sm:ml-0">
          <p className="text-justify">{t("miabususu")}</p>
          <div className="flex space-x-5 mt-4">
            <a
              href="https://github.com/YvesleCurseur/miabu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:animate-pulse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="text-sm">Code</p>
            </a>
            <br />
            <a
              href="https://miabususu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:animate-pulse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-1"
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
              <p className="text-sm">Live</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-right">
        <Link href="/" className="cursor-pointer relative group">
          <span className="absolute h-0 -left-6 transform -translate-y-1/2 z-10 transition-transform ease-in group-hover:-translate-x-1/2">
            {"<"}--
          </span>
          <span>Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
