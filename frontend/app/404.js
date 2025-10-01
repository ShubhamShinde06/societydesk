import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function NotFoundContent() {
  const searchParams = useSearchParams();

  // Example: get a query param called "ref"
  const ref = searchParams.get("ref");

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      {ref && (
        <p>
          You tried to access: <strong>{ref}</strong>
        </p>
      )}
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}