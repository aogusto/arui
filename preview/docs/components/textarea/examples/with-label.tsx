import { Label, Textarea } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  )
}
