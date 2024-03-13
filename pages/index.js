import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Quiz App</h1>
      <Link
        className="inline-block bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md m-1"
        href="/quiz"
      >
        Take Quiz
      </Link>
      <Link
        className="inline-block bg-purple-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
        href="/admin"
      >
        Admin Panel
      </Link>
    </div>
  );
}
