import Realm from 'realm';

const HOFSchema = {
  name: 'HOFEntry',
  properties: {
    handle: 'number',
    score: 'string',
    miles: 'int',
  },
};

const realm = await Realm.open({
  path: 'myrealm',
  schema: [HOFEntry],
});