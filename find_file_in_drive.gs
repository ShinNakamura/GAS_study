/**
 * finding /GAS_study/config/config.json
 */
function find_file_in_drive() {
  // config.json というファイル名がドライブの中で一意だとわかっていれば…
  files = DriveApp.getFilesByName("config_sample.json");
  while (files.hasNext()) {
    const f = files.next();
    console.log(f.getName(), f.getId());
  }

  // より堅実に、ルートから階層を一つずつ確認して config.json にたどり着く
  const root = DriveApp.getRootFolder();
  const root_children = root.getFoldersByName("GAS_study");
  while (root_children.hasNext()) {
    const root_child = root_children.next();
    const _GAS_study_children = root_child.getFoldersByName("config");
    while (_GAS_study_children.hasNext()) {
      const _GAS_study_child = _GAS_study_children.next();
      const files = _GAS_study_child.getFilesByName("config_sample.json");
      while (files.hasNext()) {
        const f = files.next();
        console.log(f.getName(), f.getId());
      }      
    }
  }
}
