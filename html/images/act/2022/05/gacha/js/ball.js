/*
Copyright (c) 2013 dissimulate at codepen

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/

/*document.getElementById('close').onmousedown = function(e) {
  e.preventDefault();
  document.getElementById('info').style.display = 'none';
  return false;
};*/

var NUM_BALLS = 50,
    LIMIT_BALLS = 30,
    DAMPING = 0.7,
    GRAVITY = 0.6,
    MOUSE_SIZE = 50,
    SPEED = 1;



var canvas, ctx, TWO_PI = Math.PI * 2, balls = [], mouse = {down:false,x:0,y:0};

window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };

function rand (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Ball = function(x, y, radius, t) {

    this.x = x;
    this.y = y;

    this.px = x;
    this.py = y;

    this.fx = 0;
    this.fy = 0;

    this.radius = radius;

    this.tmp = t;

    
    // this.angle = angle;
    // this.a = a;
    // console.log('this.radius: '+ this.radius);
    // console.log('this.angle: '+ this.angle);
};

Ball.prototype.apply_force = function(delta) {

    delta *= delta;

    this.fy += GRAVITY;

    this.x += this.fx * delta;
    this.y += this.fy * delta;

    this.fx = this.fy = 0;


};

Ball.prototype.verlet = function() {

    var nx = (this.x * 2) - this.px;
    var ny = (this.y * 2) - this.py;
    

    this.px = this.x;
    this.py = this.y;
    

    this.x = nx;
    this.y = ny;
    
};

Ball.prototype.draw = function(ctx) {
    var RAD = Math.PI / 180;
    // this.angle = rand(0, 360);
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
    // ctx.fill();
    // var ballimg = [];
    // console.log('this.tmp: '+ this.tmp);
    if (window.innerWidth > 1200) {
        var ballimg = document.getElementById('ballimg' + this.tmp );
    } else {
        var ballimg = document.getElementById('ballimg' + this.tmp + '_05x');
    }

    
    
    // var ballimg2 = document.getElementById('ballimg2');
    // var ballimg3 = document.getElementById('ballimg3');
    
    // var i = rand(1,3);
    

    var x = this.x - this.radius;
    var y = this.y - this.radius;
    


    // ctx.save();
    // ctx.translate(x , y);
    // ctx.rotate(this.angle*RAD);
    ctx.drawImage(ballimg, x, y);
    // ctx.drawImage(ballimg2, x, y);
    // ctx.drawImage(ballimg3, x, y);

    // ctx.translate(this.x, this.y);
    
        
    // ctx.restore();

};

//---------------------------------------

var resolve_collisions = function(ip) {

    var i = balls.length;

    while (i--) {

        var ball_1 = balls[i];

        if (mouse.down) {

            var diff_x = ball_1.x - mouse.x;
            var diff_y = ball_1.y - mouse.y;
            var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
            var real_dist = dist - (ball_1.radius + MOUSE_SIZE);

            if (real_dist < 0) {

                var depth_x = diff_x * (real_dist / dist);
                var depth_y = diff_y * (real_dist / dist);

                ball_1.x -= depth_x * 0.005;
                ball_1.y -= depth_y * 0.005;
            }
        }

        var n = balls.length;

        while (n--) {

            if (n == i) continue;
          
            var ball_2 = balls[n];

            var diff_x = ball_1.x - ball_2.x;
            var diff_y = ball_1.y - ball_2.y;

            var length    = diff_x * diff_x + diff_y * diff_y;
            var dist      = Math.sqrt(length);
            var real_dist = dist - (ball_1.radius + ball_2.radius);

            if (real_dist < 0) {

                var vel_x1 = ball_1.x - ball_1.px;
                var vel_y1 = ball_1.y - ball_1.py;
                var vel_x2 = ball_2.x - ball_2.px;
                var vel_y2 = ball_2.y - ball_2.py;

                var depth_x = diff_x * (real_dist / dist);
                var depth_y = diff_y * (real_dist / dist);

                ball_1.x -= depth_x * 0.5;
                ball_1.y -= depth_y * 0.5;
                
                ball_2.x += depth_x * 0.5;
                ball_2.y += depth_y * 0.5;

                if (ip) {

                    var pr1 = DAMPING * (diff_x*vel_x1+diff_y*vel_y1) / length,
                        pr2 = DAMPING * (diff_x*vel_x2+diff_y*vel_y2) / length;

                    vel_x1 += pr2 * diff_x - pr1 * diff_x;
                    vel_x2 += pr1 * diff_x - pr2 * diff_x;

                    vel_y1 += pr2 * diff_y - pr1 * diff_y;
                    vel_y2 += pr1 * diff_y - pr2 * diff_y;

                    ball_1.px = ball_1.x - vel_x1;
                    ball_1.py = ball_1.y - vel_y1;

                    ball_2.px = ball_2.x - vel_x2;
                    ball_2.py = ball_2.y - vel_y2;
                }
            }
        }
    }
};

var check_walls = function() {

    var i = balls.length;

    while (i--) {

        var ball = balls[i];

        if (ball.x < ball.radius) {

            var vel_x = ball.px - ball.x;
            ball.x = ball.radius;
            ball.px = ball.x - vel_x * DAMPING;

        } else if (ball.x + ball.radius > canvas.width) {

            var vel_x = ball.px - ball.x;
            ball.x = canvas.width - ball.radius;
            ball.px = ball.x - vel_x * DAMPING;
        }

        if (ball.y < ball.radius) {

            var vel_y = ball.py - ball.y;
            ball.y = ball.radius;
            ball.py = ball.y - vel_y * DAMPING;

        } else if (ball.y + ball.radius > canvas.height) {

            var vel_y = ball.py - ball.y;
            ball.y = canvas.height - ball.radius;
            ball.py = ball.y - vel_y * DAMPING;
        }
    }
};

var update = function() {

    //var time = new Date().getTime();

    var iter = 6;

    var delta = SPEED / iter;

    while (iter--) {

        var i = balls.length;

        while (i--) {
            
            balls[i].apply_force(delta);
            balls[i].verlet();
        }

        resolve_collisions();
        check_walls();

        var i = balls.length;
        while (i--) balls[i].verlet();

        resolve_collisions(1);
        check_walls();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(27,155,244,0.3)';

    var i = balls.length;
    
    while (i--) balls[i].draw(ctx);

    if (mouse.down) {

        ctx.fillStyle   = 'rgba(0,0,0,0.1)';
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, MOUSE_SIZE, 0, TWO_PI);
        ctx.fill();
        ctx.stroke();
    }

    requestAnimFrame(update);

    //console.log(new Date().getTime() - time);
};

var add_ball = function(x, y, r, t) {

    if (canvas.width > 1200) {
    var x = x || Math.random() * (canvas.width - 60) + 30,
        y = y || Math.random() * (canvas.height - 60) + 30,
        // r = r || 10 + Math.random() * 20,
        r = r || 50,    //球半徑
        s = true,
        t = rand(1,5),  //隨機指定球種
        i = balls.length;
    } else {
    var x = x || Math.random() * (canvas.width - 60) + 30,
        y = y || Math.random() * (canvas.height - 60) + 30,
        // r = r || 10 + Math.random() * 20,
        r = r || 25,    //球半徑
        s = true,
        t = rand(1,5),  //隨機指定球種
        i = balls.length;
    }


    while (i--) {

        var ball = balls[i];
        var diff_x = ball.x - x;
        var diff_y = ball.y - y;
        var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

        if (dist < ball.radius + r) {
            s = false;
            break;
        }
    }

    if (s) balls.push(new Ball(x, y, r, t));
};
window.onresize = function() {
    canvas = document.getElementById('ballCanvas');
    ctx = canvas.getContext('2d');

    
    // if (window.innerWidth > 1240) {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    // } else {
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerWidth;
    // }
    
    
};
window.onload = function() {

    canvas = document.getElementById('ballCanvas');
    ctx = canvas.getContext('2d');

    
    // if (window.innerWidth > 1240) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    // } else {
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerWidth;
    // }
    
    
    while (NUM_BALLS--) add_ball();

    canvas.onmousedown = function(e) {

        if (e.which == 3) {

            if (LIMIT_BALLS-- > 0) {
                console.log('LIMIT_BALLS: '+ LIMIT_BALLS);
                add_ball(mouse.x, mouse.y);    
            }
            

        } else if (e.which == 1) {

            mouse.down = true;
            document.body.style.cursor = 'none';
        }

        e.preventDefault();
    };

    canvas.ontouchstart = function(e) {

        mouse.down = true;
        document.body.style.cursor = 'none';        
        
    };

    canvas.onmouseup = function(e) {

        if (e.which == 1) {

            mouse.down = false;
            document.body.style.cursor = 'default';
        }

        e.preventDefault();
    };

    canvas.ontouchend = function(e) {

            mouse.down = false;
            document.body.style.cursor = 'default';
        
    };

    canvas.onmousemove = function(e) {

        var rect = this.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    canvas.ontouchmove = function(e) {

        this.touch=e.targetTouches[0];
        var rect = this.getBoundingClientRect();

        mouse.x = this.touch.pageX - rect.left;
        mouse.y = this.touch.pageY - rect.top;

        // mouse.x = e.clientX - rect.left;
        // mouse.y = e.clientY - rect.top;

        
        // console.log('mouse.x: '+ mouse.x);
        // console.log('mouse.y: '+ mouse.y);

    };
  
    canvas.onmouseout = function(e) {
      
        mouse.down = false;
        document.body.style.cursor = 'default';
    };

    canvas.oncontextmenu = function(e) {

        e.preventDefault();
        return false;
    };

    update();
};