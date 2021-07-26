import Vue from "vue";
import VueRouter from "vue-router";
import gdi_routes from "./GDI_router";
import nod_routes from "./Nod_router";
import wrath_routes from "./wrath_router";
import Carousel from "../components/Carousel";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Carousel,
    }
].concat(gdi_routes).concat(nod_routes).concat(wrath_routes);

const router = new VueRouter({
    routes,
    mode: "history"
});

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return routerPush.call(this, location).catch(error => error)
}

export default router;