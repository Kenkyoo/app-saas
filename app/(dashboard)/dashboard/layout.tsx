"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider style={{
    "--sidebar-width": "20rem",
    "--sidebar-width-mobile": "20rem",
  }}>
      <AppSidebar />
      <SidebarTrigger />
      <main className="w-full p-5">
        {children}
      </main>
    </SidebarProvider>
  );
}
