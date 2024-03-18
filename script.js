$(function () {
  let button = $("#btn1"),
    item = $("#item");
  (list = $("#list")), (tit = $("h1"));
  $(button).click(function () {
    let a = $(item).val();
    $(list).append("<li>" + a + "</li>");
    $(tit).text("A list with Jquery");
  });
  $(item).keyup(function (e) {
    if (e.keyCode == 15) {
      $(button).click();
    }
  });

  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike").fadeOut("slow");
  });

  $(item).focus(function () {
    $(this).val();
  });
  $(list).sortable();
});
