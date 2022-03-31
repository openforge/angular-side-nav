import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'openforge-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
    constructor(route: ActivatedRoute) {
        route.params.subscribe(params => console.log('side menu: id parameter', params.id));
    }

    ngOnInit(): void {
        //
    }
}
