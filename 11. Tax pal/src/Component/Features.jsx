export default function Feat(){
    return(
        <>
        <div className="bg-linear-to-tr from-blue-700 via-blue-600 to-sky-400 py-20 px-4 text-center sm:py-28 sm:px-6">
        <h1 className="mx-auto max-w-4xl text-3xl font-medium tracking-tight text-white sm:text-5xl">
          Everything you need to run your books.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </p>
        <div>
          <button>
            Payroll
            <p>
              Keep track of everyone's salaries and whether or not they've been
              paid. Direct deposit not supported.
            </p>
          </button>
        </div>
      </div></>
    )
}