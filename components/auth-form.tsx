
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

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [sent, setSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isLogin = mode === "login";

  const features = [
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
  ];

  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#f5f7fa] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[#079b57]/10 blur-[100px] sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#20e980]/10 blur-[100px] sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#079b57]/15 bg-white px-3 py-2 shadow-sm sm:px-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#079b57] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#079b57]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#079b57] sm:text-xs sm:tracking-[0.18em]">
              Global Bargain Account
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#17242d] sm:text-4xl lg:text-5xl">
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

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#69756f] sm:mt-4 sm:text-base sm:leading-7">
            {isLogin
              ? "Sign in to access your account, manage orders and continue your shopping experience."
              : "Create your account and enjoy a simpler way to manage your shopping and orders."}
          </p>
        </div>

        {/* Main card */}
        <div className="grid overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white shadow-[0_20px_70px_rgba(23,36,45,0.08)] sm:rounded-[28px] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left panel */}
          <div className="relative isolate flex flex-col justify-between overflow-hidden bg-[#031713] p-6 text-white sm:p-9 lg:min-h-[700px] lg:p-12">
            {/* Background effects */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(32,233,128,0.23),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(7,155,87,0.3),transparent_40%)]" />

            <div className="absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full border border-[#20e980]/15" />
            <div className="absolute -right-12 top-44 -z-10 h-48 w-48 rounded-full border border-[#20e980]/20" />
            <div className="absolute -bottom-32 -left-24 -z-10 h-72 w-72 rounded-full bg-[#079b57]/10 blur-3xl" />

            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20e980] text-[#031713] shadow-lg shadow-[#20e980]/20 transition-transform duration-300 hover:rotate-[-6deg] sm:h-12 sm:w-12 sm:rounded-2xl">
                  <ShoppingBag size={23} strokeWidth={2.5} />
                </div>

                <div>
                  <span className="block text-lg font-extrabold tracking-tight sm:text-xl">
                    Global Bargain
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9ab5a8] sm:text-[10px] sm:tracking-[0.22em]">
                    Wholesale & Retail
                  </span>
                </div>
              </Link>
            </div>

            {/* Main content */}
            <div className="my-9 sm:my-12 lg:my-14">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#20e980]/20 bg-[#20e980]/10 px-3 py-2 text-[10px] font-semibold text-[#56e7a4] sm:text-xs">
                <CheckCircle2 size={14} />
                Your shopping journey starts here
              </span>

              <h2 className="max-w-md text-2xl font-extrabold leading-[1.2] tracking-tight sm:text-3xl lg:text-4xl">
                {isLogin
                  ? "Everything you need, all in one place."
                  : "Create your account and make shopping easier."}
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#a5b9b0] sm:mt-5 sm:leading-7">
                {isLogin
                  ? "Access your personal account and stay connected with your orders, saved details and trade services."
                  : "Join Global Bargain to manage your account details, keep track of orders and explore trade account services."}
              </p>

              {/* Features */}
              <div className="mt-7 grid gap-4 sm:mt-9 sm:gap-5">
                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-3 sm:gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#20e980]/20 bg-[#20e980]/10 text-[#56e7a4] transition duration-300 group-hover:border-[#20e980]/40 group-hover:bg-[#20e980]/20 sm:h-11 sm:w-11">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-[#9ab5a8] sm:mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom text */}
            <div className="border-t border-white/10 pt-5 sm:pt-6">
              <p className="text-xs leading-6 text-[#9ab5a8]">
                A simpler way to manage your shopping experience.
              </p>
            </div>
          </div>

          {/* Right form panel */}
          <div className="flex min-w-0 flex-col justify-center p-5 sm:p-9 md:p-12 lg:p-14">
            <div className="mb-7 sm:mb-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#079b57] sm:mb-3 sm:text-xs">
                {isLogin ? "Welcome again" : "Get started today"}
              </p>

              <h2 className="text-2xl font-extrabold tracking-tight text-[#17242d] sm:text-3xl">
                {isLogin ? "Sign in to your account" : "Create your account"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#69756f] sm:mt-3">
                {isLogin
                  ? "Enter your credentials to continue."
                  : "Complete the details below to get started."}
              </p>
            </div>

            {sent ? (
              <div className="rounded-2xl border border-[#079b57]/20 bg-[#e4f5ec] p-5 sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#079b57] text-white shadow-lg shadow-[#079b57]/20">
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
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm font-bold text-[#079b57] transition hover:text-[#056b3d] hover:underline"
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
                className="space-y-4 sm:space-y-5"
              >
                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#17242d]">
                      Full name
                    </label>

                    <div className="group relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e] transition group-focus-within:text-[#079b57]"
                      />

                      <input
                        required
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className="h-12 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-4 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] hover:border-[#c5d8cd] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10 sm:h-[52px]"
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#17242d]">
                    Email address
                  </label>

                  <div className="group relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e] transition group-focus-within:text-[#079b57]"
                    />

                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="h-12 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-4 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] hover:border-[#c5d8cd] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10 sm:h-[52px]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#17242d]">
                    Password
                  </label>

                  <div className="group relative">
                    <LockKeyhole
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e] transition group-focus-within:text-[#079b57]"
                    />

                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      minLength={6}
                      autoComplete={
                        isLogin ? "current-password" : "new-password"
                      }
                      className="h-12 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-12 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] hover:border-[#c5d8cd] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10 sm:h-[52px]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98a49e] transition hover:text-[#079b57]"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm password */}
                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#17242d]">
                      Confirm password
                    </label>

                    <div className="group relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a49e] transition group-focus-within:text-[#079b57]"
                      />

                      <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        minLength={6}
                        autoComplete="new-password"
                        className="h-12 w-full rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] pl-11 pr-12 text-sm text-[#17242d] outline-none transition placeholder:text-[#a0aaa5] hover:border-[#c5d8cd] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10 sm:h-[52px]"
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

                {/* Remember / Forgot password */}
                {isLogin && (
                  <div className="flex flex-wrap items-center justify-between gap-3 py-1">
                    <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-[#69756f]">
                      <input
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer accent-[#079b57]"
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
                    By creating an account, you agree to our website terms and
                    privacy policy.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#079b57] px-6 text-sm font-extrabold text-white shadow-lg shadow-[#079b57]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#067d47] hover:shadow-xl hover:shadow-[#079b57]/25 active:translate-y-0 sm:h-14"
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
            <div className="mt-7 border-t border-[#e1e8ee] pt-5 text-center sm:mt-8 sm:pt-6">
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
              className="group mt-5 flex items-center justify-between gap-3 rounded-xl border border-[#e1e8ee] bg-[#f9fbfa] p-3 transition duration-300 hover:border-[#079b57]/40 hover:bg-[#e4f5ec]/50 sm:gap-4 sm:rounded-2xl sm:p-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e4f5ec] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
                  <Building2 size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-[#17242d]">
                    Need a trade account?
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#69756f]">
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

        {/* Footer */}
        <p className="mt-6 text-center text-[11px] text-[#98a49e] sm:mt-8 sm:text-xs">
          © 2026 Global Bargain. All rights reserved.
        </p>
      </div>
    </section>
  );
}
