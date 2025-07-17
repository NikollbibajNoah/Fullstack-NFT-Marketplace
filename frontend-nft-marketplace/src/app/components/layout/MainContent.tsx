export type MainContentProps = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <main>{children}</main>;
};
