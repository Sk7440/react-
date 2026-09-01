export default function Footer() {
  return (
    <>
     <footer className="bg-slate-50 border-t border-slate-100">
  <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center">
      <div className="flex items-center gap-x-2.5 sm:gap-x-3">
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 fill-current"
        >
          <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0Zm0 36c-8.837 0-16-7.163-16-16H20v16Z" />
        </svg>
        <span className="text-lg sm:text-xl font-bold text-slate-900">
          Tax<span className="text-blue-600">Pal</span>
        </span>
      </div>
    </div>

    <nav className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-8 text-xs sm:text-sm font-medium text-slate-700">
      <a href="#features" className="hover:text-slate-900 transition-colors">
        Features
      </a>
      <a href="#testimonials" className="hover:text-slate-900 transition-colors">
        Testimonials
      </a>
      <a href="#pricing" className="hover:text-slate-900 transition-colors">
        Pricing
      </a>
    </nav>

    <div className="mt-8 sm:mt-12 border-t border-slate-200/60" />

    <div className="mt-6 sm:mt-8 flex flex-col-reverse items-center justify-between gap-y-4 text-center sm:flex-row sm:text-left">
      <p className="text-xs sm:text-sm text-slate-500">
        Copyright © 2026 TaxPal. All rights reserved.
      </p>

      <div className="flex items-center space-x-6 text-slate-400">
        <a href="#" className="hover:text-slate-600 transition-colors" aria-label="X (Twitter)">
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a href="#" className="hover:text-slate-600 transition-colors" aria-label="GitHub">
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}