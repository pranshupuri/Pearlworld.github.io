function preload() {
    imageObj = new Image();
    images = new Array();
    images[0] = 'images/1.jpg';
    images[1] = 'images/2.jpg';
    images[2] = 'images/3.jpg';
    images[3] = 'images/4.jpg';
    images[4] = 'images/logo.png';
    images[5] = 'images/logoh.png';
    images[6] = 'images/trans.png';
    images[7] = 'images/social/fb.png';
    images[8] = 'images/social/fbh.png';
    images[9] = 'images/social/tw.png';
    images[10] = 'images/social/twh.png';
    images[11] = 'images/social/yt.png';
    images[12] = 'images/social/yth.png';
    images[13] = 'images/social/pi.png';
    images[14] = 'images/social/pih.png';
    images[15] = 'images/social/insta.png';
    images[16] = 'images/social/instah.png';
    images[17] = 'images/social/in.png';
    images[18] = 'images/social/inh.png';
    images[19] = 'images/social/gp.png';
    images[20] = 'images/social/gph.png';

    for (i = 0; i <= 20; i++)
        imageObj.src = images[i];
}