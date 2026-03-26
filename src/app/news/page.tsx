import Link from "next/link";

import { DUMMY_NEWS } from "../../../dummy-news";
import Image from "next/image";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.slug}`}>
              <Image src={`/images/news/${item.image}`} alt={item.title} width={200} height={200} />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
