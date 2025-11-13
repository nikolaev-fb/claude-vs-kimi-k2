import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkHighlight from 'remark-highlight.js'

export interface Post {
  slug: string
  title: string
  url: string
  'short-description': string
  content?: string
  date: string
}

// Simulate loading posts data from JSON since we can't use fs on client side
export async function getAllPosts(): Promise<Post[]> {
  try {
    // In a real app, we'd fetch from an API or database here
    const postsData = [
      {
        slug: "getting-started-with-nextjs",
        title: "Getting Started with Next.js",
        url: "/posts/getting-started-with-nextjs",
        "short-description": "Learn the basics of Next.js and how to build modern web applications",
        date: "2025-11-13T14:00:00Z"
      },
      {
        slug: "react-hooks-best-practices",
        title: "React Hooks Best Practices",
        url: "/posts/react-hooks-best-practices",
        "short-description": "Essential patterns and practices for using React Hooks effectively",
        date: "2025-11-13T14:00:00Z"
      },
      {
        slug: "javascript-array-methods",
        title: "JavaScript Array Methods You Should Know",
        url: "/posts/javascript-array-methods",
        "short-description": "A comprehensive guide to essential JavaScript array methods",
        date: "2025-11-13T14:00:00Z"
      }
    ]

    return postsData.sort((a, b) => a.title.localeCompare(b.title))
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Simulate loading a specific post content
    // In a real app, we'd fetch the markdown content and process it
    const postData = await getAllPosts()
    const post = postData.find(p => p.slug === slug)

    if (post) {
      // Create sample content for demo purposes
      let sampleContent = ''

      if (slug === 'getting-started-with-nextjs') {
        sampleContent = `
# Getting Started with Next.js

Next.js is a powerful React framework that enables you to build superfast, user-friendly web applications.

## What is Next.js?

Next.js is a complete full-stack framework built on top of React. It provides powerful features like server-side rendering, static site generation, and API routes.

## Key Features

### Server-Side Rendering (SSR)

With Next.js, you can render pages on the server for better SEO and initial load performance.

### Static Site Generation (SSG)

Pre-render pages at build time for lightning-fast loads.

### API Routes

Create backend API endpoints directly within your Next.js application.

## Getting Started

Install Next.js:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
\`\`\`

This creates a new Next.js application with all the modern tooling you need.
`
      } else if (slug === 'react-hooks-best-practices') {
        sampleContent = `
# React Hooks Best Practices

React Hooks revolutionized how we write React components. Here are essential best practices to follow when using hooks.

## The Rules of Hooks

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions.
2. **Only call hooks from React functions** - Call them from React function components or custom hooks.

## State Management

### 1. Keep State Local When Possible

Use local state for component-specific data rather than lifting state up unnecessarily.

### 2. Use useState for Simple State

For managing component state, useState is usually the best choice:

\`\`\`javascript
const [count, setCount] = useState(0)
\`\`\`

### 3. Use useReducer for Complex State

When dealing with complex state logic or when the next state depends on the previous one, useReducer might be better.

## Effects and Side Effects

### Use useEffect for Side Effects

Side effects like data fetching, subscriptions, or DOM manipulation belong in useEffect.

\`\`\`javascript
useEffect(() => {
  // Side effect code here
}, [dependency])
\`\`\`

### Clean Up Side Effects

Always clean up subscriptions and event listeners to prevent memory leaks.

## Performance Optimization

### Use useMemo for Expensive Calculations

Memoize expensive calculations to avoid recomputing them on every render.

### Use useCallback for Stable References

Prevent unnecessary re-creation of functions that are passed as props.

Follow these practices and you'll write cleaner, more maintainable React code!
`
      } else {
        sampleContent = `
# JavaScript Array Methods You Should Know

JavaScript arrays come with powerful built-in methods that make data manipulation easier. Here are the essential ones every developer should master.

## Transformation Methods

### map() - Transform Array Elements

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2)
console.log(doubled) // [2, 4, 6, 8, 10]
\`\`\`

### filter() - Filter Array Elements

\`\`\`javascript
const adults = users.filter(user => user.age >= 18)
\`\`\`

### reduce() - Reduce Array to Single Value

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum) // 15
\`\`\`

## Key Takeaways

1. Use map() for transforming arrays
2. Use filter() for filtering data
3. Use reduce() for aggregating values
4. Combine methods for powerful data processing

Master these methods and you'll write more concise, readable code!
`
      }

      // Process markdown content
      const processedContent = await remark()
        .use(html)
        .use(remarkHighlight)
        .process(sampleContent)

      return {
        ...post,
        content: processedContent.toString()
      } as Post
    }

    return null
  } catch (error) {
    console.error('Error reading post file:', error)
    return null
  }
}