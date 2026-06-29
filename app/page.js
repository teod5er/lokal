import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { format, parseISO } from 'date-fns';
import { hr } from 'date-fns/locale';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container">
      <h1 className="page-title">Dobrodošli na moj blog</h1>
      <p className="page-subtitle">Ovdje dijelim svoje misli, ideje i iskustva.</p>

      {allPostsData.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#94a3b8' }}>
          <p>Trenutno nema objava. Posjetite <strong>/admin</strong> rutu za dodavanje novih članaka.</p>
        </div>
      ) : (
        <div className="posts-grid">
          {allPostsData.map(({ slug, title, date, thumbnail }) => (
            <Link href={`/blog/${slug}`} key={slug} className="post-card">
              <div className="post-image-container">
                {thumbnail ? (
                  <img src={thumbnail} alt={title} className="post-image" />
                ) : (
                  <div className="post-image" style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}></div>
                )}
              </div>
              <div className="post-content">
                <div className="post-date">
                  {date ? format(new Date(date), 'd. MMMM yyyy.', { locale: hr }) : ''}
                </div>
                <h2 className="post-title">{title}</h2>
                <div className="read-more">
                  Čitaj dalje <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
