import fs from "fs";
import path from "path";
import fsExtra from "fs-extra";

const fsPromises = fs.promises;
const targetDir = "./public/images";
const postsDirx = "./content/portfolio";
const BlogDir = "./content/blog";

async function copyImagesToPublic(images, slug, postsDir) {
  for (const image of images) {
    await fsPromises.copyFile(
      `${postsDir}/${slug}/${image}`,
      `${targetDir}/${slug}/${image}`
    );
  }
}

async function createPostImageFoldersForCopy(postsDir) {
  // Get every post folder: post-one, post-two etc.
  const portgolioSlugs = await fsPromises.readdir(postsDir);
  let options = [];
  portgolioSlugs.forEach((file) => {
    if (file[0] != ".") {
      options.push(file);
    }
  });

  for (const slug of options) {
    const allowedImageFileExtensions = [
      ".png",
      ".jpg",
      ".jpeg",
      ".gif",
      ".webp",
    ];

    // Read all files inside current post folder
    const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

    // Filter out files with allowed file extension (images)
    const images = postDirFiles.filter((file) =>
      allowedImageFileExtensions.includes(path.extname(file))
    );

    if (images.length) {
      // Create a folder for images of this post inside public
      await fsPromises.mkdir(`${targetDir}/${slug}`);

      await copyImagesToPublic(images, slug, postsDir);
    }
  }
}

await fsExtra.emptyDir(targetDir);
await createPostImageFoldersForCopy("./content/Portfolio");
await createPostImageFoldersForCopy("./content/Blog");
console.log("Done coping images");
