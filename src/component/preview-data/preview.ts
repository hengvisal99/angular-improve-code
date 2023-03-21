import { Component } from '@angular/core';

interface License {
  address: {
    district: string;
    commune: string;
    province: string;
  };
  contact: {
    mobile_phone: string;
    email: string;
  };
  director: {
    address: {
      street_number: string;
    };
  };
}

interface TableRow {
  label: string;
  value: keyof License;
  transform?: (value: any) => string;
}

@Component({
  selector: 'my-component',
  templateUrl: './my-component.html',
})
export class MyComponent {
  license: License | undefined;

  tableRows: TableRow[] = [
    {
      label: 'general.body.table_detail.address.district',
      value: 'address.district',
      transform: (value) =>
        this.lang == 'km' ? value?.name_kh : value?.name_en,
    },
    { label: 'license.phone', value: 'contact.mobile_phone' },
    {
      label: 'general.body.table_detail.address.road',
      value: 'director.address.street_number',
    },
    {
      label: 'general.body.table_detail.address.commune',
      value: 'address.commune',
      transform: (value) =>
        this.lang == 'km' ? value?.name_kh : value?.name_en,
    },
    {
      label: 'general.body.table_detail.address.province',
      value: 'address.province',
      transform: (value) =>
        this.lang == 'km' ? value?.name_kh : value?.name_en,
    },
    {
      label: 'general.body.table_detail.address.email',
      value: 'contact.email',
    },
  ];

  lang = 'km'; // assume this is the language preference

  constructor(private translationService: TranslationService) {}
  getValue(
    valueKey: keyof License,
    transform?: (value: any) => string
  ): string {
    const value = this.license?.[valueKey];
    return transform ? transform(value) : value?.toString() ?? '';
  }

  getLabel(label: string): string {
    return this.translationService.translate(label);
  }
}
