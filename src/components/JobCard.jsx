import React from "react";

function JobCard({
  job,
  languageFilter,
  changeRoleFilter,
  changeLevelFilter,
  changeLanguageFilter,
}) {
  return (
    <article
      className={`relative mx-auto mt-20 w-[24.5rem] xl:w-[80%] 2xl:w-[65%] bg-white px-6 xl:px-8 pt-7 pb-8 flex flex-col xl:flex-row xl:justify-between space-y-3 xl:space-y-0 rounded-lg drop-shadow-xl ${
        job.featured ? "border-l-8 border-l-desaturated-dark-cyan" : ""
      }`}
    >
      <div className="space-y-3 xl:space-y-0 xl:flex xl:space-x-5">
        <img
          className="absolute xl:relative w-14 xl:w-[4.5rem] top-0 -translate-y-1/2 xl:-translate-y-0 object-contain"
          src={require(`${job.logo}`)}
          alt={`${job.company} Logo`}
        />

        <div className="h-full space-y-3 xl:space-y-1">
          <div className="flex items-center justify-start space-x-8 xl:space-x-3">
            <p className="text-desaturated-dark-cyan font-bold">
              {job.company}
            </p>

            <div className="flex space-x-3 xl:space-x-1 xl:text-xs">
              <h3
                className={`${
                  !job.new ? "hidden" : ""
                } bg-desaturated-dark-cyan pt-[2px] px-3 xl:px-2 text-white rounded-full`}
              >
                NEW!
              </h3>
              <h3
                className={`${
                  !job.featured ? "hidden" : ""
                } bg-very-dark-grayish-cyan pt-[2px] px-3 xl:px-2 text-white rounded-full`}
              >
                FEATURED
              </h3>
            </div>
          </div>

          <h3 className="font-bold w-max hover:text-desaturated-dark-cyan cursor-pointer xl:text-[1.175rem]">
            {job.position}
          </h3>

          <ul className="pb-2 flex items-center space-x-3 text-dark-grayish-cyan">
            <li>{job.postedAt}</li>

            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>

      <div className="xl:hidden w-full h-[1px] bg-dark-grayish-cyan"></div>

      <div className="pt-2 xl:pt-0 flex flex-wrap items-center justify-start gap-4 text-desaturated-dark-cyan font-bold xl:text-sm">
        <button
          onClick={() => changeRoleFilter(job.role)}
          className="filter bg-light-grayish-cyan-filter py-1 px-3 rounded"
        >
          {job.role}
        </button>

        <button
          onClick={() => changeLevelFilter(job.level)}
          className="filter bg-light-grayish-cyan-filter py-1 px-3 rounded"
        >
          {job.level}
        </button>

        {job.languages.map((language, i) => (
          <button
            onClick={() =>
              !languageFilter.includes(language)
                ? changeLanguageFilter([...languageFilter, language])
                : null
            }
            className="filter bg-light-grayish-cyan-filter py-1 px-3 rounded"
            key={i}
          >
            {language}
          </button>
        ))}
      </div>
    </article>
  );
}

export default JobCard;
