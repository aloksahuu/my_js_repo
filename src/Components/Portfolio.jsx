/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/protofolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Food Vision system",
    description:
      "Created a CNN based food image detection system which can detect the food image and give calories and nutrition estimats of the food item.",
    url: "https://github.com/aloksahuu/Food-vision",
  },
  {
    title: "Forest fire prediction sytem",
    description:
      "Created a ML based sytem that can predict the forest fire probabilit and deployed it as an website with good user interface.",
    url: "https://github.com/aloksahuu/Forest-fire-prediction",
  },
  {
    title: "E-commerce website",
    description:
      "Created a E-commerce website with a good UI as a practice for my web deveopment projects.",
    url: "https://github.com/aloksahuu/E-commerce-website",
  },
  {
    title: "Regestration form ",
    description:
      "Created a basic regestration form using HTML, CSS & JS as a beggenier in web development.",
    url: "https://github.com/aloksahuu/Registration-form-using-HTML-and-CSS",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
