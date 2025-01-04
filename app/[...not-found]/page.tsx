import Globe from "@/components/Globe/Globe";
import "./not-found.css";

const NotFoundPage = () => {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center text-center">
      <h1 className="notfound-header absolute font-bold font-[family-name:var(--font-funnel-display)]">
        404
      </h1>
      <h3 className="absolute bottom-[5%] text-xl font-[family-name:var(--font-funnel-display)]">
        {'"'}What you seek does not lie here{'"'}
      </h3>
      <Globe />
    </div>
  );
};

export default NotFoundPage;
