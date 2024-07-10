import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.dvidal.dev",
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: "https://www.dvidal.dev/experience",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://www.dvidal.dev/projects",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://www.dvidal.dev/skills",
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: "https://www.dvidal.dev/education",
            lastModified: new Date(),
            priority: 0.7,
        },
    ];
}
