import dynamic from "next/dynamic";

const AdminHeader = dynamic(() => import("./components/AdminHeader"));

export default function AdminPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8"></div>
    </section>
  );
}
