import Document from '../models/document';

export class DocumentService {
    async fetchDocuments() {
        try {
            const documents = await Document.find();
            return documents;
        } catch (error) {
            throw new Error('Error fetching documents: ' + error.message);
        }
    }

    async saveDocument(documentData) {
        try {
            const document = new Document(documentData);
            await document.save();
            return document;
        } catch (error) {
            throw new Error('Error saving document: ' + error.message);
        }
    }

    async checkCompliance(documentId) {
        try {
            const document = await Document.findById(documentId);
            if (!document) {
                throw new Error('Document not found');
            }
            return document.complianceStatus;
        } catch (error) {
            throw new Error('Error checking compliance: ' + error.message);
        }
    }
}