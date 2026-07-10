import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-6 text-xl text-gray-600">Page not found</p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-opacity-90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
