// 获取User-Agent信息
var userAgent = navigator.userAgent;
 
// 判断是否为移动设备（包括iPhone、Android等）
if (/Mobile|Android/.test(userAgent)) {
    // 如果是移动设备则跳转到WAP页面
    window.location.href = "http://81.70.63.99/";
} else {
    // 如果是PC设备则跳转到PC页面
    window.location.href = "https://yxlibao.com/";
}

/**
 * 全局参数
 * @returns {Array}
 */
var ua = window.navigator.userAgent.toLowerCase();//获取手机参数对象
document.body.addEventListener('touchstart', function () {
});//解决ios 支持active激活状态


function getRomTypeName() {
    var mRomType = "android";
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod|ipad|Mac|mac/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        }
    };
    if (isMobile.iOS() || isMobile.Android()) {
        if (/iPhone|iPad|iPod|ipad|Mac|mac/.test(ua)) {
            mRomType = 'ios';
        } else {
            mRomType = 'android';
        }
    }
    return mRomType;
}

function getRunRomSystemName() {
    let mRomType = "android";
    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod|ipad|Mac|mac/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        }
    };
    if (isMobile.iOS() || isMobile.Android()) {
        if (/iPhone|iPad|iPod|ipad|Mac|mac/.test(ua)) {
            mRomType = 'ios';
        } else {
            mRomType = 'android';
        }
    }
    return mRomType;
}

/**
 * 游戏下载
 * @returns {*}
 */
function doDownLoad(url, msg) {
    if (url == '' || url == null || url == undefined) {
        $.alert(msg);
    } else {
        window.location.href = url;
    }
}


/**
 * 判断系统类型，加载pc和移动端首页跳转地址
 * @returns {*}
 */
function doGoPage() {
    var type = getModelType();
    if (type == "pc") {
        var getDomain = getHomeUrl(type);
        window.location.href = getDomain;
    }
}

/**
 * 获取系统类型
 * @returns {*}
 */
function getModelType() {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1) {//安卓手机
        return "wap";
    } else {
        return "pc";
    }
}

/**
 * 判断字符串是否存在
 * @param str
 * @returns {boolean}
 */
function isSetString(str) {
    if (str !== null && str !== undefined && str !== '') {
        return true;
    } else {
        return false;
    }
}

