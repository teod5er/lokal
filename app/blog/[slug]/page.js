import { getPostData, getSortedPostsData } from '@/lib/posts';
import { format } from 'date-fns';
import { hr } from 'date-fns/locale';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="container" style={{ maxWidth: '800px' }}>
      <header className="article-header">
        <h1 className="article-title">{postData.title}</h1>
        <div className="article-meta">
          {postData.date ? format(new Date(postData.date), 'd. MMMM yyyy.', { locale: hr }) : ''}
        </div>
      </header>

      {postData.thumbnail && (
        <img src={postData.thumbnail} alt={postData.title} className="article-image" />
      )}

      <div 
        className="article-body"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>
          &larr; Povratak na naslovnicu
        </Link>
      </div>
    </article>
  );
}
