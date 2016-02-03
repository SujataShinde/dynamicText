	var myFirebaseRef = new Firebase("https://dynamicdemo.firebaseio.com/");

			myFirebaseRef.child("key4").on("value", function(snapshot) {
			var tex1 = snapshot.val();  
			document.getElementById("news1").innerHTML = tex1 +'<a href="readmore.html#news1">Read More</a>';
		});
			myFirebaseRef.child("key1").on("value", function(snapshot) {
			var tex2 = snapshot.val();  
			document.getElementById("news2").innerHTML = tex2 +'<a href="readmore.html#news2">Read More</a>';
		});
			myFirebaseRef.child("key2").on("value", function(snapshot) {
			var tex3 = snapshot.val(); 
			document.getElementById("news3").innerHTML = tex3 +'<a href="readmore.html#news3">Read More</a>';
		});
			myFirebaseRef.child("key3").on("value", function(snapshot) {
			var tex4 = snapshot.val();  
			document.getElementById("news4").innerHTML = tex4 +'<a href="readmore.html#news4">Read More</a>';
		});
			
	