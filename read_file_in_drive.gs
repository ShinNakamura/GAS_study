/**
 * sample: __z01RVZUVAs__.config.json
 * このJSONを見つけて、読む。
 */
function read_file_in_drive() {
  /*
  練習なので、ファイル名が一意であるという前提にし、
  最初に見つかったものを目的のファイルとして認識。
  実際は予め対象ファイルのIDを使うのが良いと思われる。
  */
  const fname = "__z01RVZUVAs__.config.json";
  let f_id = "";
  const files = DriveApp.getFilesByName(fname);
  while (files.hasNext()) {
    f_id = files.next().getId();
    break;
  }

  const config_file_id = f_id;
  // IDからファイルを特定する例
  const config_file = DriveApp.getFileById(config_file_id);
  const config_string = config_file.getBlob().getDataAsString();
  console.log(config_string);
  console.log(JSON.parse(config_string)["foo"]);
}
