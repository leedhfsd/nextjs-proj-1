import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({children}) {
  return (
    <>
      <div className="bg-black h-36">
        <Header />
        <NavBar />
      </div>
      <>{children}</>
      <Footer />
    </>
  );
}