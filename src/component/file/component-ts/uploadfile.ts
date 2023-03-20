enum UserType {
  Individual = 'individual',
  Sole = 'sole',
  License = 'license',
  Notification = 'notification',
}

enum DocumentType {
  Allowance = 'allowance',
  Patent = 'patent',
  IdCard = 'idCard',
  Photo = 'photo',
  BusinessModel = 'businessModel',
  UserProtect = 'userProtect',
  Cert = 'cert',
  OnlineCert = 'onlineCert',
  Contract = 'contract',
}

interface DocumentConfig {
  loadingState: boolean;
  saveMethod: (file: File, docType: DocumentType, userType: UserType) => void;
}

const documentConfigs: Record<DocumentType, DocumentConfig> = {
  [DocumentType.Allowance]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.Patent]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.IdCard]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.Photo]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.BusinessModel]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.UserProtect]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.Cert]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.OnlineCert]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
  [DocumentType.Contract]: {
    loadingState: false,
    saveMethod: (file, docType, userType) =>
      saveToTmpFile(file, docType, userType),
  },
};

function onUploadSupportingDoc(
  event: Event,
  oldFileId: string,
  docType: DocumentType,
  userType: UserType
) {
  const fileElement = event.target as HTMLInputElement;

  Array.from(fileElement.files).forEach((file) => {
    if (file.size / 1024 / 1024 > 50) {
      popupMaxSizeDoc('50MB');
      return;
    }

    const config = documentConfigs[docType];

    if (config) {
      config.loadingState = true;
      config.saveMethod(file, docType, userType);
    }
  });
}
