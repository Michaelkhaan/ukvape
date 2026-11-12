
import SiteLayout from "@/components/site-layout";
import { posts } from "@/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteLayout>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow" style={{ color: "#63e9a9" }}>
            {post.category} · {post.date}
          </span>

          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      </div>

      <article
        className="container"
        style={{ maxWidth: 850, padding: "35px 0 65px" }}
      >
        <div
          className="content-image"
          style={{ minHeight: 240, fontSize: 50 }}
        >
          GLOBAL BARGAIN
        </div>

        <h2 style={{ fontSize: 23, marginTop: 30 }}>
          Making informed choices
        </h2>

        <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
          A well-organised product range starts with understanding your
          customers, keeping product information clear and reviewing what works
          for your business. Use your account tools to keep track of orders and
          contact the team if you need help.
        </p>

        <h2 style={{ fontSize: 23 }}>
          A straightforward wholesale experience
        </h2>

        <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
          Global Bargain brings product browsing, account support and order
          management together. Explore the catalogue and get in touch with our
          team for trade enquiries.
        </p>

        <a className="btn btn-primary" href="/products">
          Explore products
        </a>
      </article>
    </SiteLayout>
  );
}
