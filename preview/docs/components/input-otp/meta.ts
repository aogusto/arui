import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "input-otp",
  name: "Input OTP",
  category: "Forms & Inputs",
  description: "A one-time password input rendered as a row of individual slots that share focus, caret, and validation state. Supports grouping with a separator and pattern restrictions for numeric or alphanumeric codes.",
  imports: ["InputOTP", "InputOTPGroup", "InputOTPSlot", "InputOTPSeparator"],
}
