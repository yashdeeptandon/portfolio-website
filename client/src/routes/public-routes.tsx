import Navbar from "@/components/layout/navbar";

interface PublicRoutesProps {
  children: React.ReactNode;
}

const PublicRoutes: React.FC<PublicRoutesProps> = ({ children }) => {
  return (
    <main className="size-full bg-background p-2 text-primary flex flex-col gap-2">
      <Navbar />
      <section
        className="w-full overflow-auto scroll-smooth mt-14"
        style={{
          height: "calc(100vh - 3rem)",
        }}
      >
        {children}
      </section>
    </main>
  );
};

export default PublicRoutes;
