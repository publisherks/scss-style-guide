import { createRouter, createWebHistory }                             from "vue-router";
import { beforeEach as loginBeforeEach, afterEach as loginAfterEach } from "./loginHook";

function load (name) {
    return () => import(`@/${name}.vue`);
}

const routes = [
    {
        path      : "/",
        name      : "MainLayout",
        component : load("layout/MainLayout"),
        children  : [
            {
                path      : "/styleguide",
                name      : "Styleguide",
                component : load("components/guide"),
            },

        ],
    },
];

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(loginBeforeEach);
router.afterEach(loginAfterEach);
export default router;
