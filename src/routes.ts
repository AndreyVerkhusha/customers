import { ComponentType } from "react";

import Dashboard from "@/pages/Dashboard/Dashboard";

type Routes = {
    path: string
    Component: ComponentType
};

export const routes: Routes[] = [
    {path: "/dashboard", Component: Dashboard}
];
