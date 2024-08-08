import SellerNavbar from "@/components/seller/SellerNavbar";
import SellerSidebar from "@/components/seller/SellerSidebar";
import PrivetLayout from "@/components/shared/PrivetLayout";

const SellerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <PrivetLayout>
      <main className="h-screen">
        <SellerNavbar />

        <div className="grid h-[calc(100vh-56px)] lg:h-[calc(100vh-60px)] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <SellerSidebar />
          <div className="p-4 lg:p-6 overflow-auto">{children}</div>
        </div>
      </main>
    </PrivetLayout>
  );
};

export default SellerLayout;
