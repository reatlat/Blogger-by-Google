/* Anon icon */
  if(document.getElementsByClassName == undefined) {
    var anons = $(&#39;#comments&#39;).find(&#39;.avatar-image-container&#39;)
  } else {
    var anons = document.getElementById(&#39;comments&#39;).getElementsByClassName(&#39;avatar-image-container&#39;)
  }
  for (key in anons) {
    var anon = anons[key]
    if (anon.innerHTML) {
      anon.innerHTML = anon.innerHTML.replace(/http:\/\/img1.blogblog.com\/img\/anon36.png/g, &#39;http://2.bp.blogspot.com/-cTMxBz-GpFs/VIzgcQ_oC0I/AAAAAAAAILQ/qSsI0i2IbgU/s1600/Anonymous.png&#39;)
    }
  }

/* blogger and g+ icon */
  if(document.getElementsByClassName == undefined) {
    var anons = $(&#39;#comments&#39;).find(&#39;.avatar-image-container&#39;)
  } else {
    var anons = document.getElementById(&#39;comments&#39;).getElementsByClassName(&#39;avatar-image-container&#39;)
  }
  for (key in anons) {
    var anon = anons[key]
    if (anon.innerHTML) {
      anon.innerHTML = anon.innerHTML.replace(/http:\/\/img2.blogblog.com\/img\/b36-rounded.png/g, &#39;http://4.bp.blogspot.com/-CrsQjrjJlzs/VI1UdMJ_MBI/AAAAAAAAILk/F8dV0RBfkEU/s1600/gplus.png&#39;)
    }
  }

/* openid icon */
  if(document.getElementsByClassName == undefined) {
    var anons = $(&#39;#comments&#39;).find(&#39;.avatar-image-container&#39;)
  } else {
    var anons = document.getElementById(&#39;comments&#39;).getElementsByClassName(&#39;avatar-image-container&#39;)
  }
  for (key in anons) {
    var anon = anons[key]
    if (anon.innerHTML) {
      anon.innerHTML = anon.innerHTML.replace(/http:\/\/img1.blogblog.com\/img\/openid36-rounded.png/g, &#39;http://2.bp.blogspot.com/-8iuXOtfZRPo/VI1Uc2edXUI/AAAAAAAAILg/kz7TKy2ciOg/s1600/openid.png&#39;)
    }
  }
