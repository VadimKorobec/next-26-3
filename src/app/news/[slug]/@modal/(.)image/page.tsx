import { notFound } from "next/navigation";
import Image from "next/image";

import { DUMMY_NEWS } from "../../../../../../dummy-news";
import ModalBackdrop from "@/components/ModalBackdrop/ModalBackdrop";

interface InterceptedImagePageProps {
  params: Promise<{ slug: string }>;
}

const InterceptedImagePage = async ({ params }: InterceptedImagePageProps) => {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={740}
            height={800}
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
