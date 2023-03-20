licenses = [
  {
    formType: 'individual',
    icon: 'create-individual',
    permit: 'lbl.permit',
    number: 'lbl.one'
  },
  {
    formType: 'sole',
    icon: 'create-enterprise',
    permit: 'lbl.permit',
    number: 'lbl.two'
  },
  {
    formType: 'license',
    icon: 'license-application',
    permit: 'lbl.license_application',
    number: 'lbl.three'
  },
  {
    formType: 'renew',
    icon: 'autorenew',
    permit: 'lbl.renew',
    number: null
  }
];

onRouter(formType: string) {
  if (formType === 'renew' && this.is_disable_renew) {
    return;
  }
  this.router.navigate([`/licenses/businesses/form/${formType}`]);
}