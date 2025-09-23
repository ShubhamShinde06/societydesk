import Link from "next/link";

export default function AuthPage() {
  return (
    <>
      {/* Action Section */}
      <div className="w-full lg:max-w-2xl bg-white/90 backdrop-blur-xl shadow-2xl p-8 text-center rounded-t-3xl flex flex-col gap-4">
        <Link href={"/auth/society"}>
          <button className="btn-orange">Society Register</button>
        </Link>

        <Link href={"/auth/login"}>
          <button className="btn-purple">Membar Login</button>
        </Link>

        <Link href={"/auth/register"}>
          <button className="btn-skyblue">Membar Register</button>
        </Link>
      </div>
    </>
  );
}
