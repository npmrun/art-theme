import rss from '@astrojs/rss';
import { siteInfo } from '@blog/config';
import { published, getPostsUrl } from '@blog/utils';

const posts = await published();

export const get = () => {
  return rss({
    title: siteInfo.siteName,
    description: siteInfo.siteDesc,
    stylesheet: true,
    customData: `<language>${siteInfo.lang || 'en-us'}</language>`,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: getPostsUrl(post.slug),
      title: post.title,
      pubDate: post.pubDate || "",
      description: post.desc || "",
    })),
  });
};
