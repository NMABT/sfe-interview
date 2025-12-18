// Server-Side Rendered Blog Page - Interview Question
// TODO: Implement SSR with getServerSideProps

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Blog from '../../../types/blog.type';

interface SSRBlogPageProps {
  blog?: Blog;
  serverTimestamp: string;
  requestTime: number;
}

export default function SSRBlogPage({ blog, serverTimestamp, requestTime }: SSRBlogPageProps) {
  // TODO: Handle case when blog is not found
  if (!blog) {
    return (
      <div>
        <Head>
          <title>Blog Not Found</title>
        </Head>
        <h1>404 - Blog Not Found</h1>
        <p>Rendered server-side at: {serverTimestamp}</p>
      </div>
    );
  }

  // TODO: Implement proper blog rendering with SEO
  return (
    <div>
      <Head>
        {/* TODO: Add dynamic meta tags based on blog content */}
        <title>{blog.title} - SSR Blog</title>
        <meta name="description" content={blog.excerpt} />
        {/* TODO: Add Open Graph meta tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
      </Head>

      <article>
        <h1>{blog.title}</h1>
        <p><strong>Excerpt:</strong> {blog.excerpt}</p>
        
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3>SSR Debug Info:</h3>
          <p><strong>Server-rendered at:</strong> {serverTimestamp}</p>
          <p><strong>Request processing time:</strong> {requestTime}ms</p>
          <p><strong>Slug:</strong> {blog.slug}</p>
        </div>
        
        {/* TODO: Add more blog content */}
      </article>
    </div>
  );
}

// TODO: Implement getServerSideProps for SSR
// Requirements:
// 1. Extract slug from context.params
// 2. Find blog by slug from blogs array  
// 3. Return notFound: true if blog doesn't exist
// 4. Add server timestamp and request timing
// 5. Set cache headers for performance
// 6. Handle any server-side errors

export const getServerSideProps: GetServerSideProps = async (context) => {
  const startTime = Date.now();
  
  // TODO: Implement server-side data fetching logic here
  // 1. Get slug from context.params?.slug
  // 2. Import and search blogs array
  // 3. Handle 404 case
  // 4. Calculate request time
  
  const serverTimestamp = new Date().toISOString();
  const requestTime = Date.now() - startTime;
  
  // TODO: Replace this with actual implementation
  return {
    props: {
      serverTimestamp,
      requestTime
    }
  };
};