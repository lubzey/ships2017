import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Gargantua', year: 1700, country: 'France' },
      { id: 2, name: 'El Padre', year: 1803, country: 'Italy' },
      { id: 3, name: 'Blitzkrieg', year: 1904, country: 'Germany' },
      { id: 4, name: 'Titanic', year: 1570, country: 'England' },
      { id: 5, name: 'Magneta', year: 1746, country: 'Scotland' },
      { id: 6, name: 'RubberMan', year: 1850, country: 'Portugal' },
      { id: 7, name: 'Dynama', year: 1900, country: 'Bulgaria' },
      { id: 8, name: 'Dr IQ', year: 1923, country: 'Russia' },
      { id: 9, name: 'Magma', year: 1898, country: 'Spain' },
      { id: 10, name: 'Tornado', year: 1868, country: 'China' }
    ];
    return { heroes };
  }


}
