export default function PixelIllustration() {
  return (
    <div className="relative h-56 sm:h-72 w-full overflow-hidden border-2 border-ink bg-linear-to-b from-sky-top to-sky-bottom">
      {/* pixel sun */}
      <div className="absolute right-8 top-6 h-10 w-10 bg-neon border-2 border-ink pixel-shape sm:h-14 sm:w-14" />

      {/* pixel clouds (stepped blocks) */}
      <div className="absolute left-6 top-10 flex flex-col items-start gap-0 sm:left-10">
        <div className="ml-4 h-3 w-16 bg-cream border-2 border-ink sm:h-4 sm:w-24" />
        <div className="h-3 w-24 bg-cream border-2 border-ink sm:h-4 sm:w-36" />
      </div>
      <div className="absolute right-24 top-24 flex flex-col items-start gap-0 sm:right-32">
        <div className="ml-3 h-2.5 w-12 bg-cream border-2 border-ink sm:h-3 sm:w-16" />
        <div className="h-2.5 w-18 bg-cream border-2 border-ink sm:h-3 sm:w-24" />
      </div>

      {/* ground */}
      <div className="absolute bottom-0 h-10 w-full bg-periwinkle border-t-2 border-ink sm:h-14" />

      {/* pixel floppy disk (retro save icon, doubles as "study data") */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
        <div className="relative h-20 w-20 bg-purple border-2 border-ink pixel-shape shadow-[4px_4px_0_0_var(--color-ink)] sm:h-28 sm:w-28">
          <div className="absolute right-0 top-0 h-4 w-4 bg-sky-top border-l-2 border-b-2 border-ink sm:h-6 sm:w-6" />
          <div className="absolute left-2 top-2 h-2 w-8 bg-ink sm:left-3 sm:top-3 sm:h-3 sm:w-12" />
          <div className="absolute left-1/2 top-1/3 h-7 w-14 -translate-x-1/2 bg-cream border-2 border-ink sm:h-10 sm:w-20" />
          <div className="absolute left-1/2 top-1/3 mt-1 h-1.5 w-10 -translate-x-1/2 bg-purple-darker sm:mt-1.5 sm:h-2 sm:w-14" />
        </div>
      </div>
    </div>
  );
}
