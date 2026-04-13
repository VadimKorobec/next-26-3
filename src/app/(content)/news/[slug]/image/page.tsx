import Image from "next/image";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../../dummy-news";

;

interface ImagePageProps {
  params: Promise<{ slug: string }>;
}

const ImagePage = async ({ params }: ImagePageProps) => {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
    </div>
  );
};

export default ImagePage;
