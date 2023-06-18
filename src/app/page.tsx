import Introduction from "components/main_page/introduction";
import Projects from "components/main_page/projects";
import dynamic from "next/dynamic";




export default async function Home() {
  let slug = 'hello'


  return (
    <>
     <Introduction/>
     <Projects/>
    </>
  );
}
