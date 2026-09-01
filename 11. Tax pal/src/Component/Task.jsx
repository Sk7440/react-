export default function Task() {
  return (
    <>
      <section className="py-12 sm:py-20 lg:py-28">
  <div className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
      Simplify everyday business tasks.
    </h1>
    <p className="mt-4 text-sm text-slate-600 sm:text-base lg:text-lg">
      Because you’d probably be a little confused if we suggested you
      complicate your everyday business tasks instead.
    </p>
  </div>

  <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-y-10 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8">
      <div className="flex flex-col items-start">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
          <svg aria-hidden="true" className="h-9 w-9" fill="none">
            <defs>
              <linearGradient
                id="_R_2meavb_"
                x1="11.5"
                y1="18"
                x2="36"
                y2="15.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".194" stopColor="#fff" />
                <stop offset="1" stopColor="#6692F1" />
              </linearGradient>
            </defs>
            <path
              d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
              stroke="url(#_R_2meavb_)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 sm:mt-6 text-sm font-semibold text-blue-600">
          Reporting
        </h3>
        <h2 className="mt-2 text-lg sm:text-xl font-medium tracking-tight text-slate-900">
          Stay on top of things with always up-to-date reporting features.
        </h2>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
          We talked about reporting in the section above but we needed three
          items here, so mentioning it one more time for posterity.
        </p>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-500">
          <svg aria-hidden="true" className="h-9 w-9" fill="none">
            <path
              opacity=".5"
              d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
            <path
              opacity=".3"
              d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
            <path
              d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
          </svg>
        </div>
        <h3 className="mt-4 sm:mt-6 text-sm font-semibold text-slate-500">
          Inventory
        </h3>
        <h2 className="mt-2 text-lg sm:text-xl font-medium tracking-tight text-slate-600">
          Never lose track of what’s in stock with accurate inventory
          tracking.
        </h2>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-500">
          We don’t offer this as part of our software but that statement is
          inarguably true. Accurate inventory tracking would help you for
          sure.
        </p>
      </div>

      <div className="flex flex-col items-start md:col-span-2 lg:col-span-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-500">
          <svg aria-hidden="true" className="h-9 w-9" fill="none">
            <path
              opacity=".5"
              d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
              fill="#fff"
            />
            <path
              d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
              fill="#fff"
            />
          </svg>
        </div>
        <h3 className="mt-4 sm:mt-6 text-sm font-semibold text-slate-500">
          Contacts
        </h3>
        <h2 className="mt-2 text-lg sm:text-xl font-medium tracking-tight text-slate-600">
          Organize all of your contacts, service providers, and invoices in
          one place.
        </h2>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-500">
          This also isn’t actually a feature, it’s just some friendly
          advice. We definitely recommend that you do this, you’ll feel
          really organized and professional.
        </p>
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 p-4 sm:p-8 lg:p-16">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900/5 p-1.5 sm:p-2 ring-1 ring-inset ring-slate-900/10">
        <img
          src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.179~l78jss2x3.png&w=1080&q=75"
          alt="Contacts Dashboard Preview"
          className="w-full h-auto rounded-lg sm:rounded-xl shadow-xl lg:shadow-2xl ring-1 ring-slate-900/10 object-cover"
        />
      </div>
    </div>
  </div>

  <div className="mt-12 sm:mt-20 lg:mt-28 bg-linear-to-tr from-indigo-600 via-blue-600 to-sky-400 py-12 px-4 text-center sm:py-20 sm:px-6 lg:py-28 lg:px-8">
    <h2 className="mx-auto max-w-4xl text-2xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
      Get started today
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100 sm:text-base lg:text-lg">
      It’s time to take control of your books. Buy our software so you can
      feel like you’re doing something productive.
    </p>
    <div className="mt-6 sm:mt-8 flex justify-center">
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-blue-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-200 transition-colors"
      >
        Get 6 months free
      </a>
    </div>
  </div>
</section>
    </>
  );
}
