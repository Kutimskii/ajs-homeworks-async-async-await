import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(15000);
test('test  GameSavingLoader ', async (done) => {
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1, level: 10, name: 'Hitman', points: 2000,
    },
  });
  done();
});

// test('test catch  GameSavingLoader ', async (done) => {
//   try{
//     let json = '';
//      const saving = await GameSavingLoader.load()
//   } catch (e){
//     expect(e.name).toEqual('Oops');
//   }
//   done();
// });
