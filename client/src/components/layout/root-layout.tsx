import React from 'react'
import {SidebarProvider, SidebarTrigger} from "#/components/ui/sidebar.tsx";
import AppSidebar from "#/components/custom/app-sidebar.tsx";
import HeaderTitle from "#/components/custom/header-title.tsx";

function RootLayoutComponent({children}: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className='w-full'>
                <HeaderTitle title='Persona'/>
                <SidebarTrigger/>
                {children}
            </main>
        </SidebarProvider>
    )
}

export default RootLayoutComponent;
