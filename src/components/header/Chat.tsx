import { IconChat } from "@/assets/icons"
import { Button } from "../ui/button"

export const Chat = () => {
  return (
    <section>
      <Button variant="ghost" size="icon-sm">
        <IconChat />
      </Button>
    </section>
  )
}
