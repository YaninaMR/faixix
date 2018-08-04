function profileContact(params) {
var useruid = window.location.hash.substring(1);
  // console.log(useruid); hace referencia al nombre que se da click

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var containerContact = $('#follower-other');
			firebase.database().ref('/user/' + useruid + '/data').on('value', function(snapshot) {
				var userPhoto = $('<img>', {
				  'class': 'responsive-img circle user img-cont',
				  'src': snapshot.val().photo
				});

				var pName = $('<h3/>', {
				  'class': 'user-name-profile',
				}).text(snapshot.val().name);

				$('#user-photo').append(userPhoto);
				$('#user-name').append(pName);
			});

      });
    }
  });
}	
	