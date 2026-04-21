import { IconSearch } from "@/assets/icons"
import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function PageSearch() {
  return (
    <Field className="max-w-[256px]">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <IconSearch />
        </InputGroupAddon>
        <InputGroupInput
          id="input-group-url"
          placeholder="Search by Cargo, Shipping"
        />
      </InputGroup>
    </Field>
  )
}
