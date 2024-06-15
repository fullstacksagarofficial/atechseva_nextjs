import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

 
export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}