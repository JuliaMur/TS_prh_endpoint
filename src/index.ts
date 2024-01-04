import axios from 'axios'

interface Company {
  name: string
  businessId: string
  registrationDate: string
  companyForm?: string
  detailsUri?: string
}

interface CompanyDetails extends Company {
  liquidations?: [];
  names: [];
  auxiliaryNames?: [];
  addresses?: [];
  companyForms?: [];
  businessLines?: [];
  languages?: [];
  registeredOffices?: [];
  contactDetails?: [];
  registeredEntries?: [];
  businessIdChanges?: [];
}

interface SearchResult {
  totalResults: number
  resultsFrom: number
  results: Company[]
}

// Define function to fetch data from API
const fetchCompanies = async (
  maxResults: number,
  resultsFrom: number,
  streetAddressPostCode: string
): Promise<Company[]> => {
  const baseUrl = 'http://avoindata.prh.fi/bis/v1';
  const queryParams = `maxResults=${maxResults}&resultsFrom=${resultsFrom}&streetAddressPostCode=${streetAddressPostCode}`
  const url = `${baseUrl}?${queryParams}`

  try {
    const response = await axios.get<SearchResult>(url)

    // Extract the list of companies from the search results
    const companies = response.data.results
    return companies
  } catch (error) {
    console.error(error)
    return []
  }
};

// function to fetch data from API by Id
const fetchCompanyDetails = async (businessId: string): Promise<CompanyDetails | null> => {
  const baseUrl = 'http://avoindata.prh.fi/bis/v1'
  const url = `${baseUrl}/${businessId}`

  try {
    const response = await axios.get<CompanyDetails>(url)

    // Return information for the company
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

fetchCompanies(5, 0, '00100').then((companies) => {
  console.log(companies)
})

fetchCompanyDetails('3358838-1').then((companyDetails) => {
  if (companyDetails) {
    console.log(companyDetails)
  } else {
    console.log('Company not found.')
  }
})