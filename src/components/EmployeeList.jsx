import React from 'react';
import { styles } from '../styles';

function EmployeeList({ employees }) {
  return (
    <div style={styles.employeeGrid}>
      {employees.map(emp => (
        <div key={emp.employee_id} style={styles.employeeCard}>
          <img
            src={emp.image_url}
            alt={`${emp.first_name} ${emp.last_name}`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/100';
            }}
            style={styles.employeeImage}
          />
          <div style={styles.employeeInfo}>
            <p><strong>ID:</strong> {emp.employee_id}</p>
            <p><strong>Name:</strong> {emp.first_name} {emp.last_name}</p>
            <p><strong>Email:</strong> {emp.email}</p>
            <p><strong>Phone:</strong> {emp.phone_number}</p>
            <p><strong>Department:</strong> {emp.dept_id}</p>
            <p><strong>Salary:</strong> ${emp.salary}</p>
            <p><strong>Hire Date:</strong> {new Date(emp.hire_date).toLocaleDateString()}</p>
            <p><strong>Address:</strong> {emp.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;