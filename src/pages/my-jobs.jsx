import CreatedApplications from "@/components/created-applications";
import CreatedJobs from "@/components/created-jobs";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return <BarLoader className="" width={"100%"} color="white" />;
  }
  // ============================================================
  return (
    <div className="wrapper">
      <h1 className="font-bold text-3xl md:text-5xl pb-8 mt-5">
        {user?.unsafeMetadata?.role == "candidate"
          ? "My Applications"
          : "My jobs"}
      </h1>
      {user?.unsafeMetadata?.role === "candidate" ? (
        <CreatedApplications />
      ) : (
        <CreatedJobs />
      )}
    </div>
  );
};

export default MyJobs;
