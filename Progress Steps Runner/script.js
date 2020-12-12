{
    let progressbar=document.querySelector('.progress_step_runner');
    let currNo=1;
    let noOfEndPoints=5;
    
    let end_Points;
    let progress_step_bar;
    function init(){
        for(let i=1;i<=noOfEndPoints;i++){
            // <div class="_endPoint _end_active">1</div>
            let endPoint=document.createElement('div');
            endPoint.classList.add('_endPoint');
            endPoint.innerText=i;
            progressbar.appendChild(endPoint);
            if(i!=noOfEndPoints){
                let progressStepBar=document.createElement('div');
                progressStepBar.classList.add('progress_step_bar');
                progressStepBar.innerHTML='<div class="__bar_inactive"></div>';
                progressbar.appendChild(progressStepBar);
            }
        }
        progressbar.children[0].classList.add('_end_active');
        end_Points=document.querySelectorAll('._endPoint');
        progress_step_bar=document.querySelectorAll('.progress_step_bar');
    }
    init();
    function __progress_bar_next(){
        if(currNo===noOfEndPoints) return;
        end_Points[currNo].classList.add('_end_active');
        if(currNo!=noOfEndPoints){
            progress_step_bar[currNo-1].children[0].classList.add('__bar_active');
        }
        currNo++;
    }
    function __progress_bar_prev(){
        if(currNo===1) return;
        currNo--;
        end_Points[currNo].classList.remove('_end_active');
        if(currNo!=noOfEndPoints){
            progress_step_bar[currNo-1].children[0].classList.remove('__bar_active');
        }
    }
}