// "use client";
// import { useState } from "react";
// import SiteLayout from "@/components/site-layout";
// import { CheckCircle2, Tags, Headphones, Building2, Truck } from "lucide-react";
// export default function TradeRegister() {
//   const [sent, setSent] = useState(false);
//   return (
//     <SiteLayout>
//       <div className="page-banner">
//         <div className="container">
//           <span className="eyebrow" style={{ color: "#63e9a9" }}>
//             For business customers
//           </span>
//           <h1>Trade account registration</h1>
//           <p>
//             Apply for a Global Bargain trade account and access business-focused
//             services.
//           </p>
//         </div>
//       </div>
//       <div className="container">
//         <div className="trade-layout">
//           <div className="panel">
//             <h2>Business details</h2>
//             {sent ? (
//               <div className="status">
//                 Application submitted in demo mode. Connect a backend to process
//                 applications.
//               </div>
//             ) : (
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   setSent(true);
//                 }}
//               >
//                 <div className="form-grid">
//                   <div className="field">
//                     <label>Business name *</label>
//                     <input required />
//                   </div>
//                   <div className="field">
//                     <label>Company number</label>
//                     <input />
//                   </div>
//                   <div className="field">
//                     <label>Contact name *</label>
//                     <input required />
//                   </div>
//                   <div className="field">
//                     <label>Business type *</label>
//                     <select required>
//                       <option value="">Select business type</option>
//                       <option>Retailer</option>
//                       <option>Wholesaler</option>
//                       <option>Online store</option>
//                       <option>Other</option>
//                     </select>
//                   </div>
//                   <div className="field">
//                     <label>Email address *</label>
//                     <input type="email" required />
//                   </div>
//                   <div className="field">
//                     <label>Phone number *</label>
//                     <input required />
//                   </div>
//                   <div className="field full">
//                     <label>Business address *</label>
//                     <input required />
//                   </div>
//                   <div className="field">
//                     <label>Postcode *</label>
//                     <input required />
//                   </div>
//                   <div className="field">
//                     <label>Website (optional)</label>
//                     <input />
//                   </div>
//                   <div className="field full">
//                     <label>Tell us about your business</label>
//                     <textarea rows={4} />
//                   </div>
//                 </div>
//                 <label
//                   style={{
//                     display: "flex",
//                     gap: 8,
//                     fontSize: 11,
//                     margin: "12px 0",
//                   }}
//                 >
//                   <input type="checkbox" required /> I confirm that the
//                   information provided is accurate.
//                 </label>
//                 <button className="btn btn-primary">Submit application</button>
//               </form>
//             )}
//           </div>
//           <aside className="panel">
//             <Building2 size={27} color="var(--green)" />
//             <h2>Trade account benefits</h2>
//             {[
//               [
//                 Tags,
//                 "Competitive trade pricing",
//                 "Access pricing designed for business customers.",
//               ],
//               [
//                 Truck,
//                 "Reliable fulfilment",
//                 "Clear delivery options for your orders.",
//               ],
//               [
//                 Headphones,
//                 "Dedicated support",
//                 "Get help from our customer support team.",
//               ],
//               [
//                 CheckCircle2,
//                 "Account management",
//                 "Keep your business and order information together.",
//               ],
//             ].map(([I, t, d]: any) => (
//               <div className="trade-benefit" key={t}>
//                 <I size={21} />
//                 <div>
//                   <b>{t}</b>
//                   <p
//                     className="muted"
//                     style={{ fontSize: 11, lineHeight: 1.5, margin: "5px 0" }}
//                   >
//                     {d}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </aside>
//         </div>
//       </div>
//     </SiteLayout>
//   );
// }



"use client";

import { useState } from "react";
import SiteLayout from "@/components/site-layout";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  UserRound,
  MapPin,
  ShieldCheck,
  Truck,
  Tags,
  Headphones,
  CheckCircle2,
  LockKeyhole,
  FileCheck,
  Mail,
  Phone,
  Globe,
  Store,
  BriefcaseBusiness,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";

