import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "@aogusto/arui"
import { SearchX } from "lucide-react"

export default function Example() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchX />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filters.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
