<style>
    /* slider */
    .slider a:hover {
      color: #7f8c8d;
      text-decoration: underline;
    }
    .slider .contain {
      width: 100%;
    }
    .slider .row::-webkit-scrollbar { width: 0 !important }
    .slider .row {
      /*overflow: scroll;
      width: 100%;*/
      overflow-x:auto;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
    }
    .slider .row__inner {
      -webkit-transition: 450ms -webkit-transform;
      transition: 450ms -webkit-transform;
      transition: 450ms transform;
      transition: 450ms transform, 450ms -webkit-transform;
      font-size: 0;
      white-space: nowrap;
      margin: 40px 0;
      padding-bottom: 10px;
    }
    .tile {
      position: relative;
      display: inline-block;
      width: 250px;
      height: 140.625px;
      margin-right: 10px;
      font-size: 20px;
      cursor: pointer;
      -webkit-transition: 450ms all;
      transition: 450ms all;
      -webkit-transform-origin: center left;
              transform-origin: center left;
    }
    .tile__img {
      width: 250px;
      height: 140.625px;
      -o-object-fit: cover;
         object-fit: cover;
    }
    .tile__details {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      font-size: 10px;
      opacity: 0;
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,0.9)), to(rgba(0,0,0,0)));
      background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
      -webkit-transition: 450ms opacity;
      transition: 450ms opacity;
    }
    .tile:hover .tile__details {
      opacity: 1;
    }
    .tile__title {
      position: absolute;
      bottom: 0;
      padding: 10px;
    }
    .row__inner:hover {
      -webkit-transform: translate3d(-62.5px, 0, 0);
              transform: translate3d(-62.5px, 0, 0);
    }
    .row__inner:hover .tile {
      opacity: 0.3;
    }
    .row__inner:hover .tile:hover {
      -webkit-transform: scale(1.5);
              transform: scale(1.5);
      opacity: 1;
    }
    .tile:hover ~ .tile {
      -webkit-transform: translate3d(125px, 0, 0);
              transform: translate3d(125px, 0, 0);
    }

    /* endslider */
    /* .list-thumbnail{height:100px !important;} */
    .text-responsive{font-size:calc(100% + 1vw + 1vh);}

    .intercom-composer-popover{
        left:0px !important;
    }
    .intercom-composer-popover.active{
        bottom: 340px !important;
    }
    video {
      width: 100%;
      height: auto;
  }

  .draw{
    transform: translateX(0);
  }
</style>
