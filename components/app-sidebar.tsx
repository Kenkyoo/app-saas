import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Users, Settings, Shield, Activity, Menu, Heart } from "lucide-react";

const items = [
  { href: "/dashboard", icon: Users, label: "Team" },
  { href: "/dashboard/general", icon: Settings, label: "General" },
  { href: "/dashboard/activity", icon: Activity, label: "Activity" },
  { href: "/dashboard/security", icon: Shield, label: "Security" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="my-5 text-center">
        Sidebar
      </SidebarHeader>  
      <SidebarContent className="p-5">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a className="my-4" href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 my-2">
        <div className="flex gap-5">
          <p>Dev by Kenkyo</p>
          <Heart fill="purple"/>
        </div>   
      </SidebarFooter>
    </Sidebar>
  );
}
