import Link from 'next/link';

interface ButtonNavProps {
  label: string;
  route: string;
  key: string; 
}

const ButtonNav: React.FC<ButtonNavProps> = ({ label, route, key }) => {
  return (
    <>
      <Link
        href={route}
        key={key}
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        {label}
      </Link>
    </>
  );
};

export default ButtonNav;
