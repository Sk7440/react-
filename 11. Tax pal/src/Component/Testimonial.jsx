export default function Test() {
  let data = [
    {
      paragraph:
        "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      name: "Sheryl Berge",
      designation: "CEO at Lynch LLC",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.13bt_uc4mpo7z.png&w=64&q=75",
    },
    {
      paragraph:
        "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      name: "Leland Kiehn",
      designation: "Founder of Kiehn and Sons",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.13bt_uc4mpo7z.png&w=64&q=75",
    },
    {
      paragraph:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      name: "Peter Renolds",
      designation: "Founder of West Inc",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.13bt_uc4mpo7z.png&w=64&q=75",
    },
    {
      paragraph:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      name: "Amy Hahn",
      designation: "Director at Velocity Industries",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.13bt_uc4mpo7z.png&w=64&q=75",
    },
    {
      paragraph:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      name: "Erin Powlowski",
      designation: "COO at Armstrong Inc",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.13bt_uc4mpo7z.png&w=64&q=75",
    },
    {
      paragraph:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      name: "Amy Hahn",
      designation: "Director at Velocity Industries",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.13bt_uc4mpo7z.png&w=64&q=75",
    },
  ];
  return (
    <>
      <section className="py-12 sm:py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base lg:text-lg">
            Our software is so simple that people can’t help but fall in love with
            it. Simplicity is easy when you just skip tons of mission-critical
            features.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center items-stretch">
            {data.map((ele, index) => (
              <figure
                key={ele.id || index}
                className="relative flex flex-col justify-between w-full max-w-sm rounded-2xl bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/10 border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-900/15"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 105 78"
                  className="absolute top-6 left-6 h-12 w-auto sm:h-16 fill-slate-100 opacity-60 pointer-events-none"
                >
                  <path d="M0 78V39L39 0h26L39 39h26v39H0Zm39 0V39L78 0h26L78 39h26v39H39Z" />
                </svg>

                <blockquote className="relative z-10">
                  <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
                    {ele.paragraph}
                  </p>
                </blockquote>

                <figcaption className="relative z-10 mt-6 sm:mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base font-semibold text-slate-900">
                      {ele.name}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-slate-500">
                      {ele.designation}
                    </div>
                  </div>
                  <img
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-slate-100"
                    src={ele.src}
                    alt={ele.name || "User Avatar"}
                  />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
