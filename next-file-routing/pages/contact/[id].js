import { useRouter } from 'next/router';

export default function ContactId() {
  const router = useRouter();
  console.log('router: ', router);

  const { id } = router.query;
  return (
    <div>
      <p>At ID: {id}</p>
    </div>
  );
}
