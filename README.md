# Company portal from PRH (prh.fi)

The task is to use TypeScript to fetch data from a 3rd party service

## Requirements

1. Check PRH documentation to understand the shape of data returned from endpoints
2. Create corresponding types for the returned data of 2 endpoint `GET /BIS/V1/{BUSINESSID}` and `GET /BIS/V1`
3. Create 1 function which takes to 3 paramerters: maxResults (the total number of results returned), resultFrom (the number of results to be skipped), and streetAddressPostCode (the postal code address). This function should return a list of all the companies satisfied the parameters. Each company in the list should have detailed information of that company. For example:

```
[
{
      "businessId": "3355613-6",
      "name": "Interface compatibility Oy",
      "registrationDate": "2023-03-31",
      "companyForm": "OY",
      "detailsUri": null,
      "liquidations": [],
      "names": [
        {
          "order": 0,
          "version": 1,
          "name": "Interface compatibility Oy",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "source": 3
        },
        {
          "order": 2,
          "version": 1,
          "name": "Interface compatibility Ltd",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "source": 3
        }
      ],
      "auxiliaryNames": [
        {
          "order": 2,
          "version": 1,
          "name": "ICO",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "source": 3
        }
      ],
      "addresses": [
        {
          "careOf": null,
          "street": "Lekatie 6",
          "postCode": "50170",
          "type": 1,
          "version": 1,
          "city": "MIKKELI",
          "country": null,
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "FI",
          "source": 0
        },
        {
          "careOf": null,
          "street": "Lekatie 6",
          "postCode": "50170",
          "type": 2,
          "version": 1,
          "city": "MIKKELI",
          "country": null,
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "FI",
          "source": 0
        }
      ],
      "companyForms": [
        {
          "version": 1,
          "name": "Osakeyhtiö",
          "type": "OY",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "FI",
          "source": 3
        },
        {
          "version": 1,
          "name": "Aktiebolag",
          "type": "AB",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "SE",
          "source": 3
        },
        {
          "version": 1,
          "name": "Limited company",
          "type": null,
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "EN",
          "source": 3
        }
      ],
      "businessLines": [],
      "languages": [],
      "registedOffices": [
        {
          "order": 0,
          "version": 1,
          "name": "MIKKELI",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "EN",
          "source": 0
        },
        {
          "order": 0,
          "version": 1,
          "name": "MIKKELI",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "FI",
          "source": 0
        },
        {
          "order": 0,
          "version": 1,
          "name": "ST MICHEL",
          "registrationDate": "2023-03-31",
          "endDate": null,
          "language": "SE",
          "source": 0
        }
      ],
      "contactDetails": [],
      "registeredEntries": [
        {
          "authority": 2,
          "register": 1,
          "status": 2,
          "registrationDate": "2023-03-31",
          "endDate": null,
          "statusDate": "2023-03-31",
          "language": "FI",
          "description": "Rekisteröimätön"
        },
        {
          "authority": 2,
          "register": 1,
          "status": 2,
          "registrationDate": "2023-03-31",
          "endDate": null,
          "statusDate": "2023-03-31",
          "language": "SE",
          "description": "Oregistrerad"
        },
        {
          "authority": 2,
          "register": 1,
          "status": 2,
          "registrationDate": "2023-03-31",
          "endDate": null,
          "statusDate": "2023-03-31",
          "language": "EN",
          "description": "Unregistered"
        }
      ],
      "businessIdChanges": []
    }
]
```

4. Your application should have good structure, clean code format, and comprehensive naming convention.

## PRH documentation

EN: http://avoindata.prh.fi/ytj_en.html
end-point for fetching the company information: http://avoindata.prh.fi/bis/v1
