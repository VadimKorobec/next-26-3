interface NewsDetailePageProps {
  params: Promise<{ id: string }>;
}

const NewsDetailePage = async ({ params }: NewsDetailePageProps) => {
  const { id } = await params;

  return (
    <div>
      <h1>News Detail Page {id}</h1>
    </div>
  );
};

export default NewsDetailePage;
