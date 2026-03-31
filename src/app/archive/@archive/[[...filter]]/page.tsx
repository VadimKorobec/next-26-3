import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

interface FilteredNewsPageProps {
  params: Promise<{ filter: string }>;
}

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
  const { filter } = await params;

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link: number) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default FilteredNewsPage;
