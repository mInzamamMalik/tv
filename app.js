/**
 * Created by malikasinger on 06/07/2015.
 */


angular.module("myapp",['ngMaterial','ngNewRouter','app.home'])

.controller("AppController",['$router',AppController]);

AppController.$routeConfig = [
    { path: '/',           component: 'home' },
    { path: '/about',      component: 'about' },
    { path: '/contact',    component: 'contact' },
    { path: '/detail/:id', component: 'detail' }
];

function AppController ($router){
    this.name = "abc";

}