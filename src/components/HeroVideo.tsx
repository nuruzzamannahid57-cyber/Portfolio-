import { profile } from '../data/portfolio';

/**
 * Hero portrait card. Keeps the same size, tilt and reveal behaviour as the reference.
 */
export default function HeroVideo({ play }: { play: boolean }) {
  return (
    <div
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
      <img
        src="/assets/portrait.png"
        alt={`Portrait of ${profile.name}`}
        width={801}
        height={801}
        className="absolute inset-0 h-full w-full object-cover object-[50%_20%] transition-opacity duration-1000"
        style={{ opacity: play ? 1 : 0 }}
        draggable={false}
      />
    </div>
  );
}
