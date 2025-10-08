import React, { useEffect, useState } from 'react';
import { fetchDocuments } from '../services/api';

const DocumentList: React.FC = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDocuments = async () => {
            try {
                const data = await fetchDocuments();
                setDocuments(data);
            } catch (err) {
                setError('Failed to fetch documents');
            } finally {
                setLoading(false);
            }
        };

        loadDocuments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Document List</h2>
            <ul>
                {documents.map((doc) => (
                    <li key={doc.id}>
                        <h3>{doc.title}</h3>
                        <p>{doc.content}</p>
                        <p>Department: {doc.department}</p>
                        <p>Compliance Status: {doc.complianceStatus}</p>
                        <p>Created At: {new Date(doc.createdAt).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentList;