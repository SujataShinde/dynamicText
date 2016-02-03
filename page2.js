
var myFirebaseRef = new Firebase("https://dynamicdemo.firebaseio.com/");
	var hashid=window.location.hash.substring(1);
	var newsText;
		if(hashid=="news1")
		{
			  myFirebaseRef.child("key4").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}
		else if(hashid=="news2")
		{
			  myFirebaseRef.child("key1").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}
		else if(hashid=="news3")
		{
			  myFirebaseRef.child("key2").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}
		else if(hashid=="news4")
		{
			  myFirebaseRef.child("key3").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}
