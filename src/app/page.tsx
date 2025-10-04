import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { SignedOut, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton mode="modal">SignUp</SignUpButton>      
      </SignedOut>      

      <SignedIn>
        <SignOutButton>LogOut</SignOutButton>
      </SignedIn>
    </div>
  );
}
