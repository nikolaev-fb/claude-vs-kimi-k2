import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'
import gfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'pages')

export interface Post {
  slug: string
  title: string
  url: string
  shortDescription: string
  content: string
  date: string
}

export interface PostMetadata {
  slug: string
  title: string
  url: string
  shortDescription: string
  date: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(gfm)
    .use(highlight)
    .use(html)
    .process(matterResult.content)

  const content = processedContent.toString()

  return {
    slug,
    title: matterResult.data.title || 'Untitled',
    url: matterResult.data.url || `/${slug}`,
    shortDescription: matterResult.data['short-description'] || '',
    date: matterResult.data.date || '',
    content,
  }
}

export function getAllPostsMetadata(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'))

  const allPostsMetadata = mdFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      url: matterResult.data.url || `/${slug}`,
      shortDescription: matterResult.data['short-description'] || '',
      date: matterResult.data.date || '',
    }
  })

  return allPostsMetadata.sort((a, b) => {
    if (a.date < b.date) return 1
    if (a.date > b.date) return -1
    return 0
  })
}
