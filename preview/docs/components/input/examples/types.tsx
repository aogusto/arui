import { Input } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="grid w-full max-w-xs gap-3">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Quantity" />
      <Input type="search" placeholder="Search" />
      <Input type="file" />
    </div>
  )
}
