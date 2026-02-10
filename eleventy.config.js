import markdownIt from "markdown-it"
import moment from "moment";
// const moment = require('moment');

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
    eleventyConfig.addPassthroughCopy("images/*.svg");
    eleventyConfig.addPassthroughCopy("images/hero/creative-juice.svg");
    eleventyConfig.addPassthroughCopy("images/hero/soda-can.svg");
    eleventyConfig.addPassthroughCopy("images/hero/watering-can.svg");
    eleventyConfig.addPassthroughCopy("images/hero/flower-pot.svg");
    eleventyConfig.addPassthroughCopy("images/hero/battery.svg"); 
    eleventyConfig.addPassthroughCopy("images/cherry-punnet.svg");
    
    eleventyConfig.addPassthroughCopy("images/projects/darjeeling/dd-logo-primary.svg");
    eleventyConfig.addPassthroughCopy("images/projects/darjeeling/dd-logo-secondary.svg");
    eleventyConfig.addPassthroughCopy("images/projects/darjeeling/dd-logo-logomark.svg");
    eleventyConfig.addPassthroughCopy("images/projects/darjeeling/dd-logo-submark-primary.svg");
    eleventyConfig.addPassthroughCopy("images/projects/darjeeling/dd-logo-submark-secondary.svg");

    eleventyConfig.addPassthroughCopy("images/projects/my_eirene/me-logo-primary.svg");
    eleventyConfig.addPassthroughCopy("images/projects/my_eirene/me-logo-secondary.svg");
    eleventyConfig.addPassthroughCopy("images/projects/my_eirene/me-logo-logomark.svg");
    eleventyConfig.addPassthroughCopy("images/projects/my_eirene/me-logo-submark.svg");

    eleventyConfig.addPassthroughCopy("images/projects/my_eirene/me-sceptre-of-the-goddess.svg");
    eleventyConfig.addPassthroughCopy("images/projects/my_eirene/me-goddess-of-peace.svg");

    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

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