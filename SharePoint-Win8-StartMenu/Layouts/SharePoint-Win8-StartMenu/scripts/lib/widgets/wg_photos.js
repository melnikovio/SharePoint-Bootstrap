function WgPhotosCreate (element){
    $.widget ("custom.photos", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
        }
    });

    element.photos({ name: "Фотографии"});

    CreatePhotosSlider(element);

    require(['jssormain', 'jssorslider'], function() {
        LoadPhotos(element);
    });
}

function CreatePhotosSlider(element) {
    var slider = "<div id='slider2_container' style='padding: 0px 0px 0px 0px; position: relative; top: 0px; left: 0px; width: 600px; height: 300px; overflow: hidden; margin: 0 auto !important; '> \
    <div u='loading' style='position: absolute; top: 0px; left: 0px;'><div style='filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block; background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;'></div><div style='position: absolute; display: block; background: url('/_Layouts/15/SPMainApp/images/img/loading.gif') no-repeat center center; top: 0px; left: 0px;width: 100%;height:100%;'></div></div>\
    <div u='slides' style='cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px; overflow: hidden;'><div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/002.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-002.jpg' /></div> <div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/003.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-003.jpg' /></div>\
    <div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/004.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-004.jpg' /></div><div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/005.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-005.jpg' /></div><div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/006.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-006.jpg' /></div><div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/007.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-007.jpg' /></div>\
    <div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/008.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-008.jpg' /></div><div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/009.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-009.jpg' /></div><div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/010.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-010.jpg' /></div><div><img u='image' src='/_Layouts/15/SPMainApp/images/img/photography/011.jpg' /><img u='thumb' src='/_Layouts/15/SPMainApp/images/img/photography/thumb-011.jpg' /></div></div>\
    <span u='arrowleft' class='jssora02l' style='width: 55px; height: 55px; top: 123px; left: 8px;'></span><span u='arrowright' class='jssora02r' style='width: 55px; height: 55px; top: 123px; right: 8px'></span><div u='thumbnavigator' class='jssort03' style='position: absolute; width: 600px; height: 60px; left:0px; bottom: 0px;'><div style=' background-color: #000; filter:alpha(opacity=30); opacity:.3; width: 100%; height:100%;'></div><div u='slides' style='cursor: move;'><div u='prototype' class='p' style='POSITION: absolute; WIDTH: 62px; HEIGHT: 32px; TOP: 0; LEFT: 0;'><div class=w><div u='thumbnailtemplate' style=' WIDTH: 100%; HEIGHT: 100%; border: none;position:absolute; TOP: 0; LEFT: 0;'></div></div><div class=c style='POSITION: absolute; BACKGROUND-COLOR: #000; TOP: 0; LEFT: 0'></div></div></div></div><a style='display: none' href='http://www.jssor.com'>bootstrap carousel</a></div>";

    element.html(slider);

    LoadPhotos(this.element);
}

function LoadPhotos () {
    var options = {
        $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
        $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        },

        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

            $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
            $AutoCenter: 3,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
            $Lanes: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
            $SpacingX: 3,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
            $SpacingY: 3,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
            $DisplayPieces: 9,                              //[Optional] Number of pieces to display, default value is 1
            $ParkingPosition: 260,                          //[Optional] The offset position to park thumbnail
            $Orientation: 1,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
            $DisableDrag: false                            //[Optional] Disable drag or not, default value is false
        }
    };

    var jssor_slider2 = new $JssorSlider$("slider2_container", options);
    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        var parentWidth = jssor_slider2.$Elmt.parentNode.clientWidth;
        if (parentWidth)             {
            console.log(parentWidth);
            jssor_slider2.$ScaleWidth(Math.min(parentWidth));
            jssor_slider2.$ScaleHeight(260);
        }
        else
            window.setTimeout(ScaleSlider, 30);

    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end

}
