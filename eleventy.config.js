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
    eleventyConfig.addPassthroughCopy("images/favicon");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("images/*.svg");
    eleventyConfig.addPassthroughCopy("images/hero/creative-juice.svg");
    eleventyConfig.addPassthroughCopy("images/hero/soda-can.svg");
    eleventyConfig.addPassthroughCopy("images/hero/watering-can.svg");
    eleventyConfig.addPassthroughCopy("images/hero/flower-pot.svg");
    eleventyConfig.addPassthroughCopy("images/hero/battery.svg"); 
    eleventyConfig.addPassthroughCopy("images/cherry-punnet.svg");

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