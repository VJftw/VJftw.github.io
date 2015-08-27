// vj-patel.js
jQuery(function () {

	// Index Page
	if (jQuery('.short-about div h1').length) {
		greeting = jQuery('.short-about div h1');
	    intro = jQuery('.short-about div h2');
	    recent_posts = jQuery('#recent-posts');

	    greeting.removeClass('hidden').textillate({ in: { effect: 'fadeIn' } });
	    intro.removeClass('hidden').textillate({ 
	        initialDelay: 500, 
	        in: { 
	          effect: 'fadeIn',
	          delay: 50
	        }, 
	        type: 'word',
	        callback: function() {
	          // recent_posts.show().addClass('animated fadeIn');
	        }   
	    });	
	}

	// Projects
	if (jQuery('.trello-features').length) {

		jQuery.getScript( "https://api.trello.com/1/client.js?key=4b1c19d05b3ada3ae1fbade211cbdb3b" ).done(function( script, textStatus ) {

			board_id = jQuery('.trello-features').attr('board');

    		Trello.get('/boards/' + board_id + '/lists', { cards: 'open' }, function(responseJSON) {
				html = "";

				jQuery('.trello-features').html(html);
				responseJSON.forEach(function(list) {
					if (list.name != 'preBacklog') {

						switch (list.name) {
							case 'Deployed':
								label = 'label-success';
								break;
							case 'Implement':
								label = 'label-primary';
								break;
							case 'Backlog':
								label = 'label-info';
								break;
							case 'Specify':
								label = 'label-warning';
								break;
							default:
								label = 'label-default';
						}
				
						list.cards.forEach(function(card) {
							last_activity = moment(card.dateLastActivity);
							card_row = '<tr class="animated fadeIn"><td>' + card.name + '</td><td>'+ last_activity.fromNow() + '</td><td><span class="pull-right label ' + label + '">' + list.name + '</span></td></tr>';
							jQuery('.trello-features').append(card_row);
						});
					}
				});


			});
		});	
	}

	// Last.fm tracks
	if (jQuery('.lastfm-last-played').length) {
      jQuery.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=mclarenvj&api_key=5b801a66d1a34e73b6e563afc27ef06b&limit=2&format=json&callback=?", function(data) {

          var html = ''; // we declare the variable that we'll be using to store our information
          var counter = 1; // we declare a counter variable to use with the if statement in order to limit the result to 1
          jQuery.each(data.recenttracks.track, function(i, item) {
              if(counter == 1) {
                  html += '<i class="fa fa-headphones"></i> <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span>';
              } // close the if statement
              counter++ // add 1 to the counter variable each time the each loop runs
          }); // close each loop
          jQuery('.lastfm-last-played').html(html); // print the information to the document - here I look for the h5 tag inside the div with a class of 'listening-to' and use the jQuery append method to insert the information we've stored in the html variable inside the h5 tag.
      }); // close JSON call
	}
    
});