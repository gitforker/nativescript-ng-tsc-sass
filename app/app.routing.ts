import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ExamplePageComponent } from "./pages/example-page/example-page.component";

const routes: Routes = [
    { path: "", redirectTo: "/example-page", pathMatch: "full" },
    { path: "example-page", component: ExamplePageComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }