'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
        <p className="mb-6 text-lg text-gray-600">{error.message}</p>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-opacity-90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
