(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/all-sports/all-sports.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-sports/all-sports.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\" style=\"width:800px\">\n  <div class=\"card-header\" style=\"background-color: #1a335b\">\n    Coupon de Pari\n  </div>\n  <div class=\"card-body\" style=\"color: black\">\n    <p class=\"card-text\" *ngFor=\"let cote of TabTaamirWar9a; let ax = index\">\n      <ng-container *ngIf=\"cote.marketPlace != ''; else withmarket\">\n        <b style=\"color: #c2185b\">{{ cote.label }}</b> {{ cote.marketPlace\n        }}<b> Tip</b> {{ cote.LabelDeCote }} <b>Cote</b> {{ cote.cote }}\n      </ng-container>\n\n      <ng-template #withmarket>\n        <b style=\"color: #c2185b\">{{ cote.label }}</b> <b>Tip</b>\n        {{ cote.LabelDeCote }} <b>Cote</b> {{ cote.cote }}\n      </ng-template>\n    </p>\n\n    <label for=\"name\" >Mise Totale:</label>\n\n\n    <input type=\"text\"  #MoneyInput   required size=\"10\" [(ngModel)]=\"myInput\" (input)=\"Gain(MoneyInput.value)\" />\n    <a class=\"btn btn-primary\">Submit Pari</a>\n  </div>\n  <div class=\"card-footer text-muted\">\n    <p >Cote Total : {{ nam }}</p>\n      <div *ngIf=\"nam>0\">\n    <p>GAINS POTENTIELS  <input type=\"text\" [value]=\"myInput*nam\" /></p>\n       </div>\n  </div>\n</div>\n\n<mat-tab-group>\n  <mat-tab\n    *ngFor=\"let Competition of AllCompetitionWihoutRepeat; index as index\"\n    label=\"{{ Competition }}\"\n    class=\"angular-with-newlines\"\n  >\n    <table class=\"table table-striped table-dark\">\n      <thead class=\"p-3 mb-2 bg-primary text-white\">\n        <tr>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">EventID</th>\n          <th scope=\"col\">Date</th>\n          <th scope=\"col\">Event</th>\n          <th scope=\"col\" colspan=\"2\">RÉSULTAT FINAL</th>\n          <th scope=\"col\" colspan=\"3\">Autres Paris</th>\n          <th></th>\n        </tr>\n      </thead>\n\n      <tr *ngFor=\"let event of footTable2[Competition]; let i = index\">\n        <td *ngIf=\"idmtaasport.innerHTML == 100; else tennis\">\n          <img\n            src=\"https://sbook.promocote.com/theme/promocote/images/footballWhite.svg\"\n            alt=\"\"\n            height=\"30\"\n            width=\"30\"\n          />\n        </td>\n\n        <ng-template #tennis>\n          <td *ngIf=\"idmtaasport.innerHTML == 600; else basket\">\n            <img\n              src=\"https://sbook.promocote.com/theme/promocote/images/tennisWhite.svg\"\n              alt=\"\"\n              height=\"30\"\n              width=\"30\"\n            />\n          </td>\n        </ng-template>\n\n        <ng-template #basket>\n          <td *ngIf=\"idmtaasport.innerHTML == 601600; else rugby\">\n            <img\n              src=\"https://sbook.promocote.com/theme/promocote/images/basketballBallWhite.svg\"\n              alt=\"\"\n              height=\"30\"\n              width=\"30\"\n            />\n          </td>\n        </ng-template>\n\n        <ng-template #rugby>\n          <td *ngIf=\"idmtaasport.innerHTML == 964500\">\n            <img\n              src=\"https://sbook.promocote.com/theme/promocote/images/amFootballBallWhite.svg\"\n              alt=\"\"\n              height=\"30\"\n              width=\"30\"\n            />\n          </td>\n        </ng-template>\n\n        <td>{{ event.marketId }}</td>\n        <td>{{ event.end }}</td>\n        <td #idmtaasport hidden>{{ event.sportId }}</td>\n        <td>{{ event.label }}</td>\n\n        <ng-container *ngFor=\"let user2 of Table1x2[event.label]\">\n          <td *ngFor=\"let CoteResFinal of user2\" class=\"btn-group\" role=\"group\">\n            <div>\n              <label class=\"badge badge-warning\" #label1x2>{{\n                CoteResFinal.label\n              }}</label>\n              <button\n                type=\"button\"\n                class=\"btn btn-info\"\n                (click)=\"\n                  getValue(\n                    event.label,\n                    '',\n                    CoteResFinal.label,\n                    CoteResFinal.cote\n                  )\n                \"\n                #cote1x2\n              >\n                {{ CoteResFinal.cote }}\n              </button>\n            </div>\n          </td>\n        </ng-container>\n\n        <td></td>\n        <ng-container *ngFor=\"let user4 of TabAutreCotes[event.label]\">\n          <td>\n            <button\n              (click)=\"toggleCollapse(event.marketId, event.label)\"\n              class=\"btn btn-light\"\n            >\n              show/hide\n            </button>\n          </td>\n\n          <td *ngFor=\"let user5 of user4\" class=\"btn-group\" role=\"group\">\n            <div *ngIf=\"showTab == event.marketId && !isCollapsed\">\n              <div class=\"card\" style=\"width: 300px\">\n                <div class=\"card-header\" style=\"background-color: #1a335b\">\n                  {{ user5.marketType }}\n                </div>\n                <div\n                  class=\"card-body\"\n                  *ngFor=\"let OtherCotes of user5.outcomes\"\n                >\n                  <label class=\"badge badge-warning\">{{\n                    OtherCotes.label\n                  }}</label>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-info\"\n                    (click)=\"\n                      getValue(\n                        event.label,\n                        user5.marketType,\n                        OtherCotes.label,\n                        OtherCotes.cote\n                      )\n                    \"\n                  >\n                    {{ OtherCotes.cote }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <td></td>\n      </tr>\n    </table>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n  \n  <router-outlet></router-outlet>\n\n\n\n\n\n  <!-- <ng-container *ngFor=\"let user of users\">\n  <tr *ngIf=\"user.sportId == '100';else elseTemplate\">\n\n    FOOT\n  </tr>\n</ng-container>\n<router-outlet></router-outlet>\n\n<ng-template #elseTemplate>\n  other\n</ng-template>\n  -->\n\n</app-main-nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/football/football.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/football/football.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <mat-tab-group>\r\n    <mat-tab *ngFor=\"let user of footTable4;index as index\" label=\"{{user}}\" class=\"angular-with-newlines\">\r\n\r\n\r\n      <table class=\"table table-striped table-dark\">\r\n        <thead class=\"p-3 mb-2 bg-primary text-white\">\r\n          <tr>\r\n            <th scope=\"col\">Event</th>\r\n            <th scope=\"col\">Date</th>\r\n            <th scope=\"col\">Event ID</th>\r\n            <th scope=\"col\">Handle</th>\r\n            <th scope=\"col\">Last</th>\r\n            <th scope=\"col\">Handle</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tr *ngFor=\"let user1 of footTable2[user];i as index\">\r\n          <td>{{user1.marketId}}</td>\r\n\r\n          <td>{{user1.end}}</td>\r\n\r\n          <td>{{user1.label}}</td>\r\n\r\n\r\n        </tr>\r\n\r\n      </table>\r\n\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-nav/main-nav.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\" >\n  <mat-sidenav  #drawer class=\"sidenav\" fixedInViewport=\"false\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(!isHandset$ | async) ? 'over' : 'side'\"\n      \n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Choisir Le Sport</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/football\"  routerLinkActive=\"active\">FOOTBALL </a>\n      <a mat-list-item >TENNIS</a>\n      <a mat-list-item href=\"#\">AUTRE SPORTS</a>\n\n    </mat-nav-list>\n    \n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">Menu</mat-icon>\n      </button>\n      <span> Ken rbeht 1x2</span>\n      <i class=\"material-icons\"></i>\n\n    </mat-toolbar>\n\n<ng-content></ng-content>\n\n    <!-- Add Content Here -->\n\n    \n    \n  </mat-sidenav-content>\n  \n  \n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-sports/all-sports.component.css":
/*!*****************************************************!*\
  !*** ./src/app/all-sports/all-sports.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* td:nth-child(1) {\r\n    width:5%\r\n  }\r\n  \r\n  td:nth-child(2) {\r\n    width:10%\r\n  } \r\n\r\n  td:nth-child(8) {\r\n    width:80%\r\n  } */\r\n\r\n.sticky {\r\n  position: relative;\r\n\r\n  background-color: #007bff;\r\n  display: block;\r\n  width: 400px;\r\n  left: 100px;\r\n  height: 100px;\r\n}\r\n\r\nspan {\r\n  position: relative;\r\n  color: #000;\r\n  font-size: 15px;\r\n  background-position: left top;\r\n  background-repeat: repeat-x;\r\n  background-color: #f3f3f3;\r\n  border: 1px solid #b3b3b3;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  margin-bottom: 3px;\r\n  min-height: 33px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXNwb3J0cy9hbGwtc3BvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7S0FVSzs7QUFFTDtFQUNFLGtCQUFrQjs7RUFFbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hbGwtc3BvcnRzL2FsbC1zcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICB3aWR0aDo1JVxyXG4gIH1cclxuICBcclxuICB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgd2lkdGg6MTAlXHJcbiAgfSBcclxuXHJcbiAgdGQ6bnRoLWNoaWxkKDgpIHtcclxuICAgIHdpZHRoOjgwJVxyXG4gIH0gKi9cclxuXHJcbi5zdGlja3kge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbGVmdDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiM2IzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBtaW4taGVpZ2h0OiAzM3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/all-sports/all-sports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-sports/all-sports.component.ts ***!
  \****************************************************/
/*! exports provided: AllSportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSportsComponent", function() { return AllSportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AllSportsComponent = class AllSportsComponent {
    constructor(http, _elementRef) {
        this.http = http;
        this._elementRef = _elementRef;
        this.configUrl = "https://www.pointdevente.parionssport.fdj.fr/api/1n2/offre";
        this.isCollapsed = true;
        this.AllCompetition = [];
        this.footTable2 = [];
        this.footTable3 = [];
        this.AllCompetitionWihoutRepeat = [];
        this.Table1x2 = [];
        this.TabAutreCotes = [];
        this.showTab = "";
        this.TabAutreCotes22 = [];
        this.equipe = [];
        this.j = 0;
        this.s = 0;
        this.TabTaamirWar9a = [];
        this.domElement = this._elementRef.nativeElement.querySelector(`#nikzebi`);
    }
    ngOnInit() {
        this.http.get(this.configUrl).subscribe(Response => {
            this.users = JSON.stringify(Response);
            this.data = JSON.parse(this.users);
            this.s = Object.keys(this.data).length;
            for (let i = 0; i < this.s; i++) {
                this.AllCompetition.push(this.data[i].competition);
            }
            for (let i = 0; i < this.AllCompetition.length; i++) {
                if (!this.AllCompetitionWihoutRepeat.includes(this.AllCompetition[i])) {
                    this.AllCompetitionWihoutRepeat.push(this.AllCompetition[i]);
                }
            }
            for (let i = 0; i < this.s; i++) {
                if (typeof this.footTable2[this.AllCompetition[i]] === "undefined") {
                    this.footTable2[this.AllCompetition[i]] = [];
                }
                this.equipe.push(this.data[i].label);
                this.footTable2[this.AllCompetition[i]].push(this.data[i]); //all data
                this.Table1x2[this.data[i].label] = [];
                this.Table1x2[this.data[i].label].push(this.data[i].outcomes); //tab pour les 1x2
                this.TabAutreCotes[this.data[i].label] = [];
                this.TabAutreCotes[this.data[i].label].push(this.data[i].formules); //tab pour les autres cotes
            }
        });
    }
    toggleCollapse(i, eq) {
        this.showTab = i;
        this.isCollapsed = !this.isCollapsed;
    }
    getValue(eventname, mrktPlace, coteLbl, cote) {
        this.nam = 1;
        var s = 1;
        let tot;
        this.TabTaamirWar9a.push({ label: eventname, marketPlace: mrktPlace, LabelDeCote: coteLbl, cote: cote });
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var st;
        for (let i = 0; i < this.TabTaamirWar9a.length; i++) {
            st = this.TabTaamirWar9a[i].cote;
            s = parseFloat(st.replace(",", ".").replace(" ", ""));
            this.nam *= s;
        }
        console.log("cote", s, "tot", this.nam);
        return this.nam;
    }
    Gain(event) {
        console.log(event);
        this.gainTotal = event * this.nam;
    }
};
AllSportsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nikzebi", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AllSportsComponent.prototype, "nikzebi", void 0);
AllSportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-all-sports",
        template: __webpack_require__(/*! raw-loader!./all-sports.component.html */ "./node_modules/raw-loader/index.js!./src/app/all-sports/all-sports.component.html"),
        styles: [__webpack_require__(/*! ./all-sports.component.css */ "./src/app/all-sports/all-sports.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AllSportsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _football_football_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./football/football.component */ "./src/app/football/football.component.ts");
/* harmony import */ var _all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-sports/all-sports.component */ "./src/app/all-sports/all-sports.component.ts");





const routes = [
    { path: 'football', component: _football_football_component__WEBPACK_IMPORTED_MODULE_3__["FootballComponent"] },
    { path: 'allSports', component: _all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_4__["AllSportsComponent"] },
    { path: '', redirectTo: '/allSports', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[_nghost-c15] mat-tab-body-wrapper[_ngcontent-c15] { \r\n    height: 100%;\r\n }\r\n\r\n .angular-with-newlines {\r\n    white-space: pre;\r\n}\r\n\r\n td:nth-child(1) {\r\n  width:10%\r\n}\r\n\r\n td:nth-child(2) {\r\n  width:30%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2Y7O0NBRUE7SUFDRyxnQkFBZ0I7QUFDcEI7O0NBSUE7RUFDRTtBQUNGOztDQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW19uZ2hvc3QtYzE1XSBtYXQtdGFiLWJvZHktd3JhcHBlcltfbmdjb250ZW50LWMxNV0geyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuIH1cclxuXHJcbiAuYW5ndWxhci13aXRoLW5ld2xpbmVzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbn1cclxuXHJcblxyXG5cclxudGQ6bnRoLWNoaWxkKDEpIHtcclxuICB3aWR0aDoxMCVcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDIpIHtcclxuICB3aWR0aDozMCVcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _iteraction_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iteraction-data.service */ "./src/app/iteraction-data.service.ts");




let AppComponent = class AppComponent {
    constructor(http, _IteractionDataService) {
        this.http = http;
        this._IteractionDataService = _IteractionDataService;
        this.configUrl = 'https://www.pointdevente.parionssport.fdj.fr/api/1n2/offre';
        this.footTable = [];
        this.footTable2 = [];
        this.footTable3 = [];
        this.footTable4 = [];
        this.j = 0;
        this.s = 0;
    }
    ngOnInit() {
        this.http.get(this.configUrl).subscribe(Response => {
            this.users = JSON.stringify(Response);
            this.data = JSON.parse(this.users);
            this.s = Object.keys(this.data).length;
            for (let i = 0; i < this.s; i++) {
                this.footTable.push(this.data[i].competition);
                if (typeof this.footTable2[this.footTable[i]] === 'undefined') {
                    this.footTable2[this.footTable[i]] = [];
                }
                this.footTable2[this.footTable[i]].push(this.data[i]);
            }
            for (let i = 0; i < this.footTable.length; i++) {
                if (!this.footTable4.includes(this.footTable[i])) {
                    this.footTable4.push(this.footTable[i]);
                }
            }
            // console.log(this.footTable4);
            this._IteractionDataService.SendFullSport(this.footTable4, this.footTable2);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _iteraction_data_service__WEBPACK_IMPORTED_MODULE_3__["IteractionDataService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _iteraction_data_service__WEBPACK_IMPORTED_MODULE_3__["IteractionDataService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _football_football_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./football/football.component */ "./src/app/football/football.component.ts");
/* harmony import */ var _all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-sports/all-sports.component */ "./src/app/all-sports/all-sports.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_11__["MainNavComponent"],
            _football_football_component__WEBPACK_IMPORTED_MODULE_13__["FootballComponent"],
            _all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_14__["AllSportsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/football/football.component.css":
/*!*************************************************!*\
  !*** ./src/app/football/football.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3RiYWxsL2Zvb3RiYWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/football/football.component.ts":
/*!************************************************!*\
  !*** ./src/app/football/football.component.ts ***!
  \************************************************/
/*! exports provided: FootballComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballComponent", function() { return FootballComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FootballComponent = class FootballComponent {
    constructor(http) {
        this.http = http;
        this.TableCompetition = [];
        this.DataSport = [];
        this.configUrl = 'https://www.pointdevente.parionssport.fdj.fr/api/1n2/offre';
        this.footTable = [];
        this.footTable2 = [];
        this.footTable3 = [];
        this.footTable4 = [];
        this.s = 0;
    }
    ngOnInit() {
        this.http.get(this.configUrl).subscribe(Response => {
            this.users = JSON.stringify(Response);
            this.data = JSON.parse(this.users);
            this.s = Object.keys(this.data).length;
            for (let i = 0; i < this.s; i++) {
                this.footTable.push(this.data[i].competition);
            }
            for (let i = 0; i < this.s; i++) {
                if (this.data[i].sportId == '100') {
                    if (typeof this.footTable2[this.footTable[i]] === 'undefined') {
                        this.footTable2[this.footTable[i]] = [];
                    }
                    this.footTable2[this.footTable[i]].push(this.data[i]);
                }
            }
            for (let i = 0; i < this.footTable.length; i++) {
                if (!this.footTable4.includes(this.footTable[i])) {
                    this.footTable4.push(this.footTable[i]);
                }
            }
            console.log(this.footTable4);
        });
    }
};
FootballComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FootballComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-football',
        template: __webpack_require__(/*! raw-loader!./football.component.html */ "./node_modules/raw-loader/index.js!./src/app/football/football.component.html"),
        styles: [__webpack_require__(/*! ./football.component.css */ "./src/app/football/football.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FootballComponent);



/***/ }),

/***/ "./src/app/iteraction-data.service.ts":
/*!********************************************!*\
  !*** ./src/app/iteraction-data.service.ts ***!
  \********************************************/
/*! exports provided: IteractionDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteractionDataService", function() { return IteractionDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let IteractionDataService = class IteractionDataService {
    constructor() {
        this._teacherMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._teacherMessageSource2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.TableDeSport$ = this._teacherMessageSource.asObservable();
        this.TableCompetition$ = this._teacherMessageSource2.asObservable();
    }
    SendFullSport(TableCompetition, TableSport) {
        this._teacherMessageSource.next(TableCompetition);
        this._teacherMessageSource2.next(TableSport);
    }
};
IteractionDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IteractionDataService);



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n \n}\n\n.sidenav {\n  width: 200px;\n\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiBcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG5cbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let MainNavComponent = class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches));
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: __webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-nav/main-nav.component.html"),
        styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
], MainNavComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC-Jnina\Desktop\firstapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map