import React, { useState, useEffect } from 'react';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageCategory from './ManageCategory/ManageCategory';
import './Dashboard.css'; // Import the CSS file for styling

export default function Dashboard() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await fetch('http://localhost:5021/api/Person');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPeople(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPeople();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <div className="table-container">
                <table className="people-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person => (
                            <tr key={person.userID}>
                                <td>{person.userID}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.phoneNumber}</td>
                                <td>{person.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="management-sections">
                <ManageProducts />
                <ManageCategory />
            </div>
        </div>
    );
}
