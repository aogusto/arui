import { Separator } from "@aogusto/arui"

const items = [
  { label: "Profile", hint: "Name, photo, bio" },
  { label: "Notifications", hint: "Email and push" },
  { label: "Billing", hint: "Plan and invoices" },
]

export default function Example() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-separator">
      {items.map((item, index) => (
        <div key={item.label}>
          {index > 0 ? <Separator /> : null}
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-body text-label">{item.label}</span>
            <span className="text-footnote text-label-secondary">{item.hint}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
