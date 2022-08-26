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
      className={`relative mx-auto mt-20 w-[24.5rem] bg-white px-6 pt-7 pb-8 flex flex-col space-y-3 rounded-lg ${
        job.featured ? "border-l-8 border-l-desaturated-dark-cyan" : ""
      }`}
    >
      <img
        className="absolute w-14 top-0 -translate-y-1/2"
        src={require(`${job.logo}`)}
        alt={`${job.company} Logo`}
      />

      <div className="flex items-center justify-start space-x-8">
        <p className="text-desaturated-dark-cyan font-bold">{job.company}</p>

        <div className="flex space-x-3">
          <h3
            className={`${
              !job.new ? "hidden" : ""
            } bg-desaturated-dark-cyan pt-[2px] px-3 text-white rounded-full`}
          >
            NEW!
          </h3>
          <h3
            className={`${
              !job.featured ? "hidden" : ""
            } bg-very-dark-grayish-cyan pt-[2px] px-3 text-white rounded-full`}
          >
            FEATURED
          </h3>
        </div>
      </div>

      <h3 className="font-bold w-max hover:text-desaturated-dark-cyan cursor-pointer">
        {job.position}
      </h3>

      <ul className="pb-2 flex items-center space-x-3 text-dark-grayish-cyan">
        <li>{job.postedAt}</li>

        <li>{job.contract}</li>
        <li>{job.location}</li>
      </ul>

      <div className="w-full h-[1px] bg-dark-grayish-cyan"></div>

      <div className="pt-2 flex flex-wrap items-center justify-start gap-4 text-desaturated-dark-cyan font-bold">
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
