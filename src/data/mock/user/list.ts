import { MockMethods, MockResponse } from 'axios-mock-server';
import { User } from '../../type';

const list: MockMethods = {
  get: async (): Promise<MockResponse> => {
    const data: User[] = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 6 },
        { id: 6, lastName: 'Melisandre', firstName: 'test', age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return [200, data]; // 200 はステータスコード
  }
};

export default list; // ここは `default export` にしないと動かない