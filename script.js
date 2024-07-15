document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    document.body.addEventListener('mousemove', function(e) {
        customCursor.style.left = `${e.pageX}px`;
        customCursor.style.top = `${e.pageY}px`;
    });

    document.body.addEventListener('mouseenter', function() {
        customCursor.style.display = 'block';
    });

    document.body.addEventListener('mouseleave', function() {
        customCursor.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 1700;
    canvas.height = 450;

    // Ball object
    class Ball {
        constructor(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            // Bounce off walls
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            // Update position
            this.x += this.dx;
            this.y += this.dy;

            // Draw the ball
            this.draw();
        }
    }

    // Create new balls with predefined colors
    const balls = [
        new Ball(50, 100, 2, 3, 20, 'orange'),
        new Ball(150, 80, -2, -2, 20, 'green'),
        new Ball(250, 150, 3, -2, 20, 'black'),
        new Ball(200, 100, 1, -2, 20, 'orange'),
        new Ball(150, 80, 3, 3, 20, 'green'),
        
        
    ];

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        balls.forEach(ball => {
            ball.update();
        });
    }

    animate();
});
