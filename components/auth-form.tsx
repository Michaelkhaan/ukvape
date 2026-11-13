
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  ShoppingBag,
  UserRound,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function AuthForm({
  mode,
}: {
  mode: "login" | "register";
}) {
  const [sent, setSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isLogin = mode === "login";

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f5f7fa] px-4 py-12 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#079b57]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#20e980]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Top heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#079b57]/15 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#079b57]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#079b57]">
              Global Bargain Account
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#17242d] sm:text-4xl lg:text-5xl">
            {isLogin ? (
              <>
                Welcome <span className="text-[#079b57]">back.</span>
              </>
            ) : (
              <>
                Start shopping <span className="text-[#079b57]">smarter.</span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#69756f] sm:text-base">
            {isLogin
              ? "Sign in to access your account, manage orders and continue your shopping experience."
              : "Create your account and enjoy a simpler way to manage your shopping and orders."}
          </p>
        </div>

        {/* Main card */}
        <div className="grid overflow-hidden rounded-[28px] border border-[#e1e8ee] bg-white shadow-[0_25px_80px_rgba(23,36,45,0.09)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left panel */}
          <div className="relative isolate flex flex-col justify-between overflow-hidden bg-[#031713] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(32,233,128,0.23),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(7,155,87,0.3),transparent_40%)]" />

            <div className="absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full border border-[#20e980]/15" />
            <div className="absolute -right-12 top-44 -z-10 h-48 w-48 rounded-full border border-[#20e980]/20" />

            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20e980] text-[#031713] shadow-lg shadow-[#20e980]/20">
                  <ShoppingBag size={23} strokeWidth={2.5} />
                </div>

                <div>
                  <span className="block text-xl font-extrabold tracking-tight">
                    Global Bargain
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9ab5a8]">
                    Wholesale & Retail
                  </span>
                </div>
              </Link>
            </div>

            {/* Main content */}
            <div className="my-14">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#20e980]/20 bg-[#20e980]/10 px-3 py-2 text-xs font-semibold text-[#56e7a4]">
                <CheckCircle2 size={14} />
                Your shopping journey starts here
              </span>

              <h2 className="max-w-md text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-4xl">
                {isLogin
                  ? "Everything you need, all in one place."
                  : "Create your account and make shopping easier."}
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#a5b9b0]">
                {isLogin
                  ? "Access your personal account and stay connected with your orders, saved details and trade services."
                  : "Join Global Bargain to manage your account details, keep track of orders and explore trade account services."}
              </p>

              <div className="mt-9 space-y-5">
                {[
                  {
                    icon: ShoppingBag,
                    title: "Order management",
                    desc: "Keep track of your orders",
                  },
                  {
                    icon: UserRound,
                    title: "Personal account",
                    desc: "Manage your details and addresses",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trade services",
                    desc: "Explore wholesale account options",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#20e980]/20 bg-[#20e980]/10 text-[#56e7a4]">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-[#9ab5a8]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom text */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs leading-6 text-[#9ab5a8]">
                A simpler way to manage your shopping experience.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#079b57]">
                {isLogin ? "Welcome again" : "Get started today"}
              </p>

              <h2 className="text-2xl font-extrabold tracking-tight text-[#17242d] sm:text-3xl">
                {isLogin ? "Sign in to your account" : "Create your account"}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#69756f]">
                {isLogin
                  ? "Enter your credentials to continue."
                  : "Complete the details below to get started."}
              </p>
            </div>

            {sent ? (
              <div className="rounded-2xl border border-[#079b57]/20 bg-[#e4f5ec] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#079b57] text-white">
                  <CheckCircle2 size={25} />
                </div>

                <h3 className="text-lg font-extrabold text-[#17242d]">
                  {isLogin
                    ? "Sign-in form submitted"
                    : "Registration form submitted"}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#69756f]">
                  This is currently a demo form. Authentication is not
                  connected yet.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm font-bold text-[#079b57] hover:underline"
                >
                  Go back to form
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#17242d]">
                      Full name
                    </label>

                    <div className="relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e]"
                      />
                      <input
                        required
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className="h-13 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-4 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#17242d]">
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e]"
                    />
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="h-13 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-4 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#17242d]">
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e]"
                    />

                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      minLength={6}
                      autoComplete={
                        isLogin ? "current-password" : "new-password"
                      }
                      className="h-13 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-12 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98a49e] transition hover:text-[#079b57]"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#17242d]">
                      Confirm password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e]"
                      />

                      <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        minLength={6}
                        autoComplete="new-password"
                        className="h-13 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-12 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98a49e] transition hover:text-[#079b57]"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-[#69756f]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-[#079b57]"
                      />
                      Remember me
                    </label>

                    <Link
                      href="/login"
                      className="text-xs font-bold text-[#079b57] transition hover:text-[#056b3d]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}

                {!isLogin && (
                  <p className="text-xs leading-5 text-[#87928c]">
                    By creating an account, you agree to our website terms
                    and privacy policy.
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#079b57] px-6 text-sm font-extrabold text-white shadow-lg shadow-[#079b57]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#067d47] hover:shadow-xl hover:shadow-[#079b57]/25 active:translate-y-0"
                >
                  {isLogin ? "Sign in to account" : "Create my account"}

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}

            {/* Switch form */}
            <div className="mt-8 border-t border-[#e1e8ee] pt-6 text-center">
              <p className="text-sm text-[#69756f]">
                {isLogin
                  ? "Don't have an account yet?"
                  : "Already have an account?"}{" "}
                <Link
                  href={isLogin ? "/register" : "/login"}
                  className="font-extrabold text-[#079b57] transition hover:text-[#056b3d]"
                >
                  {isLogin ? "Create account" : "Sign in"}
                </Link>
              </p>
            </div>

            {/* Trade account */}
            <Link
              href="/trade-register"
              className="group mt-5 flex items-center justify-between gap-4 rounded-2xl border border-[#e1e8ee] bg-[#f9fbfa] p-4 transition hover:border-[#079b57]/40 hover:bg-[#e4f5ec]/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e4f5ec] text-[#079b57]">
                  <Building2 size={19} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#17242d]">
                    Need a trade account?
                  </p>
                  <p className="mt-1 text-xs text-[#69756f]">
                    Apply for wholesale account access
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={19}
                className="shrink-0 text-[#079b57] transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-[#98a49e]">
          © {new Date().getFullYear()} Global Bargain. All rights reserved.
        </p>
      </div>
    </section>
  );
}
