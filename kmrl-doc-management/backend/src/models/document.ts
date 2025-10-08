import { Schema, model } from 'mongoose';

const documentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    complianceStatus: {
        type: String,
        enum: ['Compliant', 'Non-Compliant', 'Pending'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Document = model('Document', documentSchema);

export default Document;