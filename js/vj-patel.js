// vj-patel.js
jQuery(function () {

    // Index Page
    if (jQuery('.greeting').length) {
        jQuery(".greeting")
        greeting = jQuery('.greeting');
        intro = jQuery('.short-about');
        moreInfo = jQuery('.long-about');

        greeting.typed({
            strings: ["Hi,"],
            typeSpeed: 0,
            showCursor: false,
            callback: function() {
                intro.typed({
                    strings: ["I'm an MSc Computing and Security student at King's College, London who explores Cryptography, ^350 Dev Ops ^250 and the Internet of Things."],
                    typeSpeed: 10,
                    showCursor: false,
                    callback: function() {
                        moreInfo.typed({
                            strings: ['You can also find me lost space <i class="fa fa-rotate-270 fa-space-shuttle"></i>, ^300 raving at a festival <i class="fa fa-music"></i> ^300 or buried in a book <i class="fa fa-book"></i>.'],
                            typeSpeed: 10,
                            showCursor: false
                        });
                    }
                });
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

        function updateLastFM() {
            jQuery.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=mclarenvj&api_key=5b801a66d1a34e73b6e563afc27ef06b&limit=2&format=json&callback=?", function(data) {

                last_song = data.recenttracks.track[0];

                if (last_song.hasOwnProperty('date')) {
                    scrobble_time = moment.unix(last_song.date.uts).fromNow();
                } else {
                    scrobble_time = "Now";
                }

                jQuery('.lastfm-track').html(last_song.name);
                jQuery('.lastfm-track').parent().attr('href', "http://last.fm/user/mclarenvj");
                jQuery('.lastfm-artist').html(last_song.artist['#text']);
                jQuery('.lastfm-timestamp').html(scrobble_time);
                jQuery('.lastfm-icon').removeClass('fa-spin').removeClass('fa-refresh').addClass('fa-headphones');
            });
        }

        updateLastFM();
        setInterval(updateLastFM, 60*1000);
    }

    // Jenkins CI last build
    if (jQuery('.travis-repo').length) {
        function setLastBuild(latestJob) {
            if (latestJob) {
                last_build_time = moment(latestJob.lastCompletedBuild.timestamp).fromNow();

                switch (latestJob.lastCompletedBuild.result) {
                    case "SUCCESS":
                    label_status = 'success';
                    text = "Build Success";
                    break;
                    case null:
                    label_status = 'info';
                    text = "Building";
                    break;
                    default:
                    label_status = 'danger';
                    text = "Build Failed";
                }

                jQuery('.travis-repo').html(latestJob.displayNameOrNull);
                jQuery('.travis-repo').parent().attr('href', latestJob.url);
                jQuery('.travis-timestamp').html(last_build_time);
                jQuery('.travis-status').addClass('label-' + label_status).html(text);
                jQuery('.travis-icon').removeClass('fa-spin').removeClass('fa-refresh').addClass('fa-cogs');
            }
        }

        // Get list of jobs
        function updateBuildStatus() {
            jQuery.getJSON('https://ci.vjpatel.me/api/json?tree=jobs[displayNameOrNull,url,lastCompletedBuild[timestamp,result]]', function(data) {
                var latestJob;
                jQuery.each(data.jobs, function(i, item) {

                    if (item.displayNameOrNull) { // has display name
                        if (item.lastCompletedBuild) {
                            if (!latestJob) {
                                latestJob = item;
                            } else if (latestJob.lastCompletedBuild.timestamp < item.lastCompletedBuild.timestamp) {
                                latestJob = item;
                            }
                        } else { // use master or develop branch
                            jQuery.getJSON(item.url + '/branch/develop/api/json?tree=url,lastCompletedBuild[timestamp,result]', function(data) {

                                data.displayNameOrNull = item.displayNameOrNull;
                                if (!latestJob && data.lastCompletedBuild) {
                                    latestJob = data;
                                } else if (data.lastCompletedBuild && latestJob.lastCompletedBuild.timestamp < data.lastCompletedBuild.timestamp) {
                                    latestJob = data;
                                } else {
                                    jQuery.getJSON(item.url + '/branch/master/api/json?tree=url,lastCompletedBuild[timestamp,result]', function(data) {

                                        data.displayNameOrNull = item.displayNameOrNull;
                                        if (!latestJob && data.lastCompletedBuild) {
                                            latestJob = data;
                                        } else if (data.lastCompletedBuild && latestJob.lastCompletedBuild.timestamp < data.lastCompletedBuild.timestamp) {
                                            latestJob = data;
                                        }
                                        setLastBuild(latestJob);
                                    });
                                }
                                setLastBuild(latestJob);
                            });

                        }
                    }
                });
                setLastBuild(latestJob);
            });
        }

        updateBuildStatus();
        setInterval(updateBuildStatus, 120*1000);
    }

});
