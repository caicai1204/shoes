function $(id) {
    return document.getElementById(id);
}

function Zoom() {
    this.zoomBox = $("zoomBox");
    this.midArea = $("midArea");
    this.midImg = this.midArea.children[0];
    this.zoom = $("zoom");
    this.bigArea = $("bigArea");
    this.bigImg = this.bigArea.children[0];
}
Zoom.prototype.start = function() {
    this.midArea.onmouseover = () => {
        this.zoom.style.display = "block";
        this.bigArea.style.display = "block";
    }
    this.midArea.onmouseout = () => {
        this.zoom.style.display = "none";
        this.bigArea.style.display = "none";
    }
    this.midArea.onmousemove = (e) => {
        let evt = e || event;
        /* let x = evt.offsetX;
        let y = evt.offsetY; */
        let x = evt.pageX - this.zoomBox.offsetLeft;
        let y = evt.pageY - this.zoomBox.offsetTop;

        let l = x - this.zoom.offsetWidth / 2;
        let t = y - this.zoom.offsetHeight / 2;
        // console.log(l, t);

        let mw = this.midArea.offsetWidth - this.zoom.offsetWidth;
        let mh = this.midArea.offsetHeight - this.zoom.offsetHeight;
        // console.log(mw, mh)
        l = l <= 0 ? 0 : l >= mw ? mw : l;
        t = t <= 0 ? 0 : t >= mh ? mh : t;


        this.zoom.style.left = l + "px";
        this.zoom.style.top = t + "px";


        this.bigImg.style.left = -this.zoom.offsetLeft * this.bigImg.offsetWidth / this.midImg
            .offsetWidth + "px";
        this.bigImg.style.top = -this.zoom.offsetTop * this.bigImg.offsetHeight / this.midImg
            .offsetHeight + "px";


    }
}

let zoom = new Zoom();
zoom.start();