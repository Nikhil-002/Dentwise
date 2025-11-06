import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import { syncUser } from "@/lib/actions/users";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await currentUser() // Check if the user logged in or not 

  await syncUser();

  //redirect auth user to dashboard
  if(user) redirect("/dashboard") // if Logged in take it to dashboard page
    
  // else return below things or page
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}
