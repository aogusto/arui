import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, propsInputOtp, propsGroup, propsSlot, propsSeparator } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Groups from "./examples/groups"
import groupsCode from "./examples/groups.tsx?raw"
import Pattern from "./examples/pattern"
import patternCode from "./examples/pattern.tsx?raw"
import OnComplete from "./examples/on-complete"
import onCompleteCode from "./examples/on-complete.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import FormExample from "./examples/form"
import formCode from "./examples/form.tsx?raw"

export default function InputOtpDoc() {
  const importLine = `import { ${meta.imports.join(", ")} } from "@aogusto/arui"`
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">{meta.category}</p>
        <h1 className="text-title-1 font-bold text-label">{meta.name}</h1>
        <p className="text-body text-label-secondary">{meta.description}</p>
      </header>

      <div className="flex items-center justify-between rounded-xl border border-separator bg-background-secondary px-3 py-2">
        <code className="font-mono text-caption-1 text-label">{importLine}</code>
        <CopyButton value={importLine} />
      </div>

      <div className="space-y-10">
        <Demo title="Default" code={defaultCode}><Default /></Demo>
        <Demo title="Groups with separator" code={groupsCode}><Groups /></Demo>
        <Demo title="Numeric pattern" description="Restricts input to digits with the pattern attribute." code={patternCode}><Pattern /></Demo>
        <Demo title="On complete" description="Fires a callback once the code reaches maxLength." code={onCompleteCode}><OnComplete /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
        <Demo title="With form validation" description="Controlled through react-hook-form and validated with zod." code={formCode}><FormExample /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputOTP</h3>
          <PropsTable rows={propsInputOtp} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputOTPGroup</h3>
          <PropsTable rows={propsGroup} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputOTPSlot</h3>
          <PropsTable rows={propsSlot} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputOTPSeparator</h3>
          <PropsTable rows={propsSeparator} />
        </div>
      </section>
    </article>
  )
}
