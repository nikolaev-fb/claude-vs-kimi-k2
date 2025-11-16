import { notFound } from 'next/navigation';
import { getPostWithHtml, getAllPosts } from '@/lib/posts';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.metadata.url,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
        <p className="text-lg text-gray-600">{post.metadata['short-description']}</p>
      </header>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
      />
    </article>
  );
}
