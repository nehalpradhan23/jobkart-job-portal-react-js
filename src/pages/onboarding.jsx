import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleRoleSelection = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
      })
      .catch((err) => {
        console.log("Error updating role", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate(
        user?.unsafeMetadata?.role === "recruiter" ? "/post-job" : "/jobs"
      );
    }
  }, [user]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="white" />;
  }
  // =================================================
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
      <h2 className="font-extrabold text-5xl text-center sm:text-7xl text-gray-300">
        Onboarding page
      </h2>
      <h4 className="mt-5">Select account type</h4>
      {/* <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button variant="blue">Candidate</Button>
      </div> */}
      <div className="flex max-sm:flex-col mt-12 sm:mt-20 gap-4 sm:gap-14 justify-center items-center">
        <div className="flex flex-col gap-4 items-center justify-center w-[200px] ">
          <span className="text-lg">Looking for jobs?</span>
          <Button
            className="w-full md:h-20 bg-green-500"
            onClick={() => handleRoleSelection("candidate")}
          >
            Join as candidate
          </Button>
        </div>
        <span className="text-2xl font-bold">OR</span>
        <div className="flex flex-col gap-4 items-center justify-center w-[200px] ">
          <span className="text-lg">Looking for candidates?</span>
          <Button
            className="w-full md:h-20 bg-blue-500"
            onClick={() => handleRoleSelection("recruiter")}
          >
            Join as Recruiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
