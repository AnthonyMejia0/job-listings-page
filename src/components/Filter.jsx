import removeButton from "../images/icon-remove.svg";

function Filter({
  roleFilter,
  levelFilter,
  languageFilter,
  setRoleFilter,
  setLevelFilter,
  changeLanguageFilter,
}) {
  const clearAllFilters = () => {
    setRoleFilter("");
    setLevelFilter("");
    changeLanguageFilter([]);
  };

  const removeLanguageFromFilter = (language) => {
    const newLanguageFilter = languageFilter.filter(
      (lang) => lang !== language
    );

    changeLanguageFilter(newLanguageFilter);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`${
          roleFilter === "" && levelFilter === "" && languageFilter.length === 0
            ? "hidden"
            : ""
        } w-[24.5rem] absolute top-0 -translate-y-1/2 flex items-center bg-white rounded-md text-sm`}
      >
        <div className="px-4 pt-1 pb-3 h-full w-[85%]">
          <div className="pt-2 flex flex-wrap items-center gap-4 text-desaturated-dark-cyan font-bold">
            {roleFilter !== "" ? (
              <div className="flex items-center space-x-2 pl-2 bg-light-grayish-cyan-filter rounded-md">
                <p>{roleFilter}</p>
                <button
                  onClick={() => setRoleFilter("")}
                  className="remove-button"
                >
                  <img src={removeButton} alt="Remove Button" />
                </button>
              </div>
            ) : null}

            {levelFilter !== "" ? (
              <div className="flex items-center space-x-2 pl-2 bg-light-grayish-cyan-filter rounded">
                <p>{levelFilter}</p>
                <button
                  onClick={() => setLevelFilter("")}
                  className="remove-button"
                >
                  <img src={removeButton} alt="Remove Button" />
                </button>
              </div>
            ) : null}

            {languageFilter.map((language, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 pl-2 bg-light-grayish-cyan-filter rounded"
              >
                <p>{language}</p>
                <button
                  onClick={() => removeLanguageFromFilter(language)}
                  className="remove-button"
                >
                  <img src={removeButton} alt="Remove Button" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => clearAllFilters()}
          className="text-dark-grayish-cyan font-bold px-4 hover:text-desaturated-dark-cyan hover:underline"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filter;
