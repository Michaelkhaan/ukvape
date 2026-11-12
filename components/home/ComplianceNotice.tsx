export default function ComplianceNotice() {
  return (
    <section className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
      <p className="text-xs font-black uppercase tracking-widest text-amber-900">
        Important product information
      </p>

      <p className="mt-2 text-xs leading-6 text-amber-900/80">
        Nicotine is highly addictive. Information and catalogue access are
        intended for verified UK trade customers aged 18 and over. All products
        must be verified for applicable UK regulatory compliance before being
        listed or supplied.
      </p>
    </section>
  );
}