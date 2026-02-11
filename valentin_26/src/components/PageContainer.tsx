import type { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full h-svh flex items-center justify-center">
            {children}
        </div>
    )
}
