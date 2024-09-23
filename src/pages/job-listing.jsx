import { getJobs } from "@/api/apiJobs";
import JobCard from "@/components/job-card";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");

  const { isLoaded } = useUser();

  const {
    fn: fnJobs,
    data: jobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, location, company_id, searchQuery]);

  // ====================================================
  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="white" />;
  }

  console.log(jobs);

  return (
    <div className="wrapper max-w-6xl mx-auto">
      <h1 className="font-extrabold text-4xl md:text-5xl py-10">Latest jobs</h1>
      {/* filters  */}
      {loadingJobs && (
        <BarLoader className="mt-4" width={"100%"} color="white" />
      )}

      {loadingJobs === false && (
        // <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="mt-8 flex flex-col gap-4">
          {jobs?.length ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                savedInit={job?.saved?.length > 0}
              />
            ))
          ) : (
            <div className="">No jobs</div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
