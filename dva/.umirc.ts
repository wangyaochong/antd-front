import {defineConfig} from 'umi';
import {pageRoutes} from "./src/pages/aroutes/pageRoutes";

export default defineConfig({
    history:{
        type:"browser"
    },
    layout: {
        name: 'Ant Design',
    },
    antd: {
        dark: true,
        compact: true,
    },
    dva: {
        hmr: true,
    },
    routes: pageRoutes
});
