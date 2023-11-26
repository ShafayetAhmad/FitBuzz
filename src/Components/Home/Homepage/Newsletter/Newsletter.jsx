const Newsletter = () => {
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12 lg:py-16">
          <div className="bg-[#f2f2f7] p-8 text-center sm:p-10 md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Join the Weekly Newsletter
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-[#636262] sm:text-base md:mb-10 lg:mb-12">
              Join our weekly Newsletter to get tips from our highly certified GYM trainers and neutritionists. It is free and will be always free.
            </p>
            <div className="mx-auto mb-4 flex max-w-lg justify-center">
              <form
                name="email-form"
                method="get"
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Subscribe For Free"
                  className="cursor-pointer rounded-md bg-black px-6 py-2 font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
