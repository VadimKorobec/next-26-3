import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/first">First News Item</Link>
        </li>
        <li>
          <Link href="/second">Second News Item</Link>
        </li>
        <li>
          <Link href="/third">Third News Item</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
