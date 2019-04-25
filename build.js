const https = require('https');
const parse = require('proto-parse');
const { createInterfacesFromObject } = require('typescript-interface-generator');

const typeExamples = {
  uint64: 1,
  int64: 1,
  int32: 1,
  string: "",
  "google.protobuf.Timestamp": 1,
  bool: true,
  double: 1.1
}

const getProto = () => new Promise((accept, reject) => {
  https.get('https://api-v3.igdb.com/igdbapi.proto', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      accept(data);
    });

  }).on("error", (err) => {
    reject(err);
  });
});

const replaceUndefined = (string, key, value) => {
  const regex = new RegExp(`${key}: (undefined);`, "g");
  return string.replace(regex, `${key}: ${value};`);
};

getProto().then(rawProto => {
  const data = parse(rawProto);
  const messages = data.content.filter(i => i.type === 'message').filter(i => i.name);
  const enums = data.content.filter(i => i.type === 'enum');
  const dataContainer = [];

  messages.forEach(message => {
    const dataType = {};
    const referenceTypes = {};

    message.content.filter(i => i.type === 'field').forEach(c => {
      let defaultType = typeExamples[c.typename];
      
      if (defaultType) {
        if (c.repeated === true) {
          defaultType = [defaultType];
        }
        dataType[c.name] = defaultType;
      } else {
        let customType = c.typename;
        if (c.repeated === true) {
          customType = `Array<${customType}>`;
        }
        referenceTypes[c.name] = customType;
        dataType[c.name] = undefined;
      }
    });

    let definitionString = createInterfacesFromObject(message.name, dataType);
    Object.keys(referenceTypes).forEach(key => {
      definitionString = replaceUndefined(definitionString, key, referenceTypes[key]);
    });

    dataContainer.push(definitionString);
  });

  enums.forEach(e => {
    let definitionString = `\nenum ${e.name} {\n`;
    definitionString += e.content.map(c => `  ${c.name} = ${c.val}`).join(',\n');
    definitionString += '\n}';
    dataContainer.push(definitionString);
  });

  require('fs').writeFileSync('index.d.ts', dataContainer.join('\n'));

});

module.exports.replaceUndefined = replaceUndefined;