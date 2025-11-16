export default function NotFound() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-lg text-gray-600">
        The blog post you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
        Return to Home
      </a>
    </div>
  );
}
