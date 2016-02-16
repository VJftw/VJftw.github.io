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

    if (jQuery('a[data-toggle="collapse"]').length) {
        jQuery('.collapse').on('show.bs.collapse', function() {
            chevron = jQuery(this).parent().find('a[data-toggle="collapse"] i');
            chevron.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        });
        jQuery('.collapse').on('hide.bs.collapse', function() {
            chevron = jQuery(this).parent().find('a[data-toggle="collapse"] i');
            chevron.removeClass('fa-chevron-up').addClass('fa-chevron-down');
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
    if (jQuery('.lastfm-track').length) {
      jQuery.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=mclarenvj&api_key=5b801a66d1a34e73b6e563afc27ef06b&limit=2&format=json&callback=?", function(data) {

          last_song = data.recenttracks.track[0];

          if (last_song.hasOwnProperty('date')) {
              scrobble_time = moment.unix(last_song.date.uts).fromNow();
          } else {
              scrobble_time = "Now";
          }

          jQuery('.lastfm-track').html(last_song.name);
          jQuery('.lastfm-track').parent().attr('href', last_song.url);
          jQuery('.lastfm-artist').html(last_song.artist['#text']);
          jQuery('.lastfm-timestamp').html(scrobble_time);
          jQuery('.lastfm-icon').removeClass('fa-spin').removeClass('fa-refresh').addClass('fa-headphones');
      });
  }

    // Jenkins CI last build
    if (jQuery('.travis-repo').length) {

        jQuery.getJSON('https://ci.vjpatel.me/api/json?tree=jobs[displayNameOrNull,url,lastBuild[timestamp,result]]&pretty=true', function(data) {

            var latestJob;
            jQuery.each(data.jobs, function(i, item) {
                if (item.displayNameOrNull) {
                    if (!latestJob) {
                        latestJob = item;
                    } else if (latestJob.lastBuild.timestamp < item.lastBuild.timestamp) {
                        latestJob = item;
                    }
                    
                }
            });

            last_build_time = moment(latestJob.lastBuild.timestamp).fromNow();

            switch (latestJob.lastBuild.result) {
                case "SUCCESS":
                label_status = 'success';
                text = "Success";
                break;
                default:
                label_status = 'danger';
                text = "Failed";
            }

            jQuery('.travis-repo').html(latestJob.displayNameOrNull);
            jQuery('.travis-repo').parent().attr('href', latestJob.url);
            jQuery('.travis-timestamp').html(last_build_time);
            jQuery('.travis-status').addClass('label-' + label_status).html("Build "+text);
            jQuery('.travis-icon').removeClass('fa-spin').removeClass('fa-refresh').addClass('fa-cogs');
        });
    }

});
