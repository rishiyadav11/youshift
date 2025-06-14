import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image,
    };
  });

  return (
 <main className="min-h-screen bg-gradient-to-br from-[#81C9F9] to-[#B5E5FB] px-6 py-16 text-gray-900 md:px-12">
      <section className="mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">YouShift Insights</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Ideas, stories, and resources from the minds behind YouShift — everything we're learning as we build the future of healthcare operations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
<Link key={post.slug} href={`/blogs/${post.slug}`}>
            <div className="rounded-xl bg-white/30 p-6 shadow-md backdrop-blur-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.date}</p>
              <p className="mt-2 text-gray-800">{post.description}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="mt-4 rounded-lg w-full h-48 object-cover"
                />
              )}
            </div>
          </Link>
        ))}
      </div>
      </section>
    </main> 
  );
}
