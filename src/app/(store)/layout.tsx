import { ReactNode, Suspense } from "react";

import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/cart-context";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Suspense>
          <Header />
          {children}
        </Suspense>
      </div>
    </CartProvider>
  );
}
