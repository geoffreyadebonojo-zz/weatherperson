// username: example@mail.com
// password: testpassword123
// api-key: b7808ade-0e79-4992-bca2-38347aa2a1e3

console.log("script.js loaded");

$("#button-1").click(function(){
  $.ajax({
    url: "https://dry-hollows-79406.herokuapp.com/api/v1/forecast",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    success: function(result){
      $("#div1").html(result);
    }
  });
});

$("#button-2").click(function(){
  $.ajax({
    url: "https://dry-hollows-79406.herokuapp.com/api/v1/favorites",
    dataType: "json",
    type: "get",
    contentType: "application/json",
    data: { api_key: "b7808ade-0e79-4992-bca2-38347aa2a1e3" },
    success: function( data, textStatus, errorThrown ){
      console.log( data );
      document.getElementById("div1").innerHTML = "Hi yall";
    }
  });
}));

$("#button-3").click(function(){
  $.ajax({
    url: "https://dry-hollows-79406.herokuapp.com/api/v1/favorites",
    dataType: "json",
    type: "post",
    contentType: "application/json",
    data:
    {
      api_key: "b7808ade-0e79-4992-bca2-38347aa2a1e3",
      location: "Portland, OR"
    },
    success: function( data, textStatus, errorThrown ){
      console.log( textStatus );
    }
  });
});
