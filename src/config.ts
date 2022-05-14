import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    // media: {
    //     path: '/media',
    //     title: 'media'
    // },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Jianan\'\s blog',
    title: 'Jianan\'\s blog',
    description: 'A Blog for Developer created by Jian-An, Lin',
    url: 'https://blog.jianan1104.dev/',
    githubUrl: 'https://github.com/jianan1104/astro-ink-blog',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
