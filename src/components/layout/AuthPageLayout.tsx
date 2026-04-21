import type { ReactNode } from "react"
import { AppHeader } from "../header"
import { PageHeading } from "../header/PageHeading"
import { Navigation } from "../nav"
import { ScrollArea } from "../ui/scroll-area"

export const AuthPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid h-dvh grid-cols-[300px_1fr] grid-rows-[80px_1fr] overflow-hidden bg-white">
      <Navigation className="col-start-1 col-end-1 row-start-1 row-end-3 h-full" />
      <AppHeader className="col-start-2 col-end-3" />
      <ScrollArea className="col-start-2 col-end-3 h-[calc(100dvh-90px)] w-full flex-1">
        <PageHeading />
        {children}
      </ScrollArea>
    </main>
  )
}
