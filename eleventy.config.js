import markdownIt from "markdown-it"
import moment from "moment";

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    let options = {
        html: true, 
        breaks: true,
        linkify: true
    };

    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("images/favicon/*");
    eleventyConfig.addPassthroughCopy("scripts");
    
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["auto"]
    });

    // Create a projects collection from the projects folder
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("projects/**/*.md");
    });

    eleventyConfig.addFilter("date", function(date, format) {
        const d = new Date(date);
        if (format === "MMM YYYY") {
          return moment(date).format(format);
        }
    });

	eleventyConfig.setLibrary("md", markdownIt(options));
};