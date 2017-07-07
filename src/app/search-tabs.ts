export const SEARCH_TABS = [
  {
    title: 'Customer Search',
    permission: 'mcare_customerdetails_choosecustomer_elasticsearch',
    searchType: 'ELASTIC_SEARCH',
    fields: [
      {
        label: 'GUID', searchParam: 'targetGuid',
        hint: 'Customer’s General User ID. <br/> If you don’t know the Customers GUID, you can enter a partial GUID using wild card characters such as “*”.'
      },
      {label: 'First Name', searchParam: 'firstName'},
      {label: 'Last Name', searchParam: 'lastName'},
      {label: 'Email', searchParam: 'email'},
      {label: 'Zip', searchParam: 'zip'},
      {label: 'State', searchParam: 'state'},
      {label: 'City', searchParam: 'city'},
      {label: 'Street', searchParam: 'street'}
    ],
    active: true
  },
  {
    title: 'Basic Search',
    searchType: 'BASIC_SEARCH',
    fields: [
      {
        label: 'GUID', searchParam: 'targetGuid',
        hint: 'Customer’s General User ID. <br/> If you don’t know the Customers GUID, you can enter a partial GUID using wild card characters such as “*”.'
      },
      {label: 'First Name', searchParam: 'firstName'},
      {label: 'Last Name', searchParam: 'lastName'},
      {label: 'Email', searchParam: 'email'}
    ]
  },
  {
    title: 'MDN Search',
    permission: 'mcare_customerdetails_choosecustomer_mdnsearch',
    searchType: 'MDN_SEARCH',
    fields: [
      {label: 'MDN', searchParam: 'mdn'}
    ]
  },
  {
    title: 'Business Search',
    permission: 'mcare_customerdetails_choosecustomer_businesssearch',
    searchType: 'BUSINESS_SEARCH',
    fields: [
      {label: 'Business Name', searchParam: 'businessName'}
    ]
  },
  {
    title: 'MON Search',
    permission: 'mcare_customerdetails_choosecustomer_monsearch',
    searchType: 'MON_SEARCH',
    fields: [
      {
        label:'MON', searchParam: 'mon',
        hint: 'MON is the Merchant Order Number. <br/> An identifying number AOL and Paymentech use.  Paymentech is our payment processor.'
      }
    ]
  },
  {
    title: 'Order Id Search',
    permission: 'mcare_customerdetails_choosecustomer_orderidsearch',
    searchType: 'ORDER_ID_SEARCH',
    fields: [
      {
        label: 'Order Id', searchParam: 'orderId',
        hint: 'Order ID of any past transaction.'
      }
    ]
  },
  {
    title: 'Payment Method Search',
    permission: 'mcare_customerdetails_choosecustomer_pmsearch',
    searchType: 'PM_SEARCH',
    fields: [
      {
        label: 'Account Number', searchParam: 'paymentAccountNumber',
        hint: 'You must enter the entire account number, including leading zeros.'
      }
    ]
  },
  {
    title: 'SAP Id Search',
    permission: 'mcare_customerdetails_choosecustomer_sapidsearch',
    searchType: 'SAP_ID_SEARCH',
    fields: [
      {
        label: 'SAP Id', searchParam: 'sapAcct',
        hint: 'SAP ID of any past transaction.'
      }
    ]
  },
  {
    title: 'SSN/EID Search',
    permission: 'mcare_customerdetails_choosecustomer_ssnsearch',
    searchType: 'SSN_SEARCH',
    fields: [
      {
        label: 'SSN/EID', searchParam: 'ssn',
        hint: 'Social Security Number or Employer Identification Number'
      }
    ]
  },
  {
    title: 'Go to GUID',
    searchType: 'GOTO_GUID_SEARCH',
    fields: [
      {
        label: 'GUID', searchParam: 'targetGuid',
        hint: '<b>GUID</b> of any past transaction. If you enter a GUID which already <b>exists</b> inside the mCare`s database, then the status page of that GUID <b>will be displayed</b>.'
      }
    ]
  },
  {
    title: 'Payment Id Search',
    permission: 'mcare_customerdetails_choosecustomer_paymentidsearch',
    searchType: 'PAYMENT_ID_SEARCH',
    fields: [
      {
        label: 'Payment Id', searchParam: 'paymentId',
        hint: '<b>Payment Id</b> of any past transaction.'
      }
    ]
  },
  {
    title: 'Address Key Search',
    permission: 'mcare_customerdetails_choosecustomer_addresskeysearch',
    searchType: 'ADDRESS_KEY_SEARCH',
    fields: [
      {
        label: 'Address Key', searchParam: 'addressKey',
        hint: 'Search customers by address key.'
      }
    ]
  },
  {
    title: 'Gift Search',
    permission: 'mcare_customerdetails_choosecustomer_productgiftsearch',
    searchType: 'PRODUCT_GIFT_SEARCH',
    fields: [
      {label: 'First Name', searchParam: 'firstName'},
      {label: 'Last Name', searchParam: 'lastName'},
      {label: 'Email', searchParam: 'email'}
    ]
  },
  {
    title: 'Address Search',
    searchType: 'ADDRESS_SEARCH',
    fields: [
      {label: 'Zip', searchParam: 'zip'},
      {label: 'State', searchParam: 'state'},
      {label: 'City', searchParam: 'city'},
      {label: 'Street', searchParam: 'street'}
    ]
  },
];
