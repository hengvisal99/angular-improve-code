validateDocuments() {
  let valid = false;
  let docKeys = this.documents.map((item) => item.key);
  let docKeysSole = this.documentsSole.map((item) => item.key);
  let docKeysLicense = this.documentsLicense.map((item) => item.key);
  let docKeysNotification = this.documentsNotification.map((item) => item.key);

  switch (this.url) {
    case 'individual':
      valid =
        docKeys.includes(this.ALLOWANCE_DOC) &&
        docKeys.includes(this.ID_CARD_DOC) &&
        docKeys.includes(this.BUSINESS_MODEL_DOC) &&
        docKeys.includes(this.USER_PROTECT_DOC) &&
        this.isDeclare == true &&
        this.isPromise == true;
      break;
    case 'sole':
      valid =
        (this.isWebsite == true &&
          docKeysSole.includes(this.CERT_DOC) &&
          docKeysSole.includes(this.PATENT_DOC) &&
          docKeysSole.includes(this.BUSINESS_MODEL_DOC) &&
          docKeysSole.includes(this.USER_PROTECT_DOC) &&
          docKeysSole.includes(this.ONLINE_CERT_DOC) &&
          this.isDeclare == true &&
          this.isPromise == true) ||
        (this.isWebsite == false &&
          docKeysSole.includes(this.CERT_DOC) &&
          docKeysSole.includes(this.PATENT_DOC) &&
          docKeysSole.includes(this.BUSINESS_MODEL_DOC) &&
          docKeysSole.includes(this.USER_PROTECT_DOC) &&
          this.isDeclare == true &&
          this.isPromise == true);
      break;
    case 'license':
      valid =
        (this.isWebsite == true &&
          docKeysLicense.includes(this.CERT_DOC) &&
          docKeysLicense.includes(this.PATENT_DOC) &&
          docKeysLicense.includes(this.BUSINESS_MODEL_DOC) &&
          docKeysLicense.includes(this.USER_PROTECT_DOC) &&
          docKeysLicense.includes(this.ONLINE_CERT_DOC) &&
          this.isDeclare == true &&
          this.isPromise == true) ||
        (this.isWebsite == false &&
          docKeysLicense.includes(this.CERT_DOC) &&
          docKeysLicense.includes(this.PATENT_DOC) &&
          docKeysLicense.includes(this.BUSINESS_MODEL_DOC) &&
          docKeysLicense.includes(this.USER_PROTECT_DOC) &&
          this.isDeclare == true &&
          this.isPromise == true);
      break;
    case 'notification':
      valid =
        docKeysNotification.includes(this.ID_CARD_DOC) &&
        this.isDeclare == true &&
        this.isPromise == true;
      break;
  }

  console.log('valid', valid);
  return valid;
}
