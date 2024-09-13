import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link className="flex gap-2 items-center">
          {/* <Briefcase size={30} className="h-4" /> */}
          <div className="max-md:hidden">
            <Briefcase size={32} />
          </div>
          <div className="flex md:hidden">
            <Briefcase size={20} />
          </div>
          <span className="font-bold text-md md:text-3xl">JOBKART</span>
        </Link>
        <Button variant="outline">Login</Button>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
