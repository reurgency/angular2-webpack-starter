/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './scss/application.scss' ],
  template: `

  <nav class="navbar navbar-toggleable-md sticky-top navbar-inverse bg-primary">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">App</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" [routerLink]=" ['./'] " routerLinkActive="active">Index</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]=" ['./home'] " routerLinkActive="active">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]=" ['./detail'] " routerLinkActive="active">Detail</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]=" ['./barrel'] " routerLinkActive="active">Barrel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]=" ['./about'] " routerLinkActive="active">About</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

    <main class="container">
      <router-outlet></router-outlet>
    </main>

    <div  class="container">
      <h4>App State</h4>
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    </div>

    <footer>
      <hr>
      <div class="d-flex flex-row">
        <div>
          <a [href]="url">
            <img [src]="angularclassLogo" width="5%">
          </a>
        </div>
        <div>Angular2, Bootstrap4, WebPack2 Starter</div>
      </div>
    </footer>

  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  

}
