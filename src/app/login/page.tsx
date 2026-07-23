import RetroWindow from "@/components/RetroWindow";
import { loginAction } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="mx-auto max-w-md px-4 pt-16 pb-20 sm:pt-24">
      <RetroWindow title="Login" subtitleBar="팀원 전용 회의록 워크스페이스">
        <form
          action={loginAction}
          className="flex flex-col items-center gap-4 py-6 text-center"
        >
          <label htmlFor="name" className="font-body text-lg text-ink/70">
            이름을 입력하고 들어가세요
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="예: 김클로드"
            className="bevel-in w-full max-w-xs bg-cream px-4 py-3 text-center font-body text-xl text-ink outline-none"
          />
          {error ? (
            <p className="font-body text-base text-red-accent">
              이름을 입력해주세요.
            </p>
          ) : null}
          <button
            type="submit"
            className="pixel-btn-lg mt-2 bg-orange px-8 py-3 font-display text-sm text-cream"
          >
            들어가기
          </button>
        </form>
      </RetroWindow>
    </main>
  );
}
