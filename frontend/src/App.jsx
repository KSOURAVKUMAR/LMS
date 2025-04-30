import Login from "./pages/Login";
import "./App.css";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import DashBoard from "./pages/admin/DashBoard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";
import CourseDetail from "./pages/student/CourseDetail";
import CourseProgress from "./pages/student/CourseProgress";
import Searchpage from "./pages/student/Searchpage";
import { AdminRoute, AuthenticatedUser, ProtectedRoute } from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses/>
          </>
        ),
      },
      {
        path: "login",
        element:<AuthenticatedUser><Login /></AuthenticatedUser> ,
      },
      {
        path:"my-learning",
        element:<ProtectedRoute><MyLearning/></ProtectedRoute>
      },
      {
        path:"profile",
        element:<ProtectedRoute><Profile/></ProtectedRoute>
      },
      {
        path:"course/search",
        element:<ProtectedRoute><Searchpage/></ProtectedRoute>
      },
      {
        path:"course-detail/:courseId",
        element:<ProtectedRoute><CourseDetail/></ProtectedRoute>
      },
      {
        path:"course-progress/:courseId",
        element: (
          <ProtectedRoute>
            <PurchaseCourseProtectedRoute>
            <CourseProgress />
            </PurchaseCourseProtectedRoute>
          </ProtectedRoute>
        ),
      },
      //admin routes strats from here
      {
        path: "admin",
        element:<AdminRoute><Sidebar/></AdminRoute>,
        children:[
          {
            path:"dashboard",
            element:<DashBoard/>
          },
          {
            path:"course",
            element:<CourseTable/>
          },
          {
            path:"course/create",
            element:<AddCourse/>
          },
          {
            path:"course/:courseId",
            element:<EditCourse/>
          },
          {
            path:"course/:courseId/lecture",
            element:<CreateLecture/>
          },
          {
            path:"course/:courseId/lecture/:lectureId",
            element:<EditLecture/>
          }
        ]
      }
    ],
  },
]);
function App() {
  return (
    <main>
      <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
      
    </main>
  );
}

export default App;

// tgBU0naAB3RJPwkA   (Mongo Atlas password)
