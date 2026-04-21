import { cn } from "@/lib/utils"
import { UserAvatar } from "./Avatar"
import { Chat } from "./Chat"
import { Notification } from "./Notification"
import { PageSearch } from "./PageSearch"

type IProps = {
  className?: string
}
export const AppHeader = ({ className }: IProps) => {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-end gap-3 p-4",
        className
      )}
    >
      <PageSearch />
      <Notification />
      <Chat />
      <UserAvatar />
    </header>
  )
}
