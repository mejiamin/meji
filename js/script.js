$(function () {
    var $window = $(window);

    var $pageHeader = $('.page-header');
    var $endTarget = $('.target').offset().top - $window.height() + 150;
    console.log($endTarget);

    var $pageTarget = $('.target');
    var $endSkills = $('.skills').offset().top - $window.height() - 200;

    var $pageSkills = $('.skills');
    var $endFooter = $('.page-footer').offset().top - $window.height() - 200;
    console.log($endFooter);

    var $pageFooter = $('.page-footer');
    var $endZone = $('.page-footer').offset().top - 200;
    console.log($endZone);


    $window.on('scroll', function () {
        if ($endTarget < $window.scrollTop()) {
            $pageHeader.css({
                'filter': 'blur(25px)',
                '-webkit-filter': 'blur(25px)',
                '-moz-filter': 'blur(25px)',
                '-ms-filter': 'blur(25px)',
                '-o-filter': 'blur(25px)',

                'scale': '1 0',
                '-webkit-scale': '1 0',
                '-moz-scale': '1 0',
                '-ms-scale': '1 0',
                '-o-scale': '1 0',

                'transform-origin': 'top',
                '-webkit-transform-origin': 'top',
                '-moz-transform-origin': 'top',
                '-ms-transform-origin': 'top',
                '-o-transform-origin': 'top',

                'transition': 'filter 0.2s linear, scale 0.25s linear',
                '-webkit-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-moz-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-ms-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-o-transition': 'filter 0.2s linear, scale 0.25s linear',
            })
        } else {
            $pageHeader.css({
                'filter': 'blur(0)',
                '-webkit-filter': 'blur(0)',
                '-moz-filter': 'blur(0)',
                '-ms-filter': 'blur(0)',
                '-o-filter': 'blur(0)',

                'scale': '1 1',
                '-webkit-scale': '1 1',
                '-moz-scale': '1 1',
                '-ms-scale': '1 1',
                '-o-scale': '1 1',
            });
        }

        if ($endSkills < $window.scrollTop()) {
            $pageTarget.css({
                'filter': 'blur(0)',
                '-webkit-filter': 'blur(0)',
                '-moz-filter': 'blur(0)',
                '-ms-filter': 'blur(0)',
                '-o-filter': 'blur(0)',

                'scale': '1 1',
                '-webkit-scale': '1 1',
                '-moz-scale': '1 1',
                '-ms-scale': '1 1',
                '-o-scale': '1 1',

                'transition': 'filter 0.2s linear, scale 0.25s linear',
                '-webkit-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-moz-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-ms-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-o-transition': 'filter 0.2s linear, scale 0.25s linear',
            })
        } else {
            $pageTarget.css({
                'filter': 'blur(25px)',
                '-webkit-filter': 'blur(25px)',
                '-moz-filter': 'blur(25px)',
                '-ms-filter': 'blur(25px)',
                '-o-filter': 'blur(25px)',

                'scale': '1 0',
                '-webkit-scale': '1 0',
                '-moz-scale': '1 0',
                '-ms-scale': '1 0',
                '-o-scale': '1 0',
            });
        }

        if ($endFooter < $window.scrollTop()) {
            $pageSkills.css({
                'filter': 'blur(0)',
                '-webkit-filter': 'blur(0)',
                '-moz-filter': 'blur(0)',
                '-ms-filter': 'blur(0)',
                '-o-filter': 'blur(0)',

                'scale': '1 1',
                '-webkit-scale': '1 1',
                '-moz-scale': '1 1',
                '-ms-scale': '1 1',
                '-o-scale': '1 1',

                'transition': 'filter 0.2s linear, scale 0.25s linear',
                '-webkit-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-moz-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-ms-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-o-transition': 'filter 0.2s linear, scale 0.25s linear',
            })
        } else {
            $pageSkills.css({
                'filter': 'blur(25px)',
                '-webkit-filter': 'blur(25px)',
                '-moz-filter': 'blur(25px)',
                '-ms-filter': 'blur(25px)',
                '-o-filter': 'blur(25px)',

                'scale': '1 0',
                '-webkit-scale': '1 0',
                '-moz-scale': '1 0',
                '-ms-scale': '1 0',
                '-o-scale': '1 0',
            });
        }

        if ($endZone < $window.scrollTop()) {
            $pageFooter.css({
                'filter': 'blur(0)',
                '-webkit-filter': 'blur(0)',
                '-moz-filter': 'blur(0)',
                '-ms-filter': 'blur(0)',
                '-o-filter': 'blur(0)',

                'scale': '1 1',
                '-webkit-scale': '1 1',
                '-moz-scale': '1 1',
                '-ms-scale': '1 1',
                '-o-scale': '1 1',

                'transition': 'filter 0.2s linear, scale 0.25s linear',
                '-webkit-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-moz-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-ms-transition': 'filter 0.2s linear, scale 0.25s linear',
                '-o-transition': 'filter 0.2s linear, scale 0.25s linear',
            })
        } else {
            $pageFooter.css({
                'filter': 'blur(25px)',
                '-webkit-filter': 'blur(25px)',
                '-moz-filter': 'blur(25px)',
                '-ms-filter': 'blur(25px)',
                '-o-filter': 'blur(25px)',

                'scale': '1 0',
                '-webkit-scale': '1 0',
                '-moz-scale': '1 0',
                '-ms-scale': '1 0',
                '-o-scale': '1 0',
            });
        }
    });

});