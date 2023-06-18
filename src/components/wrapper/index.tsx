"use client";

import dynamic from "next/dynamic";

const MDXWrapper = async ({ slug }: { slug: string }) => {

  const MDXComponent = dynamic(() => import(`../../projetos/${slug}.mdx`));

  return <MDXComponent />;
};


export default MDXWrapper