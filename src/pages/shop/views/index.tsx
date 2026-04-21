import { IconSearch } from "@/assets/icons"
import { DatePickerWithRange } from "@/components/datepicker/DatePickerWithRange"
import { ViewContainer } from "@/components/layout/ViewContainer"
import { AppPagination } from "@/components/pagination"
import { SimpleSelect } from "@/components/select/SimpleSelect"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Table } from "../components/Table"

export default function ShopView() {
  return (
    <ViewContainer>
      <section className="min-h-[400px] w-full rounded-md border">
        <section className="flex w-full flex-row items-center justify-between gap-2 p-4">
          <section className="flex w-full flex-1 items-center gap-2">
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
            <DatePickerWithRange />
            <SimpleSelect options={["Row"]} placeholder="Fab type" />
          </section>
          <section className="flex items-center gap-2">
            <SimpleSelect placeholder="Select sales person" options={[]} />
            <Button variant="outline">Export CSV</Button>
          </section>
        </section>
        <section className="w-full border-t">
          <div className="bg-[#F6FFE7] px-4 py-3">
            <p className="text-[#4B545D]">08 OCTOBER, 2026</p>
          </div>
        </section>
        <Table />
        <AppPagination />
      </section>
    </ViewContainer>
  )
}
