interface NewsDetailesPageProps {
  params: Promise<{ slug: string }>;
}

const NewsDetailesPage = async ({ params }: NewsDetailesPageProps) => {
  const { slug } = await params;
  return (
    <div>
      <h1>{slug} Pages</h1>
    </div>
  );
};

export default NewsDetailesPage;
