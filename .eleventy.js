const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require('html-minifier')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItEmoji = require('markdown-it-emoji')
const markdownTasklists = require('markdown-it-task-lists')
const markdownImageSize = require('markdown-it-imsize')
const markdownVideo = require('markdown-it-video')

const filters = require('./_eleventy/filters.js')
const shortcodes = require('./_eleventy/shortcodes.js')

require('dotenv').config()
const isProduction = process.env.NODE_ENV === 'production'

module.exports = function(config) {
    // Filters
    Object.keys(filters).forEach(filterName => {
        config.addFilter(filterName, filters[filterName])
    })

    // Shortcodes
    Object.keys(shortcodes).forEach(shortCodeName => {
        config.addShortcode(shortCodeName, shortcodes[shortCodeName])
    })

    // Plugins
    config.addPlugin(pluginRss)
    config.addPlugin(pluginSyntaxHighlight)

    // Layouts
    config.addLayoutAlias('base', 'base.njk')
    config.addLayoutAlias('page', 'page.njk')
    config.addLayoutAlias('post', 'post.njk')

    // Pass-through files
    config.addPassthroughCopy('src/site.webmanifest')
    config.addPassthroughCopy('src/keybase.txt')
    config.addPassthroughCopy('src/robots.txt')
    config.addPassthroughCopy('src/favicon.ico')
    config.addPassthroughCopy('src/assets/images')
    config.addPassthroughCopy('src/assets/fonts')

    // Markdown Parsing
    config.setLibrary(
        'md',
        markdownIt({
            html: true,
            breaks: true,
            typographer: true
        }).use(markdownItAnchor, {
            permalink: true,
            permalinkSymbol: '#',
            permalinkClass: 'heading-anchor',
            permalinkBefore: true,
            level: 2,
            slugify: s =>
                encodeURIComponent(
                    'h-' +
                        String(s)
                            .trim()
                            .toLowerCase()
                            .replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g, '')
                            .replace(/\s+/g, '-')
                )
        })
        .use(markdownItEmoji)
        .use(markdownTasklists)
        .use(markdownImageSize)
        .use(markdownVideo)
    )

    // Collections: Navigation
    config.addCollection('nav', function(collection) {
        return collection.getFilteredByTag('nav').sort(function(a, b) {
            return a.data.navorder - b.data.navorder
        })
    })

    // Collections: Posts
    config.addCollection('posts', function(collection) {
        const pathsRegex = /\/posts\/|\/drafts\//
        return collection
            .getAllSorted()
            .filter(item => item.inputPath.match(pathsRegex) !== null)
            .filter(item => item.data.permalink !== false)
            .filter(item => !(item.data.draft && isProduction))
    })

    // Minify HTML Output
    config.addTransform('htmlmin', function(content, outputPath) {
        if (outputPath.endsWith('.html') && isProduction) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
        }
        return content
    })

    // opt out of using gitignore for eleventy,
    // because the drafts folder is ignored, but should still be processed.
    config.setUseGitIgnore(false)

    // Base Config
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}
