import { rest } from '../rest';
import { Photo } from '../type';

const getPhotoes = async (): Promise<Photo[]> => {
  const url = "/photo/list";
  try {
    const { data } = await rest.get<Photo[]>(url)
    return data;
  } catch (error) {
    throw new Error("----rest get photoes list error-------");
  }
}

export { getPhotoes };