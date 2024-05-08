
import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
    const [numberid, setNumberId] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const apiUrl = `http://localhost:9876/numbers/${numberid}`;
            const response = await axios.get(apiUrl);
            setResponse(response.data);
        } catch (error) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter numberid:
                    <input
                        type="text"
                        value={numberid}
                        onChange={(e) => setNumberId(e.target.value)}
                    />
                </label>
                <button type="submit" disabled={loading}>Submit</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {response && (
                <div>
                    <p>Previous State: {response.windowPrevState.join(', ')}</p>
                    <p>Current State: {response.windowCurrState.join(', ')}</p>
                    <p>Numbers: {response.numbers.join(', ')}</p>
                    <p>Average: {response.avg}</p>
                </div>
            )}
        </div>
    );
};

export default AverageCalculator;


