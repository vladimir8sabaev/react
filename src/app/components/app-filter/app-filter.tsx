import { Component } from 'react';
import './app-filter.scss';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'all',
    };
  }

  buttonData = [
    { value: 'all', label: 'All employees' },
    { value: 'ranked up', label: ' Ranked up' },
    { value: 'tons of money', label: 'Tons of money' },
  ];

  filterItems = (e) => {
    this.setState({ buttonState: e.target.value });
    this.props.onUpdateFilter(e.target.value);
  };

  render() {
    const buttons = this.buttonData.map(({ value, label }) => {
      const active = this.props.filter === value;
      const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';
      return (
        <button
          onClick={this.filterItems}
          className={clazz}
          type="button"
          value={value}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default AppFilter;
