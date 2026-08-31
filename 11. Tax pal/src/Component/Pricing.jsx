export default function Pricing() {
  let data = [
    {
      price: "9$",
      paragraph:
        "Good for anyone who is self-employed and just getting started.",
      heading: "starter",
      features: [
        "Send 10 quotes and invoices",
        "Connect up to 2 bank accounts",
        "Track up to 15 expenses per month",
        "Track up to 15 expenses per month",
        "Manual payroll support",
        "Export up to 3 reports",
      ],
    },
    {
      price: "15$",
      paragraph:
        "Good for anyone who is self-employed and just getting started.",
      heading: "recomended",
      features: [
        "Connect up to 2 bank accounts",
        "Track up to 15 expenses per month",
        "Track up to 15 expenses per month",
        "Track up to 15 expenses per month",
        "Manual payroll support",
        "Export up to 3 reports",
      ],
    },
    {
      price: "55$",
      paragraph:
        "Good for anyone who is self-employed and just getting started.",
      heading: "business",
      features: [
        "Send 10 quotes and invoices",
        "Send 10 quotes and invoices",
        "Send 10 quotes and invoices",
        "Export up to 3 reports",
        "Manual payroll support",
        "Manual payroll support",
      ],
    },
  ];
  return (
    <>
      <div className="bg-slate-900 py-20 px-4 text-center sm:py-28 mt-30  sm:px-6">
        <h1 className="mx-auto max-w-4xl text-3xl font-medium tracking-tight text-white sm:text-5xl">
          <span className="relative inline-block">
            <span className="relative z-10">Simple pricing</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 281 40"
              preserveAspectRatio="none"
              className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
              />
            </svg>
          </span>
          , for everyone.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          It doesn’t matter what size your business is, our software won’t work
          well for you.
        </p>
        <div className="flex mt-10 items-center justify-center">
          {data.map((ele) => {
            return (
              <>
                <div className="flex flex-col rounded-3xl bg-slate-900 p-8 text-white max-w-sm">
                  <p className="text-5xl font-light tracking-tight text-white">
                    {ele.price}
                  </p>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {ele.heading}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {ele.paragraph}
                  </p>

                  <a
                    href="#"
                    className="mt-8 block rounded-full border border-slate-700 py-2.5 px-3 text-center text-sm font-semibold text-white hover:border-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-slate-800 transition-colors"
                  >
                    Get started
                  </a>
                    {ele.features.map((ele) => {
                      return (
                        <span className="mt-8 flex items-center justify-center gap-1.5 text-sm text-slate-300">
                          <>
                            <svg
                              aria-hidden="true"
                              class="h-6 w-6 flex-none fill-current stroke-current text-white"
                            >
                              <path
                                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                stroke-width="0"
                              ></path>
                              <circle
                                cx="12"
                                cy="12"
                                r="8.25"
                                fill="none"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></circle>
                            </svg>

                            {ele}
                            <br />
                          </>
                        </span>
                      );
                    })}
                  </div>
                ;
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
