import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'sprofile', title: 'Student Profile', icon: 'person', class: '' },
    { path: 'chat', title: 'Chat', icon: 'content_paste', class: '' },
    { path: 'registration', title: 'Registration', icon: 'library_books', class: '' },
    { path: 'result', title: 'Result', icon: 'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'notifications', class: '' }
];

@Component({
    selector: 'app-student-sidebar',
    templateUrl: './student-sidebar.component.html',
    styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent implements OnInit {
    menuItems: any[];

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
