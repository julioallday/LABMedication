import { LocalStorageService } from './../../services/local-storage.service';
import { AccessLoginService } from './../../services/access-login.service';
import {
  ActivatedRoute,
  ChildActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent implements OnInit {
  sidebarVisible: boolean = true;
  url: string = '';
  titulo = '';
  usuario = '';
  constructor(private router: Router, private storage: LocalStorageService) {}
  ngOnInit() {

   this.usuario = this.storage.getStorage('sessionAuth');

    this.router.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        const title =
          this.router.routerState.snapshot.root.firstChild!.data['title'];
        console.log(title);
        this.titulo = title;
        this.url = event.urlAfterRedirects;
        if (this.url == '/login') {
          this.sidebarVisible = false;
        } else {
          this.sidebarVisible = true;
        }
      }
    });
  }

  logout() {}
  receberTitulo() {}
}
