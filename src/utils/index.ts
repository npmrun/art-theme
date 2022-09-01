import type { Post } from '#/type';
import { isDev, settings } from '@blog/config';
import type { MarkdownInstance } from 'astro';

export function getPostsUrl(slug) {
  return `/post/${slug}`;
}

export async function getPosts() {
  const obj = await import.meta.glob('@root/article/**/*.{md,mdx}', {
    eager: true,
  });
  return Object.values(obj) as MarkdownInstance<any>[];
}

export function single(post: MarkdownInstance<any>): Post {
  const slug = post.file
    .split('/')
    .reverse()[0]
    .replace(/\.(md|mdx)$/g, '');
  return {
    ...post.frontmatter,
    Content: post.Content,
    slug: slug,
    url: post.url,
    draft: post.file.split('/').reverse()[1] === 'drafts',
    pubTimestamp: new Date(post.frontmatter.pubDate).valueOf(),
    updatedTimestamp: !!post.frontmatter.updatedDate && new Date(post.frontmatter.updatedDate).valueOf(),
  };
}

export async function published(): Promise<Post[]> {
  const posts = await getPosts();
  let allPosts = posts
    .filter((post) => post.frontmatter.title)
    .map((post) => single(post))
    .filter((post) => isDev || !post.draft)
  allPosts = allPosts.sort((a, b) => {
      if(b.pubTimestamp && a.pubTimestamp){
          return b.pubTimestamp - a.pubTimestamp
      }else{
          return -1
      }
    })
  for (let i = 0; i < allPosts.length; i++) {
    const post = allPosts[i];
    if(post.top){
        const delOne = allPosts.splice(i, 1);
        allPosts.unshift(delOne[0])
    }
  }

  return allPosts;
}
