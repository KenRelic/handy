import { cn } from "@/lib/utils"
import {
  BriefcaseBusiness,
  LayoutDashboard,
  Settings,
  Store,
  UserCircle,
  Users2,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import { NavigationItem } from "./NavigationItem"

type IProps = {
  className?: string
}

const menu = [
  {
    id: "1",
    path: "/employees",
    name: "Employees",
    icon: <Users2 color="#E2E4ED" opacity={0.8} />,
  },
  {
    id: "2",
    path: "/departments",
    name: "Department",
    icon: <UserCircle color="#E2E4ED" opacity={0.8} />,
  },
  {
    id: "3",
    path: "/jobs",
    name: "Jobs",
    icon: <BriefcaseBusiness color="#E2E4ED" opacity={0.8} />,
  },
  {
    id: "4",
    path: "/shop",
    name: "Shop",
    icon: <Store color="#E2E4ED" opacity={0.8} />,
  },
  {
    id: "5",
    path: "/settings",
    name: "Settings",
    icon: <Settings color="#E2E4ED" opacity={0.8} />,
  },
]

export const Navigation = ({ className }: IProps) => {
  return (
    <nav className={cn("h-full", className)}>
      <section className="b-white h-[80px] w-full"></section>
      <section className="h-full bg-[#7A9705] p-4">
        <NavLink
          to="dashboard"
          className={cn("mb-1.5 flex items-center gap-2 rounded-md p-2 py-4")}
        >
          <LayoutDashboard color="#E2E4ED" opacity={0.8} />
          <span className={cn("text-base text-[#E2E4ED]")}>Dashboard</span>
        </NavLink>
        <p className="text-[#E6E9E7] opacity-80">MENU</p>
        <ul className="flex flex-col gap-1">
          {menu?.map((list) => (
            <NavigationItem data={list} key={list.id} />
          ))}
        </ul>
      </section>
    </nav>
  )
}
