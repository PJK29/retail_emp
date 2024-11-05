import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import { styles } from './styles';

function App() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addEmployee = (newEmployee) => {
    if (employees.some(emp => emp.employee_id === newEmployee.employee_id)) {
      alert('Employee ID already exists!');
      return;
    }
    setEmployees([...employees, newEmployee]);
    setShowForm(false);
  };

  const removeEmployee = (idToRemove) => {
    const initialLength = employees.length;
    const newEmployees = employees.filter(emp => emp.employee_id !== idToRemove);
    
    if (newEmployees.length === initialLength) {
      alert('Employee ID not found!');
    } else {
      alert('Employee removed successfully!');
      setEmployees(newEmployees);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Superstore Employee Management</h1>
      
      <div style={styles.controls}>
        <button 
          onClick={() => setShowForm(!showForm)} 
          style={styles.btnPrimary}
        >
          {showForm ? 'Cancel' : 'Add Employee'}
        </button>
        <RemoveEmployee onRemove={removeEmployee} />
      </div>

      {showForm && (
        <EmployeeForm 
          onSubmit={addEmployee} 
          onCancel={() => setShowForm(false)} 
        />
      )}

      <EmployeeList employees={employees} />
    </div>
  );
}

function RemoveEmployee({ onRemove }) {
  const [removeId, setRemoveId] = useState('');

  const handleRemove = () => {
    onRemove(removeId);
    setRemoveId('');
  };

  return (
    <div style={styles.removeSection}>
      <input
        type="text"
        value={removeId}
        onChange={(e) => setRemoveId(e.target.value)}
        placeholder="Enter Employee ID"
        style={styles.input}
      />
      <button onClick={handleRemove} style={styles.btnDanger}>
        Remove Employee
      </button>
    </div>
  );
}

export default App;