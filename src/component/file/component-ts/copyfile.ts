interface DocumentType {
  key: string;
  doc: any;
  loading: boolean;
}
const individualDocs: DocumentType[] = [
  { key: this.ALLOWANCE_DOC, doc: this.allowanceDoc, loading: this.allowanceDocLoading },
  { key: this.PATENT_DOC, doc: this.patentDoc, loading: this.patentDocLoading },
  { key: this.ID_CARD_DOC, doc: this.idDoc, loading: this.idDocLoading },
  { key: this.PHOTO_DOC, doc: this.directorPhoto_obj, loading: this.photoDocLoading },
  { key: this.BUSINESS_MODEL_DOC, doc: this.businessModelDoc, loading: this.businessModelDocLoading },
  { key: this.USER_PROTECT_DOC, doc: this.userProtectDoc, loading: this.userProtectDocLoading },
];

const soleDocs: DocumentType[] = [
  { key: this.CERT_DOC, doc: this.certDoc, loading: this.certDocLoading },
  { key: this.PATENT_DOC, doc: this.patentDoc, loading: this.patentDocLoading },
  { key: this.BUSINESS_MODEL_DOC, doc: this.businessModelDoc, loading: this.businessModelDocLoading },
  { key: this.USER_PROTECT_DOC, doc: this.userProtectDoc, loading: this.userProtectDocLoading },
  { key: this.ONLINE_CERT_DOC, doc: this.onlineCertDoc, loading: this.onlineCertDocLoading },
];

const licenseDocs: DocumentType[] = [
  { key: this.CERT_DOC, doc: this.certDoc, loading: this.certDocLoading },
  { key: this.PATENT_DOC, doc: this.patentDoc, loading: this.patentDocLoading },
  { key: this.BUSINESS_MODEL_DOC, doc: this.businessModelDoc, loading: this.businessModelDocLoading },
  { key: this.USER_PROTECT_DOC, doc: this.userProtectDoc, loading: this.userProtectDocLoading },
  { key: this.ONLINE_CERT_DOC, doc: this.onlineCertDoc, loading: this.onlineCertDocLoading },
  { key: this.CONTRACT_DOC, doc: this.contractDoc, loading: this.contractDocLoading },
];

const notificationDocs: DocumentType[] = [
  { key: this.PHOTO_DOC, doc: this.directorPhoto_obj, loading: this.photoDocLoading },
  { key: this.ID_CARD_DOC, doc: this.idDoc, loading: this.idDocLoading },
  { key: this.PHOTO_DOC, doc: this.photoDoc, loading: this.photoDocLoading },
];
copyFile(res_doc, key: string, type: string) {
  case 'individual':
    for (const docType of individualDocs) {
      if (docType.key === key) {
        this.preventDuplicatedDocument(res_doc);
        docType.doc = res_doc;
        docType.loading = false;
        break;
      }
    }
    break;

  case 'sole':
    for (const docType of soleDocs) {
      if (docType.key === key) {
        this.preventDuplicatedDocumentSole(res_doc);
        docType.doc = res_doc;
        docType.loading = false;
        break;
      }
    }

    break;

  case 'license':
    for (const docType of licenseDocs) {
      if (docType.key === key) {
        this.preventDuplicatedDocumentLicense(res_doc);
        docType.doc = res_doc;
        docType.loading = false;
        break;
      }
    }

    break;

  default:
    console.error(`Unknown document type: ${type}`);

}
