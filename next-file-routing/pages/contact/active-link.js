import { useRouter } from 'next/router';

function ActiveLink() {
  const router = useRouter();
  const href = 'some-route';
  console.log('router: ', router);

  const style = {
    marginRight: 10,
    color: router.asPath === href || 'green',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      Click here
    </a>
  );
}

export default ActiveLink;
