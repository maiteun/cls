import RetroWindow from "./RetroWindow";

const BLOCKS = [
  {
    title: "Late-Night Vibe Coding Sessions",
    lines: [
      "Feel free to join.",
      "We select a random task, and just go for it.",
      "No overthinking, No crazy ass planning.",
      "Just hang out with friends during midnight.",
      "Music. Snacks. Chill. Prompts. Coding. Insomnia. Alcohol.",
      "Whatever you want to do.",
    ],
  },
  {
    title: "Claude Code 101",
    lines: [
      "Learn the basics about Claude Code and how it works, why it works.",
      "Become the master and begin conquering life.",
      "Organization is key for productivity.",
      "Automation is key for productivity.",
    ],
  },
  {
    title: "Side Projects",
    lines: [
      "We're assembling the Avengers.",
      "Dive into the world of extracurricular activities and competitions.",
      "No sleep, Group up and keep going.",
    ],
  },
  {
    title: "Creating Your Cozy Space",
    lines: [
      "We all go to our favorite cafes to work.",
      "Create your own private space using Obsidian.",
      "Plan out the layout, choose an amazing theme, load up a badass font, and build.",
      "At the end of the day, you have to feel comfortable and excited to grow.",
      "It's all about the vibes, man.",
    ],
  },
];

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="mx-auto flex max-w-2xl flex-col gap-12 px-4 pt-16 sm:pt-20"
    >
      {BLOCKS.map((block, i) => (
        <RetroWindow key={block.title} title={block.title} delay={i * 0.05}>
          <div className="flex flex-col gap-1">
            {block.lines.map((line) => (
              <p
                key={line}
                className="font-body text-xl leading-snug text-ink/80 sm:text-2xl"
              >
                {line}
              </p>
            ))}
          </div>
        </RetroWindow>
      ))}
    </section>
  );
}
