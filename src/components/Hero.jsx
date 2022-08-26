import { useEffect, useState } from "react";
import data from "../data.json";
import Filter from "./Filter";
import JobCard from "./JobCard";

function Hero() {
  const [jobs, setJobs] = useState(data);
  const [filteredJobs, setFilteredJobs] = useState(data);
  const [roleFilter, setRoleFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState([]);

  const changeRoleFilter = (role) => {
    setRoleFilter(role);
  };

  const changeLevelFilter = (level) => {
    setLevelFilter(level);
  };

  const changeLanguageFilter = (language) => {
    setLanguageFilter(language);
  };

  useEffect(() => {
    let filteredJobs = jobs.filter((job) => job.role.includes(roleFilter));

    filteredJobs = filteredJobs.filter((job) =>
      job.level.includes(levelFilter)
    );

    for (const language of languageFilter) {
      filteredJobs = filteredJobs.filter((job) =>
        job.languages.includes(language)
      );
    }

    setFilteredJobs(filteredJobs);
  }, [roleFilter, levelFilter, languageFilter]);

  return (
    <main className="relative py-10 bg-inherit">
      <Filter
        roleFilter={roleFilter}
        levelFilter={levelFilter}
        languageFilter={languageFilter}
        setRoleFilter={setRoleFilter}
        setLevelFilter={setLevelFilter}
        changeLanguageFilter={changeLanguageFilter}
      />

      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          languageFilter={languageFilter}
          changeRoleFilter={changeRoleFilter}
          changeLevelFilter={changeLevelFilter}
          changeLanguageFilter={changeLanguageFilter}
        />
      ))}
    </main>
  );
}

export default Hero;
