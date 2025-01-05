const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="pt-[110px]">{children}</div>;
};

export default layout;
