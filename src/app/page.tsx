import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-5">
      <h1 className="text-xl mb-10">Home page</h1>
      <Link
        className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded"
        href={'/companies'}
      >
        Companies
      </Link>
    </main>
  );
}
