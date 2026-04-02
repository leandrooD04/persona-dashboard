import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "#/components/ui/sidebar.tsx";
import p3rLogo from "#/assets/images/p3r-logo.png";
import {
    Calendar,
    Cog,
    type LucideIcon,
    Map, Merge,
    Scroll,
    Skull,
    Sparkles,
    Sword,
    TestTubeIcon,
    Users,
    VenetianMask
} from "lucide-react";
import {Link} from "@tanstack/react-router";
import TimeCard from "#/components/custom/time-card.tsx";

type SidebarData = {
    title: string;
    url: string;
    icon: LucideIcon;
}

const data: SidebarData[] = [
    {
        title: "Persona",
        url: "/personas",
        icon: VenetianMask,
    }, {
        title: "Skills",
        url: "/skills",
        icon: Sparkles,
    }, {
        title: "Equipment",
        url: "/equipments",
        icon: Sword,
    }, {
        title: "Item",
        url: "/items",
        icon: TestTubeIcon,
    }, {
        title: "Characters",
        url: "/characters",
        icon: Users,
    }, {
        title: "Enemy",
        url: "/enemies",
        icon: Skull,
    }, {
        title: "Location",
        url: "/locations",
        icon: Map
    }, {
        title: "Quests",
        url: "/quests",
        icon: Scroll
    }, {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
    }, {
        title: "Fusion",
        url: "/fusion",
        icon: Merge,
    }, {
        title: "System",
        url: "/system",
        icon: Cog,
    }
]

function AppSidebar() {
    return (
        <Sidebar variant='sidebar' collapsible='offcanvas'>
            <SidebarHeader className='w-[120%]'>
                <div className='center p-4 bg-primary-800 rounded-lg rounded-br-4xl'>
                    <img
                        className='max-h-full'
                        src={p3rLogo}
                        alt="Persona 3 Reload"/>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className='h-full'>
                    <SidebarMenu className='flex-1 justify-between'>
                        {data.map((item: SidebarData, index: number) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild className="work-sans">
                                    <Link to={item.url}>
                                        <item.icon/>
                                        <span className='text-xl'>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <TimeCard/>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
