interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <div className="bg-zinc-900 p-5">
      <h1 className="text-white text-3xl font-semibold text-center">{label}</h1>
    </div>
  );
};

export default Header;
