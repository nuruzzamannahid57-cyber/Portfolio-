import { profile } from '../data/portfolio';

/**
 * Hero visual. The reference design uses a hero film; this portfolio ships
 * without a photo or film, so the hero card is a typographic monogram panel
 * that keeps the same size, tilt and reveal behaviour. Swap the body for an
 * <img> or <video> once you have a portrait to use.
 */
export default function HeroVideo({ play }: { play: boolean }) {
  return (
    <div
      role="img"
      aria-label={`${profile.name} monogram`}
      className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-[2px] border border-line bg-[radial-gradient(60%_50%_at_50%_30%,var(--glow),transparent_70%)]"
    >
      <div
        className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] text-faint uppercase transition-opacity duration-1000"
        style={{ opacity: play ? 1 : 0 }}
        aria-hidden="true"
      >
        <span>Dhaka</span>
        <span>Key Account</span>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none mb-[12%] select-none font-serif text-[min(34vw,20rem)] leading-[0.8] italic text-fg transition-opacity duration-1000"
        style={{ opacity: play ? 1 : 0 }}
      >
        NN
      </span>
    </div>
  );
}
