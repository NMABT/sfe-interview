# Server-Side Rendering Interview Question

## Task: Server-Side Rendered Blog Page

Create a single server-side rendered blog page that demonstrates SSR concepts and best practices.

## Requirements

### Create `/pages/blog/[slug].tsx`
- Use `getServerSideProps` to fetch blog data on every request
- Handle non-existent blog slugs with proper 404 responses
- Add dynamic SEO meta tags (title, description, Open Graph)
- Display server-rendered timestamp to prove SSR
- Include proper TypeScript types
- Add loading states and error handling

## Technical Requirements

1. **Server-Side Data Fetching**: Implement `getServerSideProps` properly
2. **Error Handling**: Return `notFound: true` for invalid slugs
3. **SEO Optimization**: Dynamic meta tags based on blog content  
4. **Performance**: Add appropriate cache headers
5. **TypeScript**: Proper typing throughout
6. **User Experience**: Handle loading and error states

## Evaluation Criteria

- **SSR Implementation**: Correct use of `getServerSideProps`
- **Error Handling**: Proper 404 handling and validation
- **SEO**: Dynamic meta tags and structured data
- **Code Quality**: Clean, readable TypeScript code
- **Performance**: Understanding of SSR implications

## Time Limit: 30 minutes

Focus on demonstrating solid understanding of Next.js server-side rendering fundamentals.