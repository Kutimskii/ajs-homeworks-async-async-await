import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(15000);
test('test  GameSavingLoader ', async (done) => {
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  done();
});

// test('test catch  GameSavingLoader ', async (done) => {
//   try{
//     let GAme = new GameSavingLoader
//      const saving = await GameSavingLoader.load = (async () => {
//       // Your code here with await
//     })();;

//   } catch (e){
//     expect(e.name).toEqual('Oops');
//   }

//   done();
// });
