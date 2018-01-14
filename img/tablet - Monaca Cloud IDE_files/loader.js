/** MonacaIDE JavaScript & Resources Loader
 *
 * This file depend on "$script.js", "jquery.js" and "spin.js".
 */

var load = (function() {
    var i18n = {
        ja : {
            IMAGES : '画像',
            CORE_FILES : 'コアファイル',
            GUI_COMPONENTS : 'GUIコンポーネント',
            IDE_COMPONENTS : 'その他のコンポーネント',
            OTHER_RESOURCES : 'その他のリソース',
            EDITOR : 'エディタ',
            LOADING_MESSAGE :  '<span id="ide-initial-loading-msg-detail">ファイル</span>を読込中...' 
        },
        en : {
            IMAGES : ' Images',
            CORE_FILES : ' Core Files',
            GUI_COMPONENTS : ' GUI Components',
            IDE_COMPONENTS : ' Other Components',
            OTHER_RESOURCES : ' Other Resources',
            EDITOR : ' Editor',
            LOADING_MESSAGE : 'Loading<span id="ide-initial-loading-msg-detail"></span>...'
        }
    };

    function load(options) {
        options = options || {};
        var lang = options.lang == 'ja' ? 'ja' : 'en';
        var boot = options.boot || function() {};
        var text = i18n[lang];

        $script(
        window.loaderConf.Stage1    
        , function() {
            updateLoadingTarget(text.EDITOR);
            $script(window.loaderConf.Stage2, function() {
                updateLoadingTarget(text.GUI_COMPONENTS);
                $script(window.loaderConf.Stage3, function() {
                    $script(window.loaderConf.Stage4, function() {
                        updateLoadingTarget(text.IDE_COMPONENTS);
                        $script(window.loaderConf.Stage5, function() {
                            updateLoadingTarget(text.IDE_COMPONENTS);
                            $script(window.loaderConf.Stage6, function() {
                                updateLoadingTarget(text.IDE_COMPONENTS);
                                $script(window.loaderConf.Stage7, function() {
                                    updateLoadingTarget(text.IMAGES);
                                    hideIndicator();
                                    boot();
                                    loadImages(function() {
                                        //updateLoadingTarget(text.OTHER_RESOURCES);
                                        //setTimeout(function() {
                                        //}, 500);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        $(function() {
            showIndicator(text);
            updateLoadingTarget(text.CORE_FILES);
        });
    }

    function updateLoadingTarget(msg) {
        $('#ide-initial-loading-msg-detail').text(' ' + msg);
    }

    function showIndicator(text) {
        var opts = {
            lines: 13, 
            length: 18, 
            width: 6,
            radius: 14, 
            rotate: 0,
            color: '#666',
            speed: 1, 
            trail: 60,
            shadow: false, 
            hwaccel: true,
            className: 'spinner',
            zIndex: 200,
            top: 'auto',
            left: 'auto'
        };

        $(document.body).append($('<div id="ide-initial-loading-background" />'));
        $(document.body).append($('<div id="ide-initial-loading" />').html(
            '<div id="ide-initial-loading-inner"></div>' +
            '<div id="ide-initial-loading-msg">' + text.LOADING_MESSAGE+ '</div>'
        ));

        new Spinner(opts).spin($('#ide-initial-loading-inner')[0]);
        $('#ide-initial-loading').css({opacity : 1.0}).show();
    }

    function hideIndicator() {
        var top = $("#ide-initial-loading").position().top;
        $("#ide-initial-loading").animate({
            opacity : 0
        }, {
            duration : 300, 
            complete : function() {
                $("#ide-initial-loading").hide();
            },
            step : function() {
                top += 0.5;
                $(this).css({top : Math.round(top)});
            }
        });
        $("#ide-initial-loading-background").hide();
    }

    function loadImages(f) {
        var paths = window.loaderConf.PreloadImages;
        var count = paths.length;
        var len = count;

        for (var i = 0; i < len; i++) {
            var image = new Image();
            image.src = paths[i];
            image.onload = function() {
                count--;
                if (count == 0) {
                    f();
                }
            };
            image.onerror = function() {
                console.log("image loading fail: " + this.src);
                this.onload();
            };
        }
    }

    return load;
})();
