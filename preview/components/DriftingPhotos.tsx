import { cn } from "@/lib/utils"
import { PHOTOS } from "../showcase"

type DriftingPhotosProps = {
  /** seconds for one full loop — higher is slower */
  speed?: number
  /** drift right-to-left by default; reverse flips it */
  reverse?: boolean
  /** container classes (positioning, height) */
  className?: string
  /** per-image classes (width) */
  imgClassName?: string
  /** optional gradient/scrim laid over the photos (still behind the glass) */
  overlayClassName?: string
}

/**
 * A slow, seamless marquee of the six bundled photos — the imagery that moves
 * BEHIND the glass. The strip is duplicated so a -50% translate loops
 * frame-perfectly. Purely decorative; hidden from assistive tech. Motion lives
 * on this strip alone (CSS transform), never on an ancestor of the glass, so
 * backdrop-filter keeps refracting it correctly.
 */
export function DriftingPhotos({
  speed = 64,
  reverse = false,
  className,
  imgClassName,
  overlayClassName,
}: DriftingPhotosProps) {
  const strip = [...PHOTOS, ...PHOTOS]

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="arui-drift flex h-full w-max"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {strip.map((photo, i) => (
          <img
            key={`${photo.src}-${i}`}
            src={photo.src}
            alt=""
            draggable={false}
            loading={i < PHOTOS.length ? "eager" : "lazy"}
            className={cn(
              "h-full w-[62vw] max-w-[520px] flex-none object-cover sm:w-[42vw]",
              imgClassName
            )}
          />
        ))}
      </div>
      {overlayClassName ? (
        <div className={cn("absolute inset-0", overlayClassName)} />
      ) : null}
    </div>
  )
}
