import markdownIt from "markdown-it"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    let options = {
        html: true, 
        breaks: true,
        linkify: true
    };

    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("images/favicon");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("images/*.svg");
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    
    // Create a projects collection from the projects folder
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("projects/**/*.md");
    });

	eleventyConfig.setLibrary("md", markdownIt(options));
};