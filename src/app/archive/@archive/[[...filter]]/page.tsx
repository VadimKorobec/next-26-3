import NewsList from "@/components/NewsList/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

interface FilteredNewsPageProps {
  params: Promise<{ filter: string }>;
}

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
  const { filter } = await params;
  

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = []
  }

  if(selectedYear && !getAvailableNewsYears().includes(+selectedYear))

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link: number) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {news && news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>No news found for the selected period.</p>
      )}
    </>
  );
};

export default FilteredNewsPage;
