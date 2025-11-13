export default function NotFound() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}