import { visit } from 'unist-util-visit'
import Slugger from 'github-slugger'
import {toString} from 'hast-util-to-string'

const slugs = new Slugger()

export default function remarkParseVar() {
  return function (tree, file) {
    slugs.reset()

    const images = [];
    visit(tree, 'image', (node) => {
      const name = node.url.split('/').reverse()[0]
      images.push({
        name: name,
        alt: node.alt,
        url: node.url,
      })
    })
    const head = []
    visit(tree, 'heading', (node) => {
      head.push({
        level: node.depth,
        title: slugs.slug(toString(node)),
      })
    })
    file.data.astro.frontmatter._rawString = file.value;
    file.data.astro.frontmatter._images = images;
    file.data.astro.frontmatter._head = head;
  };
}
