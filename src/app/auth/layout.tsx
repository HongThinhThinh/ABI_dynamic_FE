// app/auth/layout.tsx
import { AuroraBackgroundDemo } from "@/components/layout/auroraBackgroun";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <div className="flex w-full justify-center items-center ">
        <div className="flex-[1]">
          <AuroraBackgroundDemo />
        </div>
        <div className="flex-1 bg-[#1e2026]">{children}</div>
      </div>
    </div>
  );
}
