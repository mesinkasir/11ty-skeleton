export default function(eleventyConfig) {
eleventyConfig.addShortcode("hello",(title,content,link,url) =>`<h3>${title}</h3><p>${content} <a href="${url}">${link}</a> `,);
eleventyConfig.addShortcode("button",(title,url) =>`<a href="${url}" aria-label="${title}" class="button no">${title}</a> `,);
};
