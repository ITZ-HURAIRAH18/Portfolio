import PropTypes from "prop-types";

const Card = ({ skill, summary, stack, tools, demo, link }) => {
  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-900 overflow-hidden shadow-lg p-6 rounded-md h-full">
      <div className="flex-1">
        <h3 className="font-bold text-xl mb-2">{skill}</h3>
        <p className="text-gray-700 text-base text-[13px] dark:text-gray-400">
          {summary}
        </p>
      </div>
      <div className="mt-4">
        <p className="mt-2"><span className="font-medium text-black dark:text-white">Stack: </span>
          <span className="dark:text-gray-300 text-[13px]">{stack}</span>
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tools.map((tool, index) => (
            <span key={index} className="rounded-full p-2 bg-gray-400 text-black text-[11px] dark:bg-gray-700 dark:text-gray-200">
              {tool}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {demo.map((dem, index) => (
            <a type="button" key={index} className="
              text-gray-700 dark:text-gray-300 border cursor-pointer border-gray-300
              hover:opacity-90 dark:border dark:border-gray-900 bg-white dark:bg-gray-700
              hover:text-black dark:hover:text-white px-4 py-2 text-sm font-medium rounded-full"
              href={link[index]} target="_blank" rel="noreferrer"
            >
              {dem}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  skill: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.arrayOf(PropTypes.string).isRequired,
  demo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;