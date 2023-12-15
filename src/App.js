import React, { useState } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { AuthProvider } from "./Pages/Login/contexts/auth";
import useAuth from "./Pages/Login/hooks/useAuth";

// Componentes e Páginas
import Footer from "./components/Footer/";
import Topbar from "./Pages/Global/Topbar/";
import Sidebar from "./Pages/Global/Sidebar/";
import Workspace from "./Pages/Workspace/";
import Schedule from "./Pages/Schedule/";
import Contacts from "./Pages/Contacts/";
import Consulting from "./Pages/Consulting/";
import List from "./Pages/Consulting/";
import Folders from "./Pages/Folders/";
import Clippings from "./Pages/Clippings/";
import Financial from "./Pages/Financial/";
import Documents from "./Pages/Documents/";
import Indicators from "./Pages/Indicators/";
import Alerts from "./Pages/Alerts/";
import Support from "./Pages/Support/";
import SearchResult from "./Pages/SearchResult/";
import Admin from "./Pages/Admin/";
import Signin from "./Pages/Login/Signin";
import Signup from "./Pages/Login/Signup";
import Recover from "./Pages/Login/Recover";

// Componente PrivateRoute
const PrivateRoute = ({ children, publicRoute = false }) => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (publicRoute && signed) {
    return <Navigate to="/workspace" />;
  }
  if (!publicRoute && !signed) {
    return <Navigate to="/" />;
  }
  return children;
};

// Componente RedirectToWorkspace
const RedirectToWorkspace = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return signed ? <Navigate to="/workspace" /> : <Signin />;
};

// Componente principal App
function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();
  const [isSidebar, setIsSidebar] = useState(true);
  const showTopbarAndSidebar = location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/recover";

  return (
    <AuthProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {showTopbarAndSidebar && <Topbar setIsSidebar={setIsSidebar} />}
            <Box sx={{ display: 'flex', flex: 1, position: 'relative' }}>
              {showTopbarAndSidebar && <Sidebar isSidebar={isSidebar} />}
              <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', zIndex: 1 }}>
                <Routes>
                  <Route path="/" element={<RedirectToWorkspace />} />
                  <Route path="/signup" element={<PrivateRoute publicRoute><Signup /></PrivateRoute>} />
                  <Route path="/recover" element={<PrivateRoute publicRoute><Recover /></PrivateRoute>} />
                  <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
                  <Route path="/workspace" element={<PrivateRoute><Workspace /></PrivateRoute>} />
                  <Route path="/schedule" element={<PrivateRoute><Schedule /></PrivateRoute>} />
                  <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
                  <Route path="/consulting" element={<PrivateRoute><Consulting /></PrivateRoute>} />
                  <Route path="/list" element={<PrivateRoute><List /></PrivateRoute>} />
                  <Route path="/folders" element={<PrivateRoute><Folders /></PrivateRoute>} />
                  <Route path="/clippings" element={<PrivateRoute><Clippings /></PrivateRoute>} />
                  <Route path="/financial" element={<PrivateRoute><Financial /></PrivateRoute>} />
                  <Route path="/documents" element={<PrivateRoute><Documents /></PrivateRoute>} />
                  <Route path="/dashboard-module" element={<PrivateRoute><Indicators /></PrivateRoute>} />
                  <Route path="/alerts" element={<PrivateRoute><Alerts /></PrivateRoute>} />
                  <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>} />
                  <Route path="/pending-search/search-results" element={<PrivateRoute><SearchResult /></PrivateRoute>} />
                  <Route path="admin/access/" element={<PrivateRoute><Admin /></PrivateRoute>} />
                  <Route path="*" element={<Navigate to="/workspace" />} />
                </Routes>
              </Box>
            </Box>
            <Footer sx={{ mt: 'auto', zIndex: 0 }} />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthProvider>
  );
}

export default App;
