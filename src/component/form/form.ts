// define an array of objects to represent each item
const items = [
  {
    label: '_type',
    param: 'account_number',
    value: bank?.account_number,
    class: 'col-md-3 info',
  },
  {
    label: 'bank',
    value: bank?.bank?.name_tr || bank?.bank?.name,
    class: 'col-md-3 info',
  },
  {
    label: 'issued_date',
    value: bank?.released_date | date,
    class: 'col-md-3 info',
  },
  {
    label: 'is_personal_account',
    value: bank?.is_personal_account ? 'yes' : 'no',
    class: 'col-md-3 info',
  },
  { label: 'description', value: bank?.description, class: 'col-md-12 info' },
];

// iterate over the array of objects to render the HTML structure
