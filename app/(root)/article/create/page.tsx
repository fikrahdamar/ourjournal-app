import { auth } from "@/auth";
import ArticleForm from "@/components/ArticleForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <>
      <section className="navy-container flex flex-col">
        <div className="flex flex-col items-center  gap-2 w-full max-w-3xl">
          <div className="lightnavy-container items-center justify-center flex mt-12 flex-col">
            <h2 className="text-center  py-6 text-3xl">
              CREATE YOUR OWN STORY
            </h2>
          </div>
        </div>
      </section>
      <ArticleForm />
    </>
  );
};

export default page;
