import { useUser } from "@clerk/clerk-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight, Heart, MapPin, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const JobCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobSaved = () => {},
}) => {
  const { user } = useUser();
  // ===================================
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          <span className="flex-1">{job.title}</span>
          <div className="flex gap-2">
            <Heart
              size={18}
              fill="red"
              stroke="red"
              className="cursor-pointer"
            />
            {!isMyJob && (
              <Trash
                fill="red"
                size={18}
                className="text-red-300 cursor-pointer"
              />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          {job.company && <img src={job.company.logo} alt="" className="h-6" />}
          <div className="flex gap-2 items-center">
            <MapPin size={15} /> {job.location}
          </div>
        </div>
        <hr />
        <div className="flex">
          <span className="line-clamp-2 w-[90%]">{job.description}</span>
          <Link to={`/jobs/${job.id}`} className="flex-1">
            <Button className="w-full flex gap-2 items-center justify-center">
              More details
              <ArrowRight size={15} />
            </Button>
          </Link>
        </div>
      </CardContent>
      {/* <CardFooter className="flex gap-2">
        <Link to={`/jobs/${job.id}`} className="flex-1">
          <Button className="w-full">More details</Button>
        </Link>
        <Heart size={20} stroke='red'/>
      </CardFooter> */}
    </Card>
  );
};

export default JobCard;
