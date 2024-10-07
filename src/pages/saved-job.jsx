import { getSavedJobs } from "@/api/apiJobs";
import JobCard from "@/components/job-card";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const SavedJobs = () => {
  const { isLoaded } = useUser();
  const {
    loading: loadingSavedJobs,
    data: savedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) fnSavedJobs();
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJobs) {
    return <BarLoader width={"100%"} color="white" />;
  }
  // =====================================================
  return (
    <div className="wrapper">
      <h1 className="font-bold text-3xl md:text-5xl pb-8 mt-5">Saved jobs</h1>
      {loadingSavedJobs === false && (
        // <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="my-8 flex flex-col gap-4">
          {savedJobs?.length ? (
            savedJobs.map((saved) => (
              <JobCard
                key={saved.id}
                job={saved?.job}
                savedInit={true}
                onJobSaved={fnSavedJobs}
              />
            ))
          ) : (
            <div className="">No jobs saved</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
