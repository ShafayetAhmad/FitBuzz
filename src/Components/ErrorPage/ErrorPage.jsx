import { useEffect } from "react";
import errorIcon from "/404.webp";
const ErrorPage = () => {
  useEffect(() => {
    document.title = "FitBuzz | Error Page";
  }, []);
  return (
    <section>
      <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src={errorIcon}
            alt=""
            className="mx-auto mb-8 rounded-full inline-block h-56 w-56 flex-none object-cover"
          />
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8">
            The page you tried to visit does not exist.
          </p>
          <a
            href="/"
            className="inline-block items-center bg-sky-300 px-8 py-4 text-center font-semibold text-black"
          >
            Back Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
