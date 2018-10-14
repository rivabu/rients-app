# Angular overview

## two way binding

```html
<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name">
  </label>
</div>
```


## event binding

```html
<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
```


set the class on the selected item

```html
[class.selected]="hero === selectedHero"
```

## communicatie between components with @input

```html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```
@Input() hero: Hero;


## services with Observable
service:
```javascript
getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}
````
component:
```javascript
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```

## routing

imports: [ RouterModule.forRoot(routes) ],

The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

```html
<router-outlet></router-outlet>
```

The RouterOutlet is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule.

{ path: 'detail/:id', component: HeroDetailComponent },

### extract the id of a route
```javascript
getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}
```
The route.snapshot is a static image of the route information shortly after the component was created.
The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.


//TODO Http!!!!!!!!!


## Databinding
* ngFor
* ngIf with conditions


```javascript
export class AppComponent {
   title = 'Angular 4 Project!';
   //array of months.
   months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   isavailable = true;
    myClickFunction(event) {
      alert("Button is clicked");
      console.log(event);
   }
   changemonths(event) {
      console.log("Changed month from the Dropdown");
      console.log(event);
   }}
```
```html
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
   <h1>
   Welcome to {{title}}.
   </h1>
</div>
<div> Months :
   <select (change) = "changemonths($event)">
      <option *ngFor = "let i of months">{{i}}</option>
   </select>
</div>
<br/>
<div>
   <span *ngIf = "isavailable; then condition1 else condition2">
      Condition is valid.
   </span>
   <ng-template #condition1>Condition is valid</ng-template>
   <ng-template #condition2>Condition is invalid</ng-template>
</div>

<button (click) = "myClickFunction($event)">Click Me</button>```

---
## Custom pipes

Custom pipe om de sqrt van een waarde te berekenen
```javascript
import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'sqrt'
})
export class SqrtPipe implements PipeTransform {
   transform(val : number) : number {
      return Math.sqrt(val);
   }
}
```

en de HTML
```html
<h1>Custom Pipe</h1>
<b>Square root of 25 is: {{25 | sqrt}}</b>
<br/>
<b>Square root of 729 is: {{729 | sqrt}}</b>
```

