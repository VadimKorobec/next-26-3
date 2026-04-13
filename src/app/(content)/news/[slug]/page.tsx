import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


import { DUMMY_NEWS } from "../../../../../dummy-news";

interface NewsDetailePageProps {
  params: Promise<{ slug: string }>;
}

const NewsDetailePage = async ({ params }: NewsDetailePageProps) => {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={100}
            height={100}
            loading="eager"
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
        <p>{newsItem.content}</p>
      </header>
    </article>
  );
};

export default NewsDetailePage;
