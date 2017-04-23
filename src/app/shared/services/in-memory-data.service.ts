import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan interdum mauris, in scelerisque tellus sodales ac. Maecenas orci ex, interdum et tincidunt nec, scelerisque non leo. Curabitur in urna condimentum, blandit sapien sit amet, dignissim metus. Pellentesque aliquet dolor eu nisi feugiat, sit amet maximus eros facilisis. Aenean sed condimentum ante, non facilisis tortor. Sed vehicula pulvinar suscipit. Mauris viverra non lectus nec imperdiet. Fusce non odio nisl. Pellentesque scelerisque vehicula leo. Nam imperdiet varius pellentesque. Sed a arcu fringilla, tempus velit nec, iaculis urna. Sed interdum et dui sit amet lobortis. Cras non volutpat orci, at faucibus urna. Pellentesque vel nunc ac massa lobortis mollis. Nam id aliquet elit. Curabitur tristique, leo cursus blandit tristique, ante leo dapibus risus, eu aliquam arcu magna a enim.';
    let ships = [
      {
        id: 1,
        name: 'Санта Мария',
        originalName: 'Santa Maria',
        year: '1460',
        origin: 'Испания',
        description: `Христофор Колумб е генуезки мореплавател и търговец, прекосил Атлантическия океан и достигнал Америка на 12 октомври 1492 г. под флага на Кастилия. Той вярвал, че Земята е по-малка сфера и твърдял, че може да достигне Далечния изток, като пътува от Европа само на запад.
        
        Санта Мария е най-големият от трите кораба използвани от Кристофор Колумб, с които прекосява Атлантическия океан през 1492 г.`,
        photos: ['ship1', 'ship2', 'ship3']
      },
      {
        id: 2,
        name: 'Златната кошута',
        originalName: 'Golden Hind(e)',
        year: '1577',
        origin: 'Англия',
        description: `През 1578 г. с прочутия си кораб „Златната кошута“ Сър Франсис Дрейк, придружен от моряци върху още 4 кораба, достига Южна Америка. Започва бунт срещу капитана, който е свирепо потушен. Вече на три кораба, Дрейк повежда екипажите все по на юг, за да заобиколи континента и да се озове от Атлантическия в Тихия океан.  Така на 24 октомври 1578 г. англичаните откриват протока Дрейк, разделящ Антарктида от Америка. Оттам поемат на Север по западното американска крайбрежие, като нападат, ограбват и убиват всеки испански кораб или крайбрежно селище (в днешните Чили и Перу) по пътя си. 
      
      В безбрежния Пасифик „Златната кошута“ достига Африка, заобикаля континента покрай нос Добра Надежда и три месеца по-късно Дрейк се завръща в Англия с пълни трюмове с подправки и испанско злато и сребро. Това околосветско пътешествие му е коствало две години и десет месеца плаване. Пиратът разкрива на сънародниците си новите морски пътища, през които е минал, което дава значителна преднина на английския флот. В знак на уважение към Дрейк, кралица Елизабет I се качва на пиратския му кораб и го обсипва с почести. Мореплавателят ѝ предава значителна част от испанските съкровища.`,
        photos: ['ship1', 'ship2', 'ship3', 'ship4', 'ship5']
      },
      { id: 3, name: 'Blitzkrieg', year: '1904', origin: 'Germany', description: lorem, photos: ['ship1', 'ship2', 'ship3'] },
      { id: 4, name: 'Titanic', year: '1570', origin: 'England', description: lorem, photos: ['ship1', 'ship2', 'ship3'] },
      { id: 5, name: 'Magneta', year: '1746', origin: 'Scotland', description: lorem, photos: ['ship1', 'ship2', 'ship3'] },
      { id: 6, name: 'RubberMan', year: '1850', origin: 'Portugal', description: lorem, photos: ['ship1', 'ship2', 'ship3'] },
      { id: 7, name: 'Dynama', year: '1900', origin: 'Bulgaria', description: lorem, photos: ['ship1', 'ship2', 'ship3'] },
      { id: 8, name: 'Dr IQ', year: '1923', origin: 'Russia', description: lorem, photos: ['ship1', 'ship2', 'ship3'] },
      { id: 9, name: 'Magma', year: '1898', origin: 'Spain', description: lorem, photos: ['ship1', 'ship2', 'ship3'] },
      { id: 10, name: 'Tornado', year: '1868', origin: 'China', description: lorem, photos: ['ship1', 'ship2', 'ship3'] }
    ];
    return { ships };
  }


}
