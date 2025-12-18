/**
 * INTERVIEW TASK: Server-Side Rendered Blog Page
 * 
 * Build a dynamic blog page using Server-Side Rendering (SSR).
 * 
 * REQUIREMENTS:
 * 1. Import Blog type and blogs data
 * 2. Implement getServerSideProps() - fetch blog data on every request
 * 3. Handle non-existent slugs with proper 404 responses
 * 4. Add dynamic SEO meta tags (title, description, Open Graph)
 * 5. Display server timestamp to prove SSR
 * 6. Include proper TypeScript types and error handling
 * 
 * KEY CONCEPTS: SSR, getServerSideProps, SEO, TypeScript, Error Handling
 */

// Starter template for Server-Side Rendered Blog Page
// TODO: Implement SSR with getServerSideProps

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Blog from '../../types/blog.type';

interface BlogPageProps {
  blog?: Blog;
  serverTimestamp: string;
  notFound?: boolean;
}

export default function BlogPage({ blog, serverTimestamp, notFound }: BlogPageProps) {
  const router = useRouter();

  // TODO: Handle case when blog is not found
  if (notFound || !blog) {
    return (
      <div>
        <Head>
          <title>Blog Not Found</title>
        </Head>
        <h1>404 - Blog Not Found</h1>
      </div>
    );
  }

  // TODO: Implement proper blog rendering with SEO
  return (
    <div>
      <Head>
        {/* TODO: Add dynamic meta tags based on blog content */}
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
        {/* TODO: Add Open Graph meta tags */}
      </Head>

      <article>
        <h1>{blog.title}</h1>
        <p>{blog.excerpt}</p>
        
        {/* TODO: Add more blog content */}
        
        <footer>
          <small>Server-rendered at: {serverTimestamp}</small>
        </footer>
      </article>
    </div>
  );
}

// TODO: Implement getServerSideProps for SSR
// Requirements:
// 1. Extract slug from context.params
// 2. Find blog by slug from blogs array
// 3. Return notFound: true if blog doesn't exist
// 4. Add server timestamp to prove SSR
// 5. Set cache headers for performance
// 6. Handle any server-side errors

export const getServerSideProps: GetServerSideProps = async (context) => {
  // TODO: Implement server-side data fetching
  
  const serverTimestamp = new Date().toISOString();
  
  return {
    props: {
      serverTimestamp
    }
  };
};
