import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-md p-8 md:p-10 rounded-md">
        <div className="flex items-center justify-center mb-2">
          <h1 className="text-2xl font-bold text-[#21a181]">Login</h1>
          <h2 className="text-2xl text-stone-50 font-semibold">Bandicall</h2>
        </div>
        <p className="text-center text-md font-bold text-stone-400 mb-8 text-sm">Voice and Video</p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-stone-300">Phone</label>
            <input id="number" type="number" inputMode="numerial"
              className="w-full p-3 bg-stone-800 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-500 transition-all"
              placeholder="+62" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-stone-300">Password</label>
            <input id="password" type="password"
              className="w-full p-3 bg-stone-800 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-500 transition-all"
              placeholder="••••••••" required />
          </div>

          <div className="flex flex-col space-y-3 pt-4">
            <Link href="/number"
              className="w-full cursor-pointer bg-[#21a181] hover:bg-[#71967c] text-stone-900 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
              <span>Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div >
  );
}
