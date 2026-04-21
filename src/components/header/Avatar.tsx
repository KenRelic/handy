import { Avatar, AvatarImage } from "../ui/avatar"

export const UserAvatar = () => {
  return (
    <section>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDF8MHx8fDA%3D"
          width={50}
          height={50}
        />
      </Avatar>
    </section>
  )
}
