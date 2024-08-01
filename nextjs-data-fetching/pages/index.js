import Link from 'next/link';
export default function Home({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <p key={item.id}>
          <Link href={`/todo/${item.id}`}>
            <a> {item.title}</a>
          </Link>
        </p>
      ))}
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
};
