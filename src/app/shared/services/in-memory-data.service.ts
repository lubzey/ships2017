import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan interdum mauris, in scelerisque tellus sodales ac. Maecenas orci ex, interdum et tincidunt nec, scelerisque non leo. Curabitur in urna condimentum, blandit sapien sit amet, dignissim metus. Pellentesque aliquet dolor eu nisi feugiat, sit amet maximus eros facilisis. Aenean sed condimentum ante, non facilisis tortor. Sed vehicula pulvinar suscipit. Mauris viverra non lectus nec imperdiet. Fusce non odio nisl. Pellentesque scelerisque vehicula leo. Nam imperdiet varius pellentesque. Sed a arcu fringilla, tempus velit nec, iaculis urna. Sed interdum et dui sit amet lobortis. Cras non volutpat orci, at faucibus urna. Pellentesque vel nunc ac massa lobortis mollis. Nam id aliquet elit. Curabitur tristique, leo cursus blandit tristique, ante leo dapibus risus, eu aliquam arcu magna a enim.';
    let ships = [
      { id: 1, name: 'Gargantua', year: 1700, country: 'France', description: lorem, photos:['ship1', 'ship2', 'ship3'] },
      { id: 2, name: 'El Padre', year: 1803, country: 'Italy', description: lorem },
      { id: 3, name: 'Blitzkrieg', year: 1904, country: 'Germany', description: lorem },
      { id: 4, name: 'Titanic', year: 1570, country: 'England', description: lorem },
      { id: 5, name: 'Magneta', year: 1746, country: 'Scotland', description: lorem },
      { id: 6, name: 'RubberMan', year: 1850, country: 'Portugal', description: lorem },
      { id: 7, name: 'Dynama', year: 1900, country: 'Bulgaria', description: lorem },
      { id: 8, name: 'Dr IQ', year: 1923, country: 'Russia', description: lorem },
      { id: 9, name: 'Magma', year: 1898, country: 'Spain', description: lorem },
      { id: 10, name: 'Tornado', year: 1868, country: 'China', description: lorem }
    ];
    return { ships };
  }


}
