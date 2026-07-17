import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Fallback from "./examples/fallback"
import fallbackCode from "./examples/fallback.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import Badge from "./examples/badge"
import badgeCode from "./examples/badge.tsx?raw"
import Group from "./examples/group"
import groupCode from "./examples/group.tsx?raw"

const avatarProps: PropRow[] = [
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "Size of the avatar, its fallback text, and any AvatarBadge nested inside.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AvatarPrimitive.Root>",
    description: "Extends Avatar.Root from radix-ui.",
  },
]

const imageProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AvatarPrimitive.Image>",
    description: "Extends Avatar.Image from radix-ui (src, alt, onLoadingStatusChange, etc). Renders nothing while loading or on error, letting AvatarFallback show through.",
  },
]

const fallbackProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AvatarPrimitive.Fallback>",
    description: "Extends Avatar.Fallback from radix-ui. Accepts delayMs to only render after the image has had time to load, avoiding a flash of fallback content.",
  },
]

const badgeProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"span">',
    description: "The remaining native <span> attributes. Pinned to the bottom right corner of the avatar and sized automatically off the parent Avatar's size; pass an icon as children (hidden automatically at the sm size).",
  },
]

const groupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Wraps a set of Avatar as an overlapping stack, with a ring around each one to separate it from the background.",
  },
]

const groupCountProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Styled to match the sibling avatars in the group and sized off the nearest AvatarGroup's size; place it last, with a value such as \"+5\".",
  },
]

export default function AvatarDoc() {
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
        <Demo title="Fallback" code={fallbackCode}><Fallback /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="Badge" code={badgeCode}><Badge /></Demo>
        <Demo title="Group" code={groupCode}><Group /></Demo>
      </div>

      <section className="space-y-8">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Avatar</h3>
          <PropsTable rows={avatarProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AvatarImage</h3>
          <PropsTable rows={imageProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AvatarFallback</h3>
          <PropsTable rows={fallbackProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AvatarBadge</h3>
          <PropsTable rows={badgeProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AvatarGroup</h3>
          <PropsTable rows={groupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AvatarGroupCount</h3>
          <PropsTable rows={groupCountProps} />
        </div>
      </section>
    </article>
  )
}
