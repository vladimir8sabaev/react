import './app-filter.scss';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        Ranked up
      </button>
      <button className="btn btn-outline-light" type="button">
        Tons of money
      </button>
    </div>
  );
};

export default AppFilter;
