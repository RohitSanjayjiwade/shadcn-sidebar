"use client"

import { Bell, Bookmark, Home, List, Mail, Users, User, MoreHorizontal } from "lucide-react";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarItems } from "@/types";
import { SidebarButton } from "./sidebar-button";


const sidebarItems: SidebarItems  = {
	links: [
		{ label: 'Home', href: '/', icon: Home},
		{ label: 'Notifications', href: '/item/notifications', icon: Bell},
		{ label: 'Messages', href: '/item/messages', icon: Mail},
		{ label: 'Lists', href: '/item/lists', icon: List},
		{ label: 'Bookmarks', href: '/item/bookmarks', icon: Bookmark},
		{ label: 'Communities', href: '/item/communities', icon: Users},
		{ label: 'Profile', href: '/item/profile', icon: User},
		
	],

	extras: (
		<div className="flex flex-col gap-2">
			<SidebarButton icon={MoreHorizontal} className="w-full" >More</SidebarButton>
			<SidebarButton className="w-full justify-center text-white" variant="default" >Tweet</SidebarButton>
		</div>
		)
}


export function Sidbar(){
	return(
		<SidebarDesktop sidebarItems={sidebarItems} />
		);
}