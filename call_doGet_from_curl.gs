/**
 * 参考: https://www.ka-net.org/blog/?p=12258
 * ※ 記述が「以前のエディタ」に基づいているのであくまで参考
 * 
 * ウェブアプリケーションにアクセス可能なユーザーを指定
 *  ウェブ アプリケーションとして導入
 *  アプリケーションにアクセスできるユーザーを「Google アカウントを持つ全員」
 * 
 * _getToken() をデプロイごとに一度実行して OAuthToken をログからコピペする(*1)
 * 
 * デプロイすると
 *  https://script.google.com/macros/s/.../exec
 * この形式のURLが発行される(*2)
 * 
 * コマンドラインからアクセストークンを指定してリクエストを送信
 * curlのヘッダーにて、Authorization: Bearer にアクセストークンを含めれば良い
 * ```sh
 * $ token="OAuthToken(*1)"
 * $ url="Deployed url(*2)"
 * $ curl -L -H "Authorization: Bearer $token" "$url"
 * ```
 * 
 * ちなみに、セキュリティがゆるくてよければ、
 * デプロイ時のアプリケーションにアクセスできるユーザーを単に「全員」とすると
 * OAuthToken は不要で、`$ curl -L "$url"`だけで GET リクエストできる。
 */
function doGet() {
  let str = 'Hello, You!';
  let arr = str.split(' ');
  let data = JSON.stringify(arr);
  let out = ContentService.createTextOutput();
  out.append(data);
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}

function _getToken() {
  console.log(DriveApp.getRootFolder().getName()); // for 権限取得ウィザードを走らせるため
  console.log(ScriptApp.getOAuthToken());
}