const labelClass =
  "text-[12px] font-bold text-slate-700";

const benefits = [
  {
    icon: Tags,
    title: "Verified trade pricing",
    text: "Wholesale pricing and trade-only ordering for approved retailers.",
  },
  {
    icon: Truck,
    title: "UK delivery support",
    text: "Reliable fulfilment support for your retail business.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    text: "Get assistance with your account and wholesale enquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Secure account access",
    text: "Business applications are reviewed before account approval.",
  },
];

const steps = [
  "Business details",
  "Contact details",
  "Trading address",
  "Verification",
];

export default function TradeRegister() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    companyNumber: "",
    vatNumber: "",
    website: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
    businessDescription: "",
    terms: false,
    ageConfirm: false,
  });

  const update = (name: string, value: string | boolean) => {
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 3));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your registration API here.
    // Do not show an application as submitted until the server confirms it.
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f8f6] text-slate-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#061c16]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(16,185,129,.2),transparent_50%)]" />

          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border border-emerald-400/10" />
          <div className="absolute -right-12 -top-16 h-72 w-72 rounded-full border border-emerald-400/10" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-emerald-300">
                <ShieldCheck size={15} />
                Verified wholesale access
              </div>

              <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Open your
                <span className="block text-emerald-400">
                  Trade Account.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Join Global Bargain as a verified business customer.
                Apply for trade access and discover our wholesale
                catalogue, retailer services and business support.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Business applications
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  Account verification
                </span>
                <span className="flex items-center gap-2">
                  <LockKeyhole size={16} className="text-emerald-400" />
                  Secure access
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_350px]">

            {/* REGISTRATION FORM */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,.05)]">

              {submitted ? (
                <div className="px-6 py-20 text-center sm:px-12">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={42} />
                  </div>

                  <h2 className="mt-6 text-2xl font-black text-slate-900">
                    Registration form completed
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                    Your form is ready for backend integration.
                    Connect your registration API to save the business
                    details and submit the application for review.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(0);
                    }}
                    className="mt-8 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700"
                  >
                    Back to registration
                  </button>
                </div>
              ) : (
                <>
                  {/* FORM HEADER */}
                  <div className="border-b border-slate-100 px-6 py-7 sm:px-9">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[.2em] text-emerald-600">
                          Trade registration
                        </span>
                        <h2 className="mt-2 text-2xl font-black text-slate-900">
                          Business application
                        </h2>
                        <p className="mt-2 text-xs text-slate-500">
                          Complete the information below to apply for
                          wholesale account access.
                        </p>
                      </div>

                      <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 sm:grid">
                        <Building2 size={27} />
                      </div>
                    </div>

                    {/* PROGRESS */}
                    <div className="mt-8">
                      <div className="mb-3 flex justify-between">
                        <span className="text-xs font-bold text-slate-700">
                          Application progress
                        </span>
                        <span className="text-xs font-bold text-emerald-700">
                          {Math.round(((step + 1) / 4) * 100)}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                          style={{
                            width: `${((step + 1) / 4) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="mt-6 grid grid-cols-4 gap-2">
                        {steps.map((item, index) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              if (index <= step) setStep(index);
                            }}
                            className="text-left"
                          >
                            <div
                              className={`mb-2 grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                                step === index
                                  ? "bg-emerald-600 text-white"
                                  : step > index
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              {step > index ? (
                                <CheckCircle2 size={16} />
                              ) : (
                                index + 1
                              )}
                            </div>
                            <span className={`text-[9px] font-bold sm:text-[11px] ${
                              step === index
                                ? "text-emerald-700"
                                : "text-slate-400"
                            }`}>
                              {item}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>

                    {/* STEP 1 */}
                    {step === 0 && (
                      <div className="space-y-7 px-6 py-8 sm:px-9">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                              <Building2 size={20} />
                            </span>
                            <div>
                              <h3 className="font-extrabold text-slate-900">
                                Business information
                              </h3>
                              <p className="mt-1 text-xs text-slate-500">
                                Tell us about your company.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <label className={labelClass}>
                              Business / Trading Name *
                            </label>
                            <input
                              className={inputClass}
                              placeholder="Enter your business name"
                              value={form.businessName}
                              onChange={(e) =>
                                update("businessName", e.target.value)
                              }
                              required
                            />
                          </div>

                          <div>
                            <label className={labelClass}>
                              Business Type *
                            </label>
                            <select
                              className={inputClass}
                              value={form.businessType}
                              onChange={(e) =>
                                update("businessType", e.target.value)
                              }
                              required
                            >
                              <option value="">Select business type</option>
                              <option>Vape Shop / Retailer</option>
                              <option>Convenience Store</option>
                              <option>Wholesaler</option>
                              <option>Distributor</option>
                              <option>Online Retailer</option>
                              <option>Other Registered Business</option>
                            </select>
                          </div>

                          <div>
                            <label className={labelClass}>
                              Company Registration Number
                            </label>
                            <input
                              className={inputClass}
                              placeholder="e.g. 12345678"
                              value={form.companyNumber}
                              onChange={(e) =>
                                update("companyNumber", e.target.value)
                              }
                            />
                          </div>

                          <div>
                            <label className={labelClass}>
                              VAT Registration Number
                            </label>
                            <input
                              className={inputClass}
                              placeholder="Enter VAT number"
                              value={form.vatNumber}
                              onChange={(e) =>
                                update("vatNumber", e.target.value)
                              }
                            />
                          </div>

                          <div>
                            <label className={labelClass}>
                              Business Website
                            </label>
                            <input
                              type="url"
                              className={inputClass}
                              placeholder="https://example.co.uk"
                              value={form.website}
                              onChange={(e) =>
                                update("website", e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                          <div className="flex gap-3">
                            <Store size={20} className="shrink-0 text-emerald-700" />
                            <p className="text-xs leading-6 text-slate-600">
                              We welcome applications from legitimate UK
                              retailers, vape shops, convenience stores,
                              distributors and other eligible trade buyers.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {step === 1 && (
                      <div className="space-y-7 px-6 py-8 sm:px-9">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                            <UserRound size={20} />
                          </span>
                          <div>
                            <h3 className="font-extrabold text-slate-900">
                              Contact information
                            </h3>
                            <p className="mt-1 text-xs text-slate-500">
                              Who should we contact about your application?
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <label className={labelClass}>
                              Contact Person / Full Name *
                            </label>
                            <input
                              className={inputClass}
                              placeholder="Enter your full name"
                              value={form.contactName}
                              onChange={(e) =>
                                update("contactName", e.target.value)
                              }
                              required
                            />
                          </div>

                          <div>
                            <label className={labelClass}>
                              Business Email Address *
                            </label>
                            <div className="relative">
                              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input
                                type="email"
                                className={`${inputClass} pl-11`}
                                placeholder="name@business.co.uk"
                                value={form.email}
                                onChange={(e) =>
                                  update("email", e.target.value)
                                }
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className={labelClass}>
                              Business Phone Number *
                            </label>
                            <div className="relative">
                              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input
                                type="tel"
                                className={`${inputClass} pl-11`}
                                placeholder="+44"
                                value={form.phone}
                                onChange={(e) =>
                                  update("phone", e.target.value)
                                }
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 */}
                    {step === 2 && (
                      <div className="space-y-7 px-6 py-8 sm:px-9">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                            <MapPin size={20} />
                          </span>
                          <div>
                            <h3 className="font-extrabold text-slate-900">
                              Trading address
                            </h3>
                            <p className="mt-1 text-xs text-slate-500">
                              Provide your registered or trading address.
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <label className={labelClass}>
                              Business Address *
                            </label>
                            <input
                              className={inputClass}
                              placeholder="Street address and building"
                              value={form.address}
                              onChange={(e) =>
                                update("address", e.target.value)
                              }
                              required
                            />
                          </div>

                          <div>
                            <label className={labelClass}>City / Town *</label>
                            <input
                              className={inputClass}
                              placeholder="Enter city"
                              value={form.city}
                              onChange={(e) =>
                                update("city", e.target.value)
                              }
                              required
                            />
                          </div>

                          <div>
                            <label className={labelClass}>Postcode *</label>
                            <input
                              className={inputClass}
                              placeholder="e.g. M7 1SL"
                              value={form.postcode}
                              onChange={(e) =>
                                update("postcode", e.target.value)
                              }
                              required
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label className={labelClass}>Country *</label>
                            <select
                              className={inputClass}
                              value={form.country}
                              onChange={(e) =>
                                update("country", e.target.value)
                              }
                              required
                            >
                              <option>United Kingdom</option>
                              <option>Other</option>
                            </select>
                          </div>

                          <div className="sm:col-span-2">
                            <label className={labelClass}>
                              Tell us about your business
                            </label>
                            <textarea
                              rows={4}
                              className={inputClass}
                              placeholder="Describe your business and trading activities..."
                              value={form.businessDescription}
                              onChange={(e) =>
                                update("businessDescription", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 4 */}
                    {step === 3 && (
                      <div className="space-y-7 px-6 py-8 sm:px-9">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                            <FileCheck size={20} />
                          </span>
                          <div>
                            <h3 className="font-extrabold text-slate-900">
                              Verification & confirmation
                            </h3>
                            <p className="mt-1 text-xs text-slate-500">
                              Review your details before continuing.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                          <h4 className="mb-4 text-sm font-extrabold text-slate-900">
                            Application summary
                          </h4>

                          {[
                            ["Business", form.businessName],
                            ["Business type", form.businessType],
                            ["Contact", form.contactName],
                            ["Email", form.email],
                            ["Phone", form.phone],
                            ["Address", `${form.address}, ${form.city}, ${form.postcode}`],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="flex justify-between gap-4 border-b border-slate-200 py-3 last:border-0"
                            >
                              <span className="text-xs text-slate-500">
                                {label}
                              </span>
                              <span className="max-w-[65%] text-right text-xs font-bold text-slate-800">
                                {value || "Not provided"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                          <input
                            type="checkbox"
                            checked={form.ageConfirm}
                            onChange={(e) =>
                              update("ageConfirm", e.target.checked)
                            }
                            required
                            className="mt-1 h-4 w-4 accent-emerald-600"
                          />
                          <span className="text-xs leading-6 text-slate-600">
                            I confirm that I am authorised to apply on
                            behalf of this business and that the business
                            meets the applicable eligibility requirements.
                          </span>
                        </label>

                        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                          <input
                            type="checkbox"
                            checked={form.terms}
                            onChange={(e) =>
                              update("terms", e.target.checked)
                            }
                            required
                            className="mt-1 h-4 w-4 accent-emerald-600"
                          />
                          <span className="text-xs leading-6 text-slate-600">
                            I confirm that the information provided is
                            accurate and agree to the applicable
                            <a href="/pages/terms-and-conditions" className="mx-1 font-bold text-emerald-700">
                              Terms & Conditions
                            </a>
                            and
                            <a href="/pages/privacy-policy" className="mx-1 font-bold text-emerald-700">
                              Privacy Policy
                            </a>.
                          </span>
                        </label>

                        <div className="rounded-xl bg-emerald-50 p-4">
                          <p className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                            <ShieldCheck size={17} />
                            What happens next?
                          </p>
                          <p className="mt-2 text-xs leading-6 text-emerald-900/70">
                            Your business information will be reviewed.
                            Approved accounts can receive access to
                            wholesale pricing and trade ordering.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* NAVIGATION */}
                    <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-6 py-5 sm:px-9">
                      <button
                        type="button"
                        onClick={previousStep}
                        disabled={step === 0}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-600 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <ArrowLeft size={15} />
                        Back
                      </button>

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:bg-emerald-700"
                        >
                          Continue
                          <ArrowRight size={15} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:bg-emerald-700"
                        >
                          Complete Application
                          <CheckCircle2 size={16} />
                        </button>
                      )}
                    </div>
                  </form>
                </>
              )}
            </section>

            {/* SIDEBAR */}
            <aside className="space-y-5 lg:sticky lg:top-6">

              {/* BENEFITS */}
              <div className="overflow-hidden rounded-2xl bg-[#061c16] p-6 text-white shadow-xl shadow-slate-900/10">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                  <BadgeCheck size={25} />
                </div>

                <h2 className="mt-5 text-xl font-black">
                  Why open a trade account?
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Business-focused wholesale access and support
                  for eligible UK retailers.
                </p>

                <div className="mt-7 space-y-6">
                  {benefits.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-400">
                        <Icon size={19} />
                      </span>
                      <div>
                        <h3 className="text-xs font-extrabold">{title}</h3>
                        <p className="mt-1 text-[11px] leading-5 text-slate-400">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROCESS */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-extrabold text-slate-900">
                  How it works
                </h3>

                <div className="mt-6 space-y-5">
                  {[
                    ["01", "Submit application", "Complete your business information."],
                    ["02", "Application review", "Our team reviews your trade details."],
                    ["03", "Account approval", "Approved retailers receive trade access."],
                  ].map(([number, title, description]) => (
                    <div key={number} className="flex gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-xs font-black text-emerald-700">
                        {number}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">
                          {title}
                        </h4>
                        <p className="mt-1 text-[11px] leading-5 text-slate-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUPPORT */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2">
                  <Headphones size={19} className="text-emerald-600" />
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Need assistance?
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Contact our team if you have questions about
                  your trade application.
                </p>

                <a
                  href="mailto:info@globalbargain.co.uk"
                  className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-emerald-50"
                >
                  <Mail size={17} className="text-emerald-600" />
                  <span className="text-xs font-bold text-slate-700">
                    info@globalbargain.co.uk
                  </span>
                </a>

                <a
                  href="tel:+447438088313"
                  className="mt-2 flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-emerald-50"
                >
                  <Phone size={17} className="text-emerald-600" />
                  <span className="text-xs font-bold text-slate-700">
                    +44 7438 088313
                  </span>
                </a>

                <p className="mt-4 text-[10px] leading-5 text-slate-400">
                  13 Overbridge Rd, Salford M7 1SL, United Kingdom
                </p>
              </div>

              {/* EXISTING ACCOUNT */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-sm font-extrabold text-slate-900">
                  Already have an account?
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Sign in to your existing trade account.
                </p>
                <a
                  href="/login"
                  className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-600 hover:text-white"
                >
                  Trade Login
                  <ArrowRight size={15} />
                </a>
              </div>
            </aside>
          </div>

          {/* BOTTOM TRUST STRIP */}
          <section className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-3">
            {[
              [LockKeyhole, "Private business information"],
              [FileCheck, "Application verification"],
              [Clock3, "Review before trade access"],
            ].map(([Icon, title]: any) => (
              <div key={title} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon size={19} />
                </span>
                <span className="text-xs font-bold text-slate-700">
                  {title}
                </span>
              </div>
            ))}
          </section>

          <p className="mx-auto mt-8 max-w-3xl text-center text-[10px] leading-6 text-slate-400">
            Global Bargain provides wholesale services for verified
            trade customers. Nicotine is an addictive chemical.
            Product supply is subject to applicable UK laws and
            regulatory requirements.
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
