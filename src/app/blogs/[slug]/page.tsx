import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <div className="text-center text-red-600 mt-10">Blog not found</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <main className="bg-white text-gray-900 py-16 px-4 md:px-6">
      <article className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold text-center capitalize">{data.title}</h1>
        <p className="text-sm text-gray-500 text-center">{data.date}</p>
        <div className="prose prose-lg text-xl">
          <MDXRemote source={content} />
        </div>
      </article>
    </main>
  );
}
