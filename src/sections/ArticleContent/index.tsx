import { MainContent } from "@/sections/ArticleContent/components/MainContent";
import { Sidebar } from "@/sections/ArticleContent/components/Sidebar";

export const ArticleContent = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full mt-1.5 md:flex-nowrap md:mt-5">
      <MainContent />
      <Sidebar />
    </div>
  );
};
