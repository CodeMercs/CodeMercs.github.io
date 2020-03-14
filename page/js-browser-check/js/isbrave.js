window.onerror = function (err, file, line) {
    document.body.append('The following error occurred: ' +
    err + '\nIn file: ' + file + '\nOn line: ' + line);
    return true;
}

// Detect Brave
const ua            = window.navigator.userAgent.toLowerCase()
const isChrome      = /chrome|crios/.test(ua) && ! /edge|opr\//.test(ua)
const plugins       = navigator.plugins
const pluginsObject = plugins
const hasPlugins    = plugins.length > 0

const ObjToSource=(o)=> {
    if (!o) return null;
    let str="",na=0,k,p;
    if (typeof(o) == "object") {
        if (!ObjToSource.check) ObjToSource.check = new Array();
        for (k=ObjToSource.check.length;na<k;na++) if (ObjToSource.check[na]==o) return '{}';
        ObjToSource.check.push(o);
    }
    k="",na=typeof(o.length)=="undefined"?1:0;
    for(p in o){
        if (na) k = "'"+p+"':";
        if (typeof o[p] == "string") str += k+"'"+o[p]+"',";
        else if (typeof o[p] == "object") str += k+ObjToSource(o[p])+",";
        else str += k+o[p]+",";
    }
    if (typeof(o) == "object") ObjToSource.check.pop();
    if (na) return "{"+str.slice(0,-1)+"}";
    else return "["+str.slice(0,-1)+"]";
}
const twoPlugins=(o)=> {
  if (plugins.length === 2) {
    if (plugins[0].name ==="Chrome PDF Plugin" && plugins[1].name==="Chrome PDF Viewer") {
      return true
    }
  } else {
    return false
  }
}

var simplePlugins = '';
for (var property in pluginsObject) {
  simplePlugins += property + ': ' + pluginsObject[property]+'; ';
}

const testForAdBlocker = function(callback) {
    const img = new Image;
    img.onload = function() {
        callback(true);
    }
    img.onerror = function() {
        callback(false);
    }
    img.src = 'https://mycrypto.com/&showad=TEST_URL_TO_CHECK_FOR_BRAVE_AD_BLOCKING';
}

console.log(pluginsObject)


testForAdBlocker(function(blocksAds) {
    if (isChrome) {
        if (!hasPlugins) {
            if (blocksAds) {
                const isBrave = true
                document.getElementById('ua').innerHTML = ua
                document.getElementById('isChrome').innerHTML = isChrome
                document.getElementById('hasPlugins').innerHTML = hasPlugins
                document.getElementById('pluginsLength').innerHTML = plugins.length
                document.getElementById('simplePlugins').innerHTML = simplePlugins
                document.getElementById('pluginsObject').innerHTML = ObjToSource(pluginsObject)
                document.getElementById('blocksAds').innerHTML = blocksAds
                document.getElementById('isBrave').innerHTML = isBrave
                document.getElementById('conclusion').innerHTML = "you are on brave"
            } else {
                const isBrave = false
                document.getElementById('ua').innerHTML = ua
                document.getElementById('isChrome').innerHTML = isChrome
                document.getElementById('hasPlugins').innerHTML = hasPlugins
                document.getElementById('pluginsLength').innerHTML = plugins.length
                document.getElementById('simplePlugins').innerHTML = simplePlugins
                document.getElementById('pluginsObject').innerHTML = ObjToSource(pluginsObject)
                document.getElementById('blocksAds').innerHTML = blocksAds
                document.getElementById('isBrave').innerHTML = isBrave
                document.getElementById('conclusion').innerHTML = "you are on chrome mobile"
            }
        } else if (plugins.length===2 && twoPlugins) {
            const isBrave = true
            document.getElementById('ua').innerHTML = ua
            document.getElementById('isChrome').innerHTML = isChrome
            document.getElementById('hasPlugins').innerHTML = hasPlugins
            document.getElementById('pluginsLength').innerHTML = plugins.length
            document.getElementById('pluginsName').innerHTML = plugins[0].name + " & " + plugins[1].name
            document.getElementById('simplePlugins').innerHTML = simplePlugins
            document.getElementById('pluginsObject').innerHTML = ObjToSource(pluginsObject)
            document.getElementById('blocksAds').innerHTML = blocksAds
            document.getElementById('isBrave').innerHTML = isBrave
            document.getElementById('conclusion').innerHTML = "you are on brave nightly"
        } else {
            const isBrave = false
            document.getElementById('ua').innerHTML = ua
            document.getElementById('isChrome').innerHTML = isChrome
            document.getElementById('hasPlugins').innerHTML = hasPlugins
            document.getElementById('pluginsLength').innerHTML = plugins.length
            document.getElementById('simplePlugins').innerHTML = simplePlugins
            document.getElementById('pluginsObject').innerHTML = ObjToSource(pluginsObject)
            document.getElementById('blocksAds').innerHTML = blocksAds
            document.getElementById('isBrave').innerHTML = isBrave
            document.getElementById('conclusion').innerHTML = "you are on chrome desktop"
        }
    } else {
        const isBrave = false
        document.getElementById('ua').innerHTML = ua
        document.getElementById('isChrome').innerHTML = isChrome
        document.getElementById('hasPlugins').innerHTML = hasPlugins
        document.getElementById('pluginsLength').innerHTML = plugins.length
        document.getElementById('simplePlugins').innerHTML = simplePlugins
        document.getElementById('pluginsObject').innerHTML = ObjToSource(pluginsObject)
        document.getElementById('blocksAds').innerHTML = blocksAds
        document.getElementById('isBrave').innerHTML = isBrave
        document.getElementById('conclusion').innerHTML = "you are on some other piece of shit browser (firefox, safari, ie, etc.)"
    }
});