import { ComponentType } from "react";

import Dashboard from "@/pages/Dashboard/Dashboard";
import Inbox from "@/pages/Inbox/Inbox";

type Routes = {
    path: string
    Component: ComponentType
};

export const routes: Routes[] = [
    {path: "/dashboard", Component: Dashboard},
    {path: "/inbox", Component: Inbox}
];
