import Image from "next/image";
import Link from "next/link";

import { News } from "@/types/news";

interface NewsListProps{
    news: News[]
}

const NewsList = ({ news }:NewsListProps) => {
    return (
      <ul className="news-list">
        {news.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.slug}`}>
              <Image
                src={`/images/news/${item.image}`}
                alt={item.title}
                width={200}
                height={200}
              />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
}

export default NewsList