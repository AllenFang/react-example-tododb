import mongoskin from 'mongoskin';

export default function(name){
  var name = name || 'demodb';
  return mongoskin.db(`mongodb://localhost:27017/${name}`, {native_parser: true});
};
