"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteLayout from "@/components/site-layout";
import { posts } from "@/lib/blog";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Search,
  Sparkles,
  Store,
  X,
} from "lucide-react";

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  author?: string;
  image?: string;
};

const allPosts: BlogPost[] = Array.isArray(posts)
  ? (posts as unknown as BlogPost[])
  : [];

const PAGE_SIZE = 9;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Blog", "Blog guide"];

  const filteredPosts = useMemo(() => {
    let result = [...allPosts];

    if (activeCategory !== "All") {
      result = result.filter(
        (post) => post.category?.toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      result = result.filter((post) =>
        [post.title, post.excerpt, post.category, post.author]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query),
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (sortBy === "oldest") return dateA - dateB;
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);

      return dateB - dateA;
    });

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const featuredPost = allPosts[0];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const blogImages = [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=85",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85",
    "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=900&q=85",
  ];

  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f5f7fa] text-[#17242d]">
        {/* HERO */}
        <section
          className="relative isolate overflow-hidden bg-[#031713] bg-cover bg-center bg-no-repeat text-white"
          style={{
            backgroundImage: "url('/Green Growth Blog Workspace.png')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031713]/95 via-[#031713]/75 to-[#031713]/25" />

          {/* Green lighting */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_35%,rgba(7,155,87,0.22),transparent_40%)]" />

          {/* Content */}
          <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#031713]/70 px-4 py-2 text-sm font-semibold text-[#20e980] backdrop-blur-md">
                <Sparkles size={16} />
                News, Tips & Industry Insights
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#20e980]">
                The Global Bargain Journal
              </p>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl">
                Insights for
                <span className="block text-[#20e980]">Your Business.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80">
                Explore helpful wholesale guides, product information, retailer
                resources and the latest industry updates from Global Bargain.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#blog-posts"
                  className="inline-flex items-center gap-3 rounded-full bg-[#20e980] px-7 py-4 font-bold text-[#031713] transition hover:-translate-y-1 hover:bg-[#16d875]"
                >
                  Explore Articles
                  <ArrowRight size={19} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-[#031713]/40 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:border-[#20e980] hover:bg-white/10"
                >
                  Contact Our Team
                  <ArrowRight size={19} />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/20 pt-7">
                <div className="flex items-center gap-3">
                  <BookOpen size={21} className="text-[#20e980]" />
                  <span className="text-sm font-semibold text-white/90">
                    Business Guides
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays size={21} className="text-[#20e980]" />
                  <span className="text-sm font-semibold text-white/90">
                    Latest Updates
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles size={21} className="text-[#20e980]" />
                  <span className="text-sm font-semibold text-white/90">
                    Industry Insights
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG CONTENT */}
        <section
          id="blog-posts"
          className="px-5 py-16 sm:px-8 md:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1400px]">
            {/* SECTION HEADING */}
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#079b57]">
                  Explore Our Articles
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#17242d] sm:text-4xl">
                  From the Global Bargain Blog
                </h2>

                <p className="mt-3 max-w-2xl text-base leading-7 text-[#69756f]">
                  Product information, useful guides and wholesale business
                  insights.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce2dd] bg-white px-4 py-2.5 text-sm font-semibold text-[#17242d]">
                <BookOpen size={17} className="text-[#079b57]" />
                {filteredPosts.length} Articles
              </div>
            </div>

            {/* FILTERS */}
            <div className="mb-8 rounded-3xl border border-[#dce2dd] bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-5">
                {/* CATEGORY BUTTONS */}
                <div className="flex flex-wrap items-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                        activeCategory === category
                          ? "bg-[#031713] text-[#20e980] shadow-md"
                          : "bg-[#f5f7fa] text-[#69756f] hover:bg-[#e4f0ec] hover:text-[#079b57]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="grid gap-3 md:grid-cols-[1fr_220px]">
                  {/* SEARCH */}
                  <div className="relative">
                    <Search
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#69756f]"
                    />

                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder="Search articles, topics and guides..."
                      className="h-12 w-full rounded-xl border border-[#dce2dd] bg-[#f8faf9] pl-12 pr-12 text-sm text-[#17242d] outline-none transition placeholder:text-[#9aa49f] focus:border-[#079b57] focus:bg-white focus:ring-4 focus:ring-[#079b57]/10"
                    />

                    {searchQuery && (
                      <button
                        onClick={() => handleSearch("")}
                        aria-label="Clear search"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#69756f] hover:text-[#079b57]"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>

                  {/* SORT */}
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="h-12 rounded-xl border border-[#dce2dd] bg-[#f8faf9] px-4 text-sm font-semibold text-[#17242d] outline-none focus:border-[#079b57]"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="az">Title: A to Z</option>
                    <option value="za">Title: Z to A</option>
                  </select>
                </div>
              </div>
            </div>

            {/* RESULTS LABEL */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#69756f]">
                Showing{" "}
                <span className="font-bold text-[#17242d]">
                  {filteredPosts.length === 0
                    ? 0
                    : (currentPage - 1) * PAGE_SIZE + 1}
                  {" - "}
                  {Math.min(currentPage * PAGE_SIZE, filteredPosts.length)}
                </span>{" "}
                of{" "}
                <span className="font-bold text-[#17242d]">
                  {filteredPosts.length}
                </span>{" "}
                articles
              </p>

              {(searchQuery || activeCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    setCurrentPage(1);
                  }}
                  className="text-sm font-bold text-[#079b57] hover:text-[#031713]"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* BLOG GRID */}
            {paginatedPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post, index) => (
                  <article
                    key={post.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#dce2dd] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#20e980] hover:shadow-xl hover:shadow-[#079b57]/10"
                  >
                    {/* CARD IMAGE / VISUAL */}
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label={`Read ${post.title}`}
                      className="group/image relative block h-56 overflow-hidden bg-[#031713]"
                    >
                      <img
                        src={blogImages[index % blogImages.length]}
                        alt={post.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/image:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#031713]/85 via-[#031713]/10 to-transparent" />

                      <div className="absolute bottom-5 left-5">
                        <span className="inline-flex rounded-full border border-[#20e980]/30 bg-[#031713]/80 px-4 py-2 text-xs font-bold text-[#20e980] backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>

                      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#031713]/60 text-white backdrop-blur-md transition duration-300 group-hover/image:rotate-45 group-hover/image:bg-[#20e980] group-hover/image:text-[#031713]">
                        <ArrowUpRight size={19} />
                      </div>
                    </Link>

                    {/* CARD CONTENT */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#69756f]">
                        <CalendarDays size={15} className="text-[#079b57]" />
                        {post.date}
                        {post.author && (
                          <>
                            <span className="text-[#c5cdc8]">•</span>
                            <span>{post.author}</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-xl font-extrabold leading-snug text-[#17242d] transition group-hover:text-[#079b57]">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-[#69756f]">
                        {post.excerpt}
                      </p>

                      <div className="mt-7 border-t border-[#edf0ed] pt-5">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-extrabold text-[#079b57] transition hover:gap-3 hover:text-[#031713]"
                        >
                          Read Article
                          <ArrowUpRight size={17} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* EMPTY STATE */
              <div className="rounded-3xl border border-dashed border-[#cbd8d0] bg-white px-6 py-20 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e4f0ec] text-[#079b57]">
                  <Search size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#17242d]">
                  No articles found
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#69756f]">
                  {
                    "We couldn't find any articles matching your search.Try a different keyword or select another category."
                  }
                </p>

                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    setCurrentPage(1);
                  }}
                  className="mt-7 rounded-full bg-[#031713] px-7 py-3.5 text-sm font-bold text-[#20e980] transition hover:bg-[#079b57]"
                >
                  Show All Articles
                </button>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  disabled={currentPage === 1}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce2dd] bg-white text-[#17242d] transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={19} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        document
                          .getElementById("blog-posts")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`h-11 min-w-11 rounded-xl px-3 text-sm font-bold transition ${
                        currentPage === page
                          ? "bg-[#031713] text-[#20e980] shadow-md"
                          : "border border-[#dce2dd] bg-white text-[#17242d] hover:border-[#079b57] hover:text-[#079b57]"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() =>
                    setCurrentPage((page) => Math.min(totalPages, page + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce2dd] bg-white text-[#17242d] transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* TRADE CTA */}
        <section className="px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-2xl bg-[#031713] text-white">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/Neon Green Vape Warehouse Display.png')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00140e]/80 via-[#00140e]/45 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[300px] w-full flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[360px] md:min-h-[420px] lg:min-h-0 lg:aspect-[2/1] lg:w-[56%] lg:px-8">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00e995] bg-[#031713]/50 text-[#20e980] sm:h-14 sm:w-14">
                <Store size={25} />
              </div>

              {/* Subtitle */}
              <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#20e980] sm:text-xs md:text-sm">
                Verified Wholesale Access
              </p>

              {/* Heading */}
              <h2 className="mt-3 text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-[clamp(32px,3.5vw,54px)]">
                <span className="block text-white">Unlock Wholesale</span>
                <span className="block text-[#00e995]">Pricing</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-lg text-xs font-semibold leading-6 text-white/85 sm:text-sm md:text-base">
                Apply for a verified trade account to access
                <br className="hidden sm:block" />
                wholesale pricing and retailer ordering.
              </p>

              {/* Button */}
              <Link
                href="/trade-register"
                className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-[#00d991] px-6 py-3 text-xs font-extrabold text-[#031713] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20e980] sm:px-8 sm:py-3.5 sm:text-sm md:text-base"
              >
                Apply for Trade Access
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
