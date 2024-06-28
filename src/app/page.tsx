import CompanyInfo from "./components/CompanyInfo";
import Header from "./components/Header";
import JobPreview from "./components/JobPreview";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <Tabs />
      <section className="w-full flex justify-between items-start gap-0 h-screen">
        <div className="w-[75%] h-full">
          <JobPreview />
          <CompanyInfo />
        </div>
        <div className="w-[25%] h-full">
          <Sidebar />
        </div>
      </section>
    </main>
  );
}
