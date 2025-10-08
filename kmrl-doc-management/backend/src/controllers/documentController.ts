class DocumentController {
    constructor(private documentService: DocumentService) {}

    async getDocuments(req, res) {
        try {
            const documents = await this.documentService.fetchDocuments();
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving documents', error });
        }
    }

    async uploadDocument(req, res) {
        try {
            const documentData = req.body;
            const newDocument = await this.documentService.saveDocument(documentData);
            res.status(201).json(newDocument);
        } catch (error) {
            res.status(500).json({ message: 'Error uploading document', error });
        }
    }

    async trackCompliance(req, res) {
        try {
            const { documentId } = req.params;
            const complianceStatus = await this.documentService.checkCompliance(documentId);
            res.status(200).json(complianceStatus);
        } catch (error) {
            res.status(500).json({ message: 'Error tracking compliance', error });
        }
    }
}

export default DocumentController;