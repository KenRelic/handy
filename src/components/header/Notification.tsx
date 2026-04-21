import { IconBell } from "@/assets/icons"
import { Button } from "../ui/button"

export const Notification = () => {
  return (
    <section>
      <Button variant="ghost" size="icon-sm">
        <IconBell />
      </Button>
    </section>
  )
}
