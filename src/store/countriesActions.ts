import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/instance';
import { ICountryData, ICountryApi } from 'types';

export type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

export const getAllCountries = createAsyncThunk<
  ICountryData[],
  undefined,
  { rejectValue: KnownError }
>('country/all', async function (_, thunkApi) {
  try {
    const response = await api.instance.get<ICountryApi[]>('/all');
    const data: ICountryData[] = [];

    response.data.forEach((d) => {
      data.push({
        name: d.name.common,
        region: d.region,
        flag: d.flag,
        population: d.population,
        capital: (d.capital && d.capital.length) ? d.capital.join(', ') : '',
        cca2: d.cca2.toLowerCase(),
      });
    });
    data.sort((first, second) => second.population - first.population);

    return data;
    
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error: AxiosError<KnownError> = err as any;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});
