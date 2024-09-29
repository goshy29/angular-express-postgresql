import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { CakesComponent } from "./pages/cakes/cakes.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ShareComponent } from "./pages/share/share.component";
import { CakesDetailsComponent } from "./pages/cakes-details/cakes-details.component";
import { BlogDetailsComponent } from "./pages/blog-details/blog-details.component";

export const routes: Routes = [
    {
        path: "", 
        component: HomeComponent,
        title: "Home" 
    },
    {
        path: "cakes", 
        component: CakesComponent,
        title: "Cakes" 
    },
    {
        path: "cakes/:cakeId", 
        component: CakesDetailsComponent
    },
    {
        path: "blog", 
        component: BlogComponent,
        title: "Blog" 
    },
    {
        path: "blog/:blogId", 
        component: BlogDetailsComponent
    },
    {
        path: "share", 
        component: ShareComponent,
        title: "Share" 
    },
    {
        path: "**",
        component: ErrorPageComponent,
        title: "Error"
    }
]