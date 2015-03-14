var done = false;
function callback(){
  if (done)
    return;
  done = true;
  console.log("Menlo School Haiku PDF Viewer is ready...");
  $("a").click(
    function(event) {
      var destination = $(this).attr("href");
      var location = $(this).attr("href");
      location = location.substring(1);
      location = location.substring(0, location.indexOf("/"));
      if (destination.indexOf(".pdf") >= 0)
      {
        destination = "https://haiku.menloschool.org" + destination;

        event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open("GET", destination, true);
        console.log(xhr.withCredentials);
        xhr.withCredentials = true;
        xhr.send(null);
        xhr.responseType = "blob";
        xhr.onload = function()
        {
          if (xhr.readyState == 4 && xhr.status == 200)
          {
            newWindow = window.open();
            objectUrl = URL.createObjectURL(xhr.response);
            tmp = "window.document.write(\"<html style='width: 100%; height: 100%'><head><title>PDF Viewer - " + location + "</title></head><body style='margin: 0; width: 100%; height: 100%'><iframe id='frame' width=100% height=100% style='border:none' src='" + objectUrl + "'></iframe></body></html>\");"

            newWindow.document.write(
                  "<script>" +
                    "window.onload = function(e){"  + tmp + "};" +
                    "window.setTimeout(function(e){"  + tmp + "}, 500);" +
                  "</script>"

              );

          }
        };
        humane.log("Loading...");
      }
    })
}

$(callback);
window.setTimeout(callback, 500);
