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
							card_row = '<tr class="animated fadeIn"><td>' + card.name + '</td><td><small>'+ last_activity.fromNow() + '</small></td><td><span class="pull-right label ' + label + '">' + list.name + '</span></td></tr>';
							jQuery('.trello-features').append(card_row);
						});
					}
				});


			});
		});	
	}

	// Last.fm tracks
	if (jQuery('.lastfm-last-played').length) {
      jQuery.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=mclarenvj&api_key=5b801a66d1a34e73b6e563afc27ef06b&limit=2&format=json&callback=?", function(data) {

          var html = '';

          last_song = data.recenttracks.track[0];

          if (last_song.hasOwnProperty('date')) {
              scrobble_time = moment.unix(last_song.date.uts).fromNow();
          } else {
              scrobble_time = "Now";
          }
          
            html += '<i class="fa fa-headphones"></i> <span><a href="' + last_song.url + '" target="_blank">' + last_song.name + '</a> - ' + last_song.artist['#text'] + '<br /><small>' + scrobble_time + '</small></span>';
          
          jQuery('.lastfm-last-played').html(html);
      }); 
	}
    
});
