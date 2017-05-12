/**
 * Created by marku on 12.05.2017.
 */
function auth()
{
    var password = document.querySelector("#password").value;
    var remember = document.querySelector('#remember_me').value;

    if(password == undefined || password == "")
        return false;

    // alert('PW' + password + ", rem: " + remember);

    return true;
}
