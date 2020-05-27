var Main = {
  oXHttpReq: null,
  vid: null,

  DocOnLoad: function () {
    try {
      if (document != null && document.body != null && document.location != null) {
        vid = Main.getVid();
      }
      return true;
    }
    catch (e) {
      console.log("error ", e);
    }
  },

  WaitLoadDom: function () {
    //#DwsldCn > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a
    if (document.querySelector("a.Button.Sm.fa-download") !== null) {
      //alert(e);
      //console.log(e);
      Main.DocOnLoad();
    } else {
      //alert("not found");
      console.log("not found");
      setTimeout(function () {
        Main.WaitLoadDom();
      }, 500);
    }
  },

  getVid: function () {
    var dirs = document.querySelectorAll("a.Button.Sm.fa-download");

    var p = document.createElement("p");
    for (var i = 0; i < dirs.length; i++) {

      var s = dirs[i].parentNode.parentNode.firstChild.innerHTML
      var href = dirs[i].getAttribute("href");

      href = unescape(href.split("=")[1]);

      console.log(s, href);

      p.innerHTML += `<a class="Button Sm fa-download" href=${href} style="min-width: 120px; margin: 2px">${s}</a> ` + ((i + 1 < dirs.length) ? '<br>' : '')
    }

    p.setAttribute("style", "text-align: center; margin: 2px");

    document.body.insertBefore(p, document.body.childNodes[0]);
    return true;
  }

};

if (document.location.toString().indexOf("animeflv.net/ver/", 0) !== -1)
  // if(document.location.toString().indexOf("animeflv.net",0) !== -1)
  Main.WaitLoadDom();
