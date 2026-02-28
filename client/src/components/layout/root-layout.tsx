import React from 'react'
import {SidebarProvider, SidebarTrigger} from "#/components/ui/sidebar.tsx";
import AppSidebar from "#/components/custom/app-sidebar.tsx";

function RootLayoutComponent({children}: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main>
                <SidebarTrigger/>
                {children}
            </main>
        </SidebarProvider>
    )
}

export default RootLayoutComponent;
