import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "input-otp",
  name: "Input OTP",
  category: "Forms & Inputs",
  description: "A one-time password input rendered as a row of individual slots that share focus, caret, and validation state. Supports grouping with a separator and pattern restrictions for numeric or alphanumeric codes.",
  imports: ["InputOTP", "InputOTPGroup", "InputOTPSlot", "InputOTPSeparator"],
}

export const propsInputOtp: PropRow[] = [
  {
    prop: "maxLength",
    type: "number",
    description: "Required. Number of characters the code holds, and how many slots should be rendered.",
  },
  {
    prop: "value",
    type: "string",
    description: "Controlled value of the code.",
  },
  {
    prop: "onChange",
    type: "(value: string) => void",
    description: "Called with the new value on every keystroke, paste, or deletion.",
  },
  {
    prop: "onComplete",
    type: "(value: string) => void",
    description: "Called once when the value reaches maxLength.",
  },
  {
    prop: "pattern",
    type: "string",
    description: "Regex string used to filter which characters are accepted, for example digits only.",
  },
  {
    prop: "textAlign",
    type: '"left" | "center" | "right"',
    default: '"left"',
    description: "Alignment of the character inside each slot.",
  },
  {
    prop: "pushPasswordManagerStrategy",
    type: '"increase-width" | "none"',
    default: '"increase-width"',
    description: "How the field reacts to the browser's password manager icon overlapping the first slot.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input. Slots render with reduced opacity.",
  },
  {
    prop: "containerClassName",
    type: "string",
    description: "Additional classes for the outer container that wraps the groups and slots.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof OTPInput>",
    description: "Extends OTPInput from the input-otp library (autoFocus, inputMode, name, and other native input attributes).",
  },
]

export const propsGroup: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "Extends the native <div> element. Wraps a set of InputOTPSlot into one connected group of boxes.",
  },
]

export const propsSlot: PropRow[] = [
  {
    prop: "index",
    type: "number",
    description: "Required. Position of this slot in the code (0-based). Reads its char and caret state from the shared OTP context.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "Extends the native <div> element.",
  },
]

export const propsSeparator: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "Extends the native <div> element. Renders a fixed dash icon between two groups.",
  },
]

export const props: PropRow[] = [...propsInputOtp, ...propsGroup, ...propsSlot, ...propsSeparator]
