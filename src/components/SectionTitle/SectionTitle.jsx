import PropTypes from "prop-types";

const SectionTitle = ({ title = "", subtitle = "" }) => {
  return (
    <div className="space-y-3 text-center my-12">
      <h2 className="text-5xl font-semibold font_lato text-gray-800">
        {title}
      </h2>
      <p className="text-xl font-medium font_lato text-gray-400">{subtitle}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
