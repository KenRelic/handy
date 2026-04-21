import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"

type IProps = {
  data: {
    name: string
    path: string
    icon: ReactNode
  }
}

export const NavigationItem = ({ data }: IProps) => {
  const { pathname } = useLocation()
  const isCurrentRoute = pathname.includes(data?.path)

  return (
    <NavLink
      to={data?.path}
      className={cn(
        "flex items-center gap-2 rounded-md p-2 py-4",
        isCurrentRoute ? "bg-[#667F01]" : ""
      )}
    >
      {data.icon}
      <span
        className={cn(
          "text-base text-[#E2E4ED]",
          isCurrentRoute ? "font-semibold text-white" : ""
        )}
      >
        {data.name}
      </span>
    </NavLink>
  )
}
