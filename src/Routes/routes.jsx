import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Analytics from "../Pages/Analytics";
import ErrorPage from "../Pages/ErrorPage";
import PaymentStatus from "../Pages/PaymentStatus";
import Settings from "../Pages/Settings";
import StudentInformation from "../Pages/StudentInformation";
import UploadDocuments from "../Pages/UploadDocuments";

export const router = createBrowserRouter([
    {path:"/",
    element:<Main />,
    errorElement:<ErrorPage />,
    children:[
        {
            path:"/",
            element:<UploadDocuments />
        },
        {
            path:"/studentInformation",
            element:<StudentInformation />
        },
        {
            path:"/payment/status",
            element:<PaymentStatus />
        },
        {
            path:"/analytics",
            element:<Analytics />
        },
        {
            path:"/settings",
            element:<Settings />
        },
    ]
}
])