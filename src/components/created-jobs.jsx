import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import JobCard from "./job-card";

const CreatedJobs = () => {
  const { user } = useUser();

  const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreatedJobs,
  } = useFetch(getMyJobs, { recruiter_id: user.id });

  useEffect(() => {
    fnCreatedJobs();
  }, []);

  if (loadingCreatedJobs) {
    return <BarLoader className="" width={"100%"} color="white" />;
  }
  // ==============================================================
  return (
    <div className="wrapper">
      <div className="my-8 flex flex-col gap-4">
        {createdJobs?.length ? (
          createdJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onJobSaved={fnCreatedJobs}
              isMyJob
            />
          ))
        ) : (
          <div className="">No jobs</div>
        )}
      </div>
    </div>
  );
};

export default CreatedJobs;
