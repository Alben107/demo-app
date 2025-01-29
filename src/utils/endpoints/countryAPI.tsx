import publicAPI from "../publicAPI";

interface Country {
  name: string;
  region: string;
  flag: string;
  independent: boolean;
}

export const mainApi = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => ({
        url: "v2/all?fields=name,region,flag",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCountriesQuery } = mainApi;
