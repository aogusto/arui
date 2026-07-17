import { InputOTP, InputOTPGroup, InputOTPSlot } from "@aogusto/arui"

export default function Example() {
  return (
    <InputOTP maxLength={6} value="123456" disabled>
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
