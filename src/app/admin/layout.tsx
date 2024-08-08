import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="h-screen">
      <AdminNavbar />

      <div className="grid h-[calc(100vh-56px)] lg:h-[calc(100vh-60px)] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="p-4 lg:p-6 overflow-auto">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
