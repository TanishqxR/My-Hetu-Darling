let highestZ = 1;

class Paper{
    holdingPaper = false;

    prevMouseX = 0;
    prevMouseY = 0;

    MouseX = 0;
    MouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    init(paper){
        paper.addEventListener('mousedown', (e) =>{
           
            this.holdingPaper =true;
            paper.style.zIndex = highestZ;
            highestZ+= 1;

            if(e.button === 0){
                this.prevMouseX = this.MouseX;
                this.prevMouseY = this.MouseY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }

        })

        document.addEventListener('mousemove', (e) =>{
            
            this.MouseX = e.clientX;
            this.MouseY = e.clientY;

            this.velocityX = this.MouseX - this.prevMouseX;
            this.velocityY = this.MouseY - this.prevMouseY;

            if(this.holdingPaper){
                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.MouseX;
                this.prevMouseY = this.MouseY;

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
            }

        })
        window.addEventListener('mouseup', (e) =>{
            console.log('mouse button is released');
            this.holdingPaper = false;
        })
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper =>{
    const p = new Paper();
    p.init(paper);
})