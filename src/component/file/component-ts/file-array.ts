attachments = [
  { 
    label: 'form.step_one.attachment.certificate',
    sizeLabel: 'lbl.size',
    key: CERT_DOC,
    doc: certDoc
  },
  {
    label: 'form.step_one.attachment.patent_two',
    sizeLabel: 'lbl.size',
    key: PATENT_DOC,
    doc: patentDoc
  }
];
attachments: Attachment[] = [
  {
    label: "form.step_one.attachment.allowance",
    key: "allowanceDoc",
    required: true,
    loading: false,
  },
  {
    label: "form.step_one.attachment.patent",
    key: "patentDoc",
    required: false,
    loading: false,
  },
  {
    label: "form.step_one.attachment.id",
    key: "idDoc",
    required: true,
    loading: false,
  },
];
