'use strict'

// chld_processモジュールのexecを参照
import { exec } from 'child_process'
import { resolve } from 'path'

export default class cpBackground {
  // get json object for teams and confs
  static get_teams_confs () {
    alert('get team list and conf list')
    // wget teamlist from webdav to /src/assets <- confirm
    //  exec('wget -P ./src/assets/ http://cms-dev.ark.bb.local/webdav/pi/team_config_list.json')
    // exec('wget -P ./src/assets/ http://cms-dev.ark.bb.local/webdav/dlModule/Handsontable/0.14.1/templateinfo.json')  // example
    // check team list 
    exec('pwd > checkPWD.txt')

    var fs = require('fs');
    var jsonObject = JSON.parse(fs.readFileSync("./teams_configs.json", {encoding: "utf-8"}))
    console.log(jsonObject)
//    return(jsonObject)

    for (var i in jsonObject) {
       var  team = jsonObject[i];
        console.log(team.name);
    }

/*        let msg = '';
        fs.readFile('hoge.txt', 'utf-8', (err, data) => {
        // 例外処理
        if (err) { throw err; }
        msg = data;
        console.log(msg);
        });
        console.log('ファイル読み込み中でも処理が走ります。');*/
    return;
  }

// make configuration list for configuration drop down list
/*    static config(){

    }
*/
// execute install  and remain installed information
/*    static install( scriptname ){

    }
*/
// execute uninstall by installed information 
/*    static uninstall(){

    }
*/    
}