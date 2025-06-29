import Realm from 'realm';

const HOFSchema = {
  name: 'HOFData',
  properties: {
    handle: 'string',
    score: 'numberint',
 
  },
};

const realm = await Realm.open({
  path: 'myrealm',
  schema: [HOFschema],
});

realm.write(() => {
  realm.create('HOFData', {
    handle: handle,
    score: finalScore,
  });
});

console.log("Saved to HOF: ", handle, finalScore);