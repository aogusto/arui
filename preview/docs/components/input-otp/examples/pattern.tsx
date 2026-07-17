import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@aogusto/arui"

export default function Example() {
  const [value, setValue] = useState("")

  return (
    <InputOTP maxLength={4} pattern="^[0-9]+$" value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}
