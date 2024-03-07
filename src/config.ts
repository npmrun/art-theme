const { MODE } = import.meta.env;

export const isDev = MODE === "development";
export const isProd = MODE === "production";

export const pageSize = 10;

export const siteInfo = {
    siteName: "小白菜pakchoi ",
    siteDesc: "Some thing for nothing",
    lang: "en-us",
    icon: "https://fastly.jsdelivr.net/gh/emjio/picture@main/img/2024-3-7/avatar.jpg",
    avatar: "https://fastly.jsdelivr.net/gh/emjio/picture@main/img/2024-3-7/avatar.jpg",
    github: "https://github.com/npmrun/art-theme",
    get hero() {
        return (
            "https://picsum.photos/1280/780?random=" +
            Math.random() * 1000
        );
    },
    heroPosition: "center",
    startTime: "3/7/2024 14:52:00",
};

export const nav = [
    {
        title: "Search",
        slug: "/search",
        children: [],
    },
    {
        title: "Category",
        slug: "/categories",
        children: [],
    },
    {
        title: "About",
        slug: "/about",
        children: [],
    },
    {
        title: "Contact",
        slug: "/contact",
        children: [],
    },
];

export const settings = {
    showTOC: false,
    articleTheme: "github",
    postPicture: "first",
    categories: [
        {
            name: "Demo",
            desc: "Some Demo",
            image:
                "https://picsum.photos/290/80?random=" +
                Math.random() * 1000,
            order: 1,
        },
        {
            name: "Astro",
            desc: "Astro Theme",
            image:
                "https://picsum.photos/290/80?random=" +
                Math.random() * 1000,
            order: 2,
        },
    ],
    categorySettings: {
        order: "count",
    },
};
