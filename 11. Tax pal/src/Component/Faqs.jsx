export default function Faqs() {
  let data = [
    {
      questions: "Does TaxPal handle VAT?",
      answers:
        "Well no, but if you move your company offshore you can probably ignore it.",
    },
    {
      questions: "What was that testimonial about tax fraud all about?",
      answers:
        "TaxPal is just a software application, ultimately your books are your responsibility.",
    },
    {
      questions: "How do you generate reports?",
      answers:
        "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
    },
    {
      questions: "Can I pay for my subscription via purchase order?",
      answers: "Absolutely, we are happy to take your money in all forms.",
    },
    {
      questions: "How do I apply for a job at TaxPal?",
      answers:
        "We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.",
    },
    {
      questions:
        "TaxPal sounds horrible but why do I still feel compelled to purchase?",
      answers:
        "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions",
    },
    {
      questions:
        "I found other companies called TaxPal, are you sure you can use this name?",
      answers:
        "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
    },
    {
      questions: "Does TaxPal handle VAT?",
      answers:
        "Well no, but if you move your company offshore you can probably ignore it.",
    },
    {
      questions: "Does TaxPal handle VAT?",
      answers:
        "Well no, but if you move your company offshore you can probably ignore it.",
    },
  ];
  return (
    <>
      <div className="relative overflow-hidden bg-linear-to-r from-slate-50 via-purple-50/30 to-sky-100/50 py-20 px-6 sm:py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl text-left ">
            <h1 className=" text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              If you can’t find what you’re looking for, email our support team
              and if you’re lucky someone will get back to you.
            </p>
          </div>
               <div className="flex items-center justify-center flex-wrap">

      {data.map((ele) => {
          return (
              <>
            <div className=" p-8 max-w-lg">
              <h3 className="text-xl font-medium tracking-tight text-slate-900">
                {ele.questions}{" "}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {ele.answers}
              </p>
            </div>
          </>
        );
    })}
    </div>
        </div>
      </div>
 
    </>
  );
}
