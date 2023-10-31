import './employees-add-form.scss';
import { Component, ReactNode } from 'react';

class EmployeesAddForm extends Component {
  state = {
    name: '',
    salary: 0,
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onEmployeeAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: 0,
    });
  };

  render(): ReactNode {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmit} className="add-form d-flex">
          <input
            required
            name="name"
            onChange={this.onValueChange}
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            value={name}
          />
          <input
            required
            name="salary"
            onChange={this.onValueChange}
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
