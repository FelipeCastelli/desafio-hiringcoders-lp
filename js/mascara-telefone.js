function fMasc(b, a) {
    obj = b;
    masc = a;
    setTimeout("fMascEx()", 1)
}
function fMascEx() {
    obj.value = masc(obj.value)
}
function mTel(a) {
    a = a.replace(/\D/g, "");
    a = a.replace(/^(\d)/, "($1");
    a = a.replace(/(.{3})(\d)/, "$1) $2");
    if (a.length == 9) {
        a = a.replace(/(.{1})$/, "-$1")
    } else {
        if (a.length == 10) {
            a = a.replace(/(.{2})$/, "-$1")
        } else {
            if (a.length == 11) {
                a = a.replace(/(.{3})$/, "-$1")
            } else {
                if (a.length == 12) {
                    a = a.replace(/(.{4})$/, "-$1")
                } else {
                    if (a.length > 12) {
                        a = a.replace(/(.{4})$/, "-$1")
                    }
                }
            }
        }
    }
    return a
}
function mNum(a) {
    a = a.replace(/\D/g, "");
    return a
}
         