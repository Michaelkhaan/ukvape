import { homeFAQs } from "@/lib/homepage-data";

export default function FAQSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Need help?
          </span>
          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {homeFAQs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-slate-900">
                {faq.question}
                <span className="text-xl text-emerald-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}