import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

/**
 *
 */
export class MenuItem {
  url: string;
  label: string;
}

/**
 *
 */
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  /**
   *
   */
  @Input()
  title = '';

  @Input()
  last;

  /**
   *
   */
  @Input() menuItems: MenuItem[] = [
    {
      url: '',
      label: 'Home',
    },
  ];

  /**
   *
   */
  constructor(private activatedRoute: ActivatedRoute) {}

  /**
   *
   */
  ngOnInit() {
    this.menuItems = this.createBreadcrumbs(
      this.activatedRoute.root,
      '',
      this.menuItems
    );
  }

  /**
   *
   */
  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data.breadcrumb;
      if (!isNullOrUndefined(label)) {
        breadcrumbs.push({ label, url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
