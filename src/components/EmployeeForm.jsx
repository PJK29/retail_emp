import React, { useState } from 'react';
import { styles } from '../styles';

const initialFormData = {
  employee_id: '',
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  hire_date: '',
  dept_id: '',
  manager_id: '',
  salary: '',
  address: '',
  birth_date: '',
  gender: '',
  image_url: ''
};

function EmployeeForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.subHeading}>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGrid}>
          <input
            type="text"
            id="employee_id"
            placeholder="Employee ID"
            value={formData.employee_id}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            id="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            id="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            id="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="date"
            id="hire_date"
            value={formData.hire_date}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            id="dept_id"
            placeholder="Department ID"
            value={formData.dept_id}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            id="manager_id"
            placeholder="Manager ID"
            value={formData.manager_id}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            id="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            id="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{...styles.input, ...styles.textarea}}
          />
          <input
            type="date"
            id="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
          <input
            type="url"
            id="image_url"
            placeholder="Image URL"
            value={formData.image_url}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.btnPrimary}>Submit</button>
          <button type="button" onClick={onCancel} style={styles.btnSecondary}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;