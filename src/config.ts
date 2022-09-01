const { MODE } = import.meta.env;

export const isDev = MODE === "development";
export const isProd = MODE === "production";

export const pageSize = 10;

export const siteInfo = {
    siteName: "Art Theme",
    siteDesc: "A Beautiful Blog To Record Life !",
    lang: "en-us",
    icon: "https://api.lorem.space/image/face?w=96&h=96",
    avatar: "https://api.lorem.space/image/face?w=96&h=96",
    github: "https://github.com/npmrun/art-theme",
    get hero() {
        return (
            "https://api.lorem.space/image?w=1280&h=780&random=" +
            Math.random() * 1000
        );
    },
    heroPosition: "center",
    startTime: "6/8/2022 10:28:00",
};

export const nav = [
    {
        title: "Search",
        slug: "/search",
        icon: false,
        children: [],
    },
    {
        title: "Category",
        slug: "/categories",
        icon: false,
        children: [],
    },
    {
        title: "About",
        slug: "/about",
        icon: "emojione-v1:beer-mug",
        children: [],
    },
    {
        title: "Contact",
        slug: "/contact",
        icon: "emojione:call-me-hand",
        children: [],
    },
    {
        title: "Demo",
        slug: "/demo",
        icon: false,
        children: [],
    },
];

export const settings = {
    showTOC: true,
    postPicture: "first",
    categories: [
        {
            name: "Demo",
            desc: "Some Demo",
            image:
                "https://api.lorem.space/image?w=290&h=80&random=" +
                Math.random() * 1000,
            order: 1,
        },
        {
            name: "Astro",
            desc: "Astro Theme",
            image:
                "https://api.lorem.space/image?w=290&h=80&random=" +
                Math.random() * 1000,
            order: 2,
        },
    ],
    categorySettings: {
        order: "count",
    },
};
