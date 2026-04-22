import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MainLayout from "./components/MainLayout";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import StudioPage from "./components/pages/StudioPage";
import CartPage from "./components/pages/CartPage";
import CategoriesPage from "./components/pages/CategoriesPage";
import MyDesignsPage from "./components/pages/MyDesignsPage";
import NotificationsPage from "./components/pages/NotificationsPage";
import SettingsPage from "./components/pages/SettingsPage";
import ContactPage from "./components/pages/ContactPage";
import FloatingChatbot from "./components/ui/FoatingChatbot";
import ScrollToTop from "./components/ScrollToTop";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="studio" element={<StudioPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="my-designs" element={<MyDesignsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* Future microservice routes can be nested here */}
            {/* <Route path="products/:id" element={<ProductDetails />} /> */}
          </Route>
          {/* Authentication routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <FloatingChatbot />
      </Router>
    </Provider>
  );
};

export default App;
