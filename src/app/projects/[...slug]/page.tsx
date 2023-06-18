import { notFound } from "next/navigation";
import getProjects from "lib/projects";
import Style from "./project.module.css";


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // const {  } = await getProjects(slug[0]);
  const result = await getProjects(slug[0]);
  const meta = result?.meta;
  return {
    title: meta?.title as string,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const result = await getProjects(slug[0]);
  const MDX = result?.MDX;
  const meta = result?.meta;
  if (!MDX) {
    notFound();
  }
  return (
    <article className={Style.artigo}>
      <div className=" relative box-border w-4/6 max-w-3xl">
        <div className="mb-2 mt-2 w-fit text-start text-5xl font-black pl-8 pr-8">
          {meta?.title as string}
        </div>
        <div className="">{MDX}</div>
      </div>
    </article>
  );
}
