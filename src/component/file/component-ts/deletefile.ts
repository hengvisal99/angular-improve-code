deleteFile(file: string, key: string, type: string): void {
  console.log('file delete', file);
  console.log('file type', type);
  const dialogRef = this.dialog.open(CustomMessageDialogComponent, {
    width: '500px',
    disableClose: true,
    data: {
      is_yes_no_question: true,
      is_delete_file: true,
    },
    autoFocus: false,
  });

  dialogRef.afterClosed().subscribe((res) => {
    if (res) {
      const documentGroups: any = {
        individual: [
          { key: this.ALLOWANCE_DOC, documents: this.documents, doc: this.allowanceDoc },
          { key: this.PATENT_DOC, documents: this.documents, doc: this.patentDoc },
          { key: this.ID_CARD_DOC, documents: this.documents, doc: this.idDoc },
          { key: this.PHOTO_DOC, documents: this.documents, doc: this.photoDoc },
          { key: this.BUSINESS_MODEL_DOC, documents: this.documents, doc: this.businessModelDoc },
          { key: this.USER_PROTECT_DOC, documents: this.documents, doc: this.userProtectDoc },
        ],
        sole: [
          { key: this.CERT_DOC, documents: this.documentsSole, doc: this.certDoc },
          { key: this.PATENT_DOC, documents: this.documentsSole, doc: this.patentDoc },
          { key: this.BUSINESS_MODEL_DOC, documents: this.documentsSole, doc: this.businessModelDoc },
          { key: this.USER_PROTECT_DOC, documents: this.documentsSole, doc: this.userProtectDoc },
          { key: this.ONLINE_CERT_DOC, documents: this.documentsSole, doc: this.onlineCertDoc },
        ],
        license: [
          { key: this.CERT_DOC, documents: this.documentsLicense, doc: this.certDoc },
          { key: this.PATENT_DOC, documents: this.documentsLicense, doc: this.patentDoc },
          { key: this.BUSINESS_MODEL_DOC, documents: this.documentsLicense, doc: this.businessModelDoc },
          { key: this.USER_PROTECT_DOC, documents: this.documentsLicense, doc: this.userProtectDoc },
          { key: this.ONLINE_CERT_DOC, documents: this.documentsLicense, doc: this.onlineCertDoc },
          { key: this.CONTRACT_DOC, documents: this.documentsLicense, doc: this.contractDoc },
        ],
        notification: [
          { key: this.ID_CARD_DOC, documents: this.documentsNotification, doc: this.idDoc },
          // Add more cases here as needed
        ],
      };

      const docInfo = documentGroups[type].find(doc => doc.key === key);

      if (!docInfo) {
        return;
      }

      const docIndex = docInfo.documents.findIndex(doc => doc.key === docInfo.key);
      if (docIndex === -1) {
        return;
      }

      this.apiService.deleteFile(file).subscribe((res: any) => {
        console.log('delete', res);
        docInfo.documents.splice(docIndex, 1);
        docInfo.doc = null;
      });
    }
  });
}
