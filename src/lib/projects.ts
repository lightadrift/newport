import path from "path";
import { JSXElementConstructor, ReactElement } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from "react";
import { readdir, readFile } from "node:fs/promises";
import { ImageComponent, Gallery } from "@utils/components";

const components = {
  ImageComponent,
  Gallery
};

// function updateMDXMapping(
//   requireMDX: __WebpackModuleApi.RequireContext,
//   MDXMapping: MDXMappingType
// ) {
//   requireMDX.keys().forEach((filePath) => {
//     const name = filePath.replace(/\.\/|\.mdx$/g, "");
//     if (!MDXMapping.hasOwnProperty(name)) {
//       MDXMapping[name] = lazy(
//         () =>
//           new Promise((resolve) => {
//             resolve(requireMDX(filePath));
//           })
//       );
//     }
//   });
// }

// function checker(requireMDX: __WebpackModuleApi.RequireContext, slug: string) {
//   const baseUrl = requireMDX
//     .keys()
//     .map((filePath) => path.basename(filePath))
//     .filter((fileName, index, array) => array.indexOf(fileName) === index);
//   const filenames = baseUrl.map((item) => item.split(".")[0]);
//   if (!filenames.includes(slug)) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function getItemBySlug(array: string[], slug: string) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === slug) {
//       return array[i];
//     }
//   }
//   return "null"; // Return null if the slug doesn't exist in the array
// }

// const getProjects = async (slug: string) => {
//   const MDXMapping: MDXMappingType = {};
//   const requireMdx = require.context("../content", true, /\.mdx$/);
//     // console.log("Updated MDXMapping:", MDXMapping);
//   }

//   const root = path.join(process.cwd(), "src/projetos");
//   // const files = readdirSync(path.join("./src/projetos"));
//   const listing = readdirSync(root);
//   const check = listing.map((files) => {
//     return files.split(".")[0];
//   });
//   if (!check.includes(slug)) {
//     notFound();
//   }
//   const result = listing
//     .filter((item) => item.includes("buaa"))
//     .map((item) => {
//       const file = item.split(".")[0];
//       const meta = require(`../projetos/${file}.mdx`).meta;
//       return meta;
//     });
//   const meta = result[0];
//   // const MDXModule = await import(`../projetos/buaa.mdx`);
//   // const MDX = dynamic(() => import(`../projetos/${slug}.mdx`));
//   return {  meta };
//   };

// NADA DISSO FUNCIONA POR ENQUANTO

// const getProjects = async (slug: string): Promise<{ MDX: any, meta: any } | null> => {
//   const result: { MDX: any; meta: any; } | null = { MDX: null, meta: null };
//   const MDX_MAPPING: MDXMappingType = {};
//   const requireMdx = require.context("../projetos", true, /\.mdx$/);
//   updateMDXMapping(requireMdx, MDX_MAPPING);
//   const baseUrl = requireMdx
//     .keys()
//     .map((filePath) => path.basename(filePath))
//     .filter((fileName, index, array) => array.indexOf(fileName) === index);
//   const filenames = baseUrl.map((item) => item.split(".")[0]);
//   if (!filenames.includes(slug)) {
//     return null;
//   }
//   const file = getItemBySlug(filenames, slug);
//   const meta = filenames
//     .filter((i) => i.includes(file))
//     .map((item) => {
//       const metaData = require(`../projetos/${item}.mdx`).meta;
//       return metaData;
//     });
//   const MDX = MDX_MAPPING[slug];
//   result.MDX = MDX;
//   result.meta = meta;
//   return { MDX, meta };
// };

const root = path.join(process.cwd(), "src/projetos");

const getProjects = cache(
  async (
    slug: string
  ): Promise<{
    MDX: ReactElement<any, string | JSXElementConstructor<any>>;
    meta: Record<string, unknown>;
  } | null> => {
    const files = await readdir(path.join(root));
    const filenames = files.map((item) => {
      const name = item.split(".")[0];
      return name;
    });

    if (!filenames.includes(slug)) {
      return null;
    }
    const filePath = path.join(root, `${slug}.mdx`);
    const file = await readFile(filePath, { encoding: "utf8" });
    const { content, frontmatter } = await compileMDX({
      source: file,
      options: { parseFrontmatter: true },
      components: {
        ...components,
      },
    });
    return { MDX: content, meta: frontmatter };
  }
);

export default getProjects;
