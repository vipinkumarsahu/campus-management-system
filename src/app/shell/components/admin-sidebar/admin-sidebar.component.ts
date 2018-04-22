import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'registration', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: 'classmgmt', title: 'Class Management', icon: 'content_paste', class: '' },
    { path: 'exams', title: 'Exmas', icon: 'library_books', class: '' },
    { path: 'timetable', title: 'Time Table', icon: 'bubble_chart', class: '' },
    { path: 'admin-student/admin-manage-student', title: 'Manage Student', icon: 'bubble_chart', class: '' },
    { path: 'admin-student/admin-manage-subject', title: 'Manage Subject', icon: 'bubble_chart', class: '' },
    { path: 'admin-student/admin-manage-scholarship', title: 'Student Scholarship', icon: 'location_on', class: '' },
    { path: 'admin-professor/admin-manage-professor', title: 'Manage Professor', icon: 'location_on', class: '' },

    { path: 'notifications', title: 'Notifications', icon: 'notifications', class: '' }
];

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
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
