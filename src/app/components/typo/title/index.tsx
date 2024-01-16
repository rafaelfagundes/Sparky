interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

export default Title;
