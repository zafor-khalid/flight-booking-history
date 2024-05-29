import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
    <div className="parent-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <section >
          <Breadcrumb items={["Home", "Booking History", "Flight", "STFL17121182045413"]} />
          <Card />
        </section>
      </main>
      <footer>
        <p>Zafor Khalid</p>
        <p>Contact: +8801783092354</p>
        <a href='mailto:zaforkhalid@gmail.com' >zaforkhalid@gmail.com</a>
      </footer>
    </div>
  );
}
