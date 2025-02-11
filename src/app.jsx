import "./app.css";
import { Header } from "../src/components/Header/header.jsx";
import { Sidebar } from "../src/components/Sidebar/sidebar.jsx";
import { Main } from "../src/components/Main/main.jsx";
import { Footer } from "../src/components/Footer/footer.jsx";

export function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
