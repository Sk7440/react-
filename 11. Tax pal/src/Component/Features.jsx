export default function Feat() {
  return (
    <>
      <div className="bg-linear-to-tr from-blue-700 via-blue-600 to-sky-400 py-20 px-4 text-center sm:py-28 sm:px-6">
        <h1 className="mx-auto max-w-4xl text-3xl font-medium tracking-tight text-white sm:text-5xl">
          Everything you need to run your books.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </p>
        <div className="bg-blue-600 p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col space-y-2">
              <button className="group text-left p-6 rounded-2xl transition-colors hover:bg-white/10 focus:outline-none">
                <h3 className="text-lg font-semibold text-white">Payroll</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Keep track of everyone's salaries and whether or not they've been
                  paid. Direct deposit not supported.
                </p>
              </button>

              <button className="group text-left p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-inner focus:outline-none">
                <h3 className="text-lg font-semibold text-white">Claim expenses</h3>
                <p className="mt-2 text-sm text-blue-100">
                  All of your receipts organized into one place, as long as you don't
                  mind typing in the data by hand.
                </p>
              </button>

              <button className="group text-left p-6 rounded-2xl transition-colors hover:bg-white/10 focus:outline-none">
                <h3 className="text-lg font-semibold text-white">VAT handling</h3>
                <p className="mt-2 text-sm text-blue-100">
                  We only sell our software to companies who don't deal with VAT at all,
                  so technically we do all the VAT stuff they need.
                </p>
              </button>

              <button className="group text-left p-6 rounded-2xl transition-colors hover:bg-white/10 focus:outline-none">
                <h3 className="text-lg font-semibold text-white">Reporting</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Easily export your data into an Excel spreadsheet where you can do
                  whatever the hell you want with it.
                </p>
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl bg-slate-900/10 p-2 ring-1 ring-inset ring-white/10 shadow-2xl">
                <img
                  src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.0039g4_zf~-b6.png&w=1200&q=75"
                  alt="Dashboard Expenses Preview"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}