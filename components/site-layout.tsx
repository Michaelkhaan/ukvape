// import { ReactNode } from "react";
// import Header from "./header";
// import Footer from "./footer";
// export default function SiteLayout({ children }: { children: ReactNode }) {
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }


import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-20 border-b border-[#e1e8ee] bg-white" />
        }
      >
        <Header />
      </Suspense>

      <main>{children}</main>

      <Footer />
    </>
  );
}