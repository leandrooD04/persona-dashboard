import React from 'react'
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader} from "#/components/ui/sidebar.tsx";
import {p3rLogo} from "#/assets/images/p3r-logo.png";

function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div>
                    <img src={p3rLogo} alt="Persona 3 Reload" width={100} height={100} />
                </div>
            </SidebarHeader>
            <SidebarContent>

            </SidebarContent>
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
