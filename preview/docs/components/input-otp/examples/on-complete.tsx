import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@aogusto/arui"
import { toast } from "sonner"

export default function Example() {
  const [value, setValue] = useState("")

  return (
    <InputOTP
      maxLength={6}
      value={value}
      onChange={setValue}
      onComplete={(code) => toast.success(`Code verified: ${code}`)}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
