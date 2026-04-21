import type { ReactNode } from "react"

export const ViewContainer = ({ children }: { children: ReactNode }) => {
  return <section className="w-full p-4">{children}</section>
}
