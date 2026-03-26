import Image from "next/image";
import { DUMMY_NEWS } from "../../../../dummy-news";

interface NewsDetailePageProps {
  params: Promise<{ slug: string }>;
}

const NewsDetailePage = async ({ params }: NewsDetailePageProps) => {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  return (
    <article className="news-article">
      {newsItem ? (
        <header>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={100}
            height={100}
            loading="eager"
          />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
          <p>{newsItem.content}</p>
        </header>
      ) : (
        <p>Sorry we do not have item</p>
      )}
    </article>
  );
};

export default NewsDetailePage;
